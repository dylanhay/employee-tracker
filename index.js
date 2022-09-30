const inquirer = require("inquirer")
const { starterReq } = require('./routes/apiRoutes/index');
const { initialQ } = require("./utils/prompts");

// Start application
const start = () => {
  inquirer.prompt(initialQ).then(starterReq);
};

start();
