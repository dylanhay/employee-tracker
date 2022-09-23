const db = require("../db/connection");
const cTable = require("console.table");

const { cycle } = require("./index");
const { addDepartmentQ } = require("../utils/prompts");

// Get all departments
const viewDepartments = () => {
  const sql = `SELECT * FROM departments`;
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    } else {
      // Print table data to console
      const table = cTable.getTable(row);
      console.log(table);
      cycle();
    }
  });
};

// Create a new department
const addDepartment = (data) => {
  const sql = `INSERT INTO  departments (name) VALUES (?)`;
  inquirer.prompt(addDepartmentQ).then((data) => {
          db.query(sql, data.department, (err, result) => {
              if (err) {
                  console.log(err);
              }
              else {
                  console.log("Success");
                  cycle();
              };
          })
      }
  );
};

module.exports = {viewDepartments, addDepartment};
