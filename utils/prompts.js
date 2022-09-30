const db = require("../db/connection");

// initial question
const initialQ = [
  {
    type: "list",
    name: "initialQ",
    message: "Welcome to the company database - what would you like to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
      "EXIT",
    ],
  },
];

// new department
const addDepartmentQ = [
  {
    type: "input",
    name: "department",
    message: "What is the name of the department?",
  },
];

// new role
const addRoleQ = [
  {
    type: "input",
    name: "role",
    message: "What is the name of the role?",
  },
  {
    type: "input",
    name: "salary",
    message: "What is the salary of the role?",
  },
  {
    type: "list",
    name: "departmentOfRole",
    message: "Select a department for the new role",
    choices: function () {
      return new Promise(function (resolve, reject) {
        const sql = `SELECT * FROM departments`;
        db.query(sql, (err, row) => {
          if (err) {
            return reject(err);
          } else {
            let deptsArr = [];
            row.forEach((obj) =>
              deptsArr.push({ name: obj.name, value: obj.id })
            );
            resolve(deptsArr);
          }
        });
      });
    },
  },
];

// add employee
const addEmployeeQ = [
    {
        type: "input",
        name: "first_name",
        message: "What is the employee's first name?"
    },
    {
        type: "input",
        name: "last_name",
        message: "What is the employee's last name?"
    },
    {
        type: "list",
        name: "role_id",
        message: "What is the employee's role?",
        choices: function () {
            return new Promise (function (resolve, reject) {
                const sql = `SELECT roles.id, roles.title FROM roles`;
                db.query(sql, (err, row) => {
                    if (err) {
                        return reject(err);
                    }
                    else {
                        let rolesArr = [];
                        row.forEach(obj => rolesArr.push({name: obj.title, value: obj.id}))
                        resolve(rolesArr)
                    }
                })
            })
        }
    }
];

// update employee role
const updateEmployeeQ = [
    {
        type: "list",
        name: "employeeSelect",
        message: "Which employee role would you like to update?",
        choices: function () {
            return new Promise (function (resolve, reject) {
                const sql = `SELECT employees.id, CONCAT (employees.first_name, ' ', employees.last_name) employees FROM employees`;
                db.query(sql, (err, row) => {
                    if (err) {
                        return reject(err);
                    }
                    else {
                        let empsArr = [];
                        row.forEach(obj => empsArr.push({name: obj.employees, value: obj.id}))
                        resolve(empsArr)
                    }
                })
            })
        }
    },
    {
        type: "list",
        name: "newRole",
        message: "Select a new role for the employee",
        choices: function () {
            return new Promise (function (resolve, reject) {
                const sql = `SELECT roles.id, roles.title FROM roles`;
                db.query(sql, (err, row) => {
                    if (err) {
                        return reject(err);
                    }
                    else {
                        let rolesArr = [];
                        row.forEach(obj => rolesArr.push({name: obj.title, value: obj.id}))
                        resolve(rolesArr)
                    }
                })
            })
        }
    }
];

module.exports = {initialQ, addDepartmentQ, addRoleQ, addEmployeeQ, updateEmployeeQ};