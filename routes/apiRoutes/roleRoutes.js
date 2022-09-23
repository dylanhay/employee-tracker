const db = require("../db/connection");
const cTable = require("console.table");

const {cycle} = require("./index");
const { addRoleQ } = require("../utils/prompts");

// Get all roles
const viewRoles = () => {
  const sql = `SELECT * FROM roles`;
  db.query(sql, (err, row) => {
      if (err) {
          console.log(err);
      }
      else {
          const table = cTable.getTable(row);
          console.log(table);
          returnToMainMenu();
      }
  })
};

// Create a new role
const addRole = () => {
  const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`
  inquirer.prompt(addRoleQ).then(
      (data) => {
          const params = [data.role, data.salary, data.departmentOfRole]
          db.query(sql, params, (err, result) => {
              if (err) {
                  console.log(err);
              }
              else {
                  console.log("Success");
                  cycle();
              };
          })
      }
  )
};

module.exports = {viewRoles, addRole};
