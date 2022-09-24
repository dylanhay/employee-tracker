const inquirer = require("inquirer");
const db = require("../../db/connection");
const cTable = require("console.table");

const {
  addDepartmentQ,
  addEmployeeQ,
  updateEmployeeQ,
  addRoleQ,
  initialQ,
} = require("../../utils/prompts");

// Starting
const starterReq = (data) => {
  switch (data.initialQ) {
    case "View all departments":
      viewDepartments();
      break;

    case "View all roles":
      viewRoles();
      break;

    case "View all employees":
      viewEmployees();
      break;

    case "Add a department":
      addDepartment();
      break;

    case "Add a role":
      addRole();
      break;

    case "Add an employee":
      addEmployee();
      break;

    case "Update an employee role":
      updateEmployeeRole();
      break;
  }
};

// cycle back to initial question
const cycle = () => {
  inquirer.prompt(initialQ).then(starterReq);
};

// Get all departments
const viewDepartments = () => {
  const sql = `SELECT * FROM departments`;
  db.query(sql, (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    } else {
      // console.log('yo');
      const table = cTable.getTable(row);
      console.log(table);
      cycle();
    }
  });
};

// Create a new department
const addDepartment = () => {
  const sql = `INSERT INTO  departments (name) VALUES (?)`;
  inquirer.prompt(addDepartmentQ).then((data) => {
    db.query(sql, data.department, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
        cycle();
      }
    });
  });
};

// Get all roles
const viewRoles = () => {
  const sql = `SELECT roles.id, roles.title, roles.salary, departments.name
                AS department
                FROM roles 
                LEFT JOIN departments
                ON roles.department_id = departments.id`;
  db.query(sql, (err, row) => {
    if (err) {
      console.log(err);
    } else {
      const table = cTable.getTable(row);
      console.log(table);
      cycle();
    }
  });
};

// Create a new role
const addRole = () => {
  const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
  inquirer.prompt(addRoleQ).then((data) => {
    const params = [data.role, data.salary, data.departmentOfRole];
    db.query(sql, params, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
        cycle();
      }
    });
  });
};

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
    } else {
      const table = cTable.getTable(row);
      console.log(table);
      cycle();
    }
  });
};

// Add new employee
const addEmployee = () => {
  const sql = `INSERT INTO employees (first_name, last_name, role_id)
                  VALUES (?,?,?)`;
  inquirer.prompt(addEmployeeQ).then((data) => {
    // Manager id will either be the id of another employee or null indicating they have no manager
    const params = [data.first_name, data.last_name, data.role_id];
    db.query(sql, params, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
        cycle();
      }
    });
  });
};

// Update an employee's role
const updateEmployeeRole = () => {
  const sql = `UPDATE employees SET role_id = ? 
                   WHERE id = ?`;
  inquirer.prompt(updateEmployeeQ).then((data) => {
    const params = [data.newRole, data.employeeSelect];

    db.query(sql, params, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
        cycle();
      }
    });
  });
};

module.exports = { starterReq, cycle };
