const db = require("../db/connection");
const cTable = require("console.table");

const {cycle} = require("./index");
const {addEmployeeQ, updateEmployeeQ} = require("../utils/prompts");

// Get all employees
const viewEmployees = () => {
  const sql = `SELECT employees.*, roles.title 
               AS role_title 
               FROM employees
               LEFT JOIN roles
               ON employees.role_id = roles.id`;
  db.query(sql, (err, row) => {
      if (err) {
          console.log(err);
      }
      else {
          const table = cTable.getTable(row);
          console.log(table);
          cycle();
      }
  });
};

// Add new employee
const addEmployee = () => {
  const sql = `INSERT INTO employees (first_name, last_name)
                VALUES (?,?)`;
  inquirer.prompt(addEmployeeQ).then(
      (data) => {
          // Manager id will either be the id of another employee or null indicating they have no manager
          const params = [data.first_name, data.last_name, data.role_id];
          db.query(sql, params, (err, result) => {
              if (err) {
                  console.log(err);
              }
              else {
                  console.log("Success");
                  cycle();
              }
          })
      }
  )
};

// Update an employee's role
router.put("/employee/:id", (req, res) => {
  const errors = inputCheck(req.body, "role_id");

  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }


  const params = [req.body.role_id, req.params.id];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      // check if a record was found
    } else if (!result.affectedRows) {
      res.json({
        message: "Employee not found",
      });
    } else {
      res.json({
        message: "success",
        data: req.body,
        changes: result.affectedRows,
      });
    }
  });
});

// Function to update employee role
const updateEmployeeRole = () => {
  const sql = `UPDATE employees SET role_id = ? 
                 WHERE id = ?`;
  inquirer.prompt(updateEmployeeQ).then((data) => {
      const params = [data.newRole, data.employeeSelect];

      db.query(sql, params, (err, result) => {
          if (err) {
              console.log(err);
          }
          else {
              console.log("Success");
              cycle();
          }
      })
  })
};

module.exports = { viewEmployees, addEmployee, updateEmployeeRole };