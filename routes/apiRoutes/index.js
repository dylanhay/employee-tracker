const inquirer = require("inquirer");

const { viewDepartments, addDepartment,  } = require("./departmentRoutes");
const { viewRoles, addRole } = require("./roleRoutes");
const { viewEmployees, addEmployee, updateEmployeeRole } = require("./employeeRoutes");

// Function to route input selected by user at main menu
const starterReq = (data) => {
    switch(data.optionSelect) {
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
        
        default:
            exit();
            break;
    };
};


// Function to return user to main menu after executing other actions
const cycle = () => {
    inquirer.prompt(initialQ).then(starterReq);
};

// Function that allows user to exit the app from main menu
const exit = () => {
    console.log("Farewell")
    process.exit(0);
}

module.exports = {starterReq, cycle};