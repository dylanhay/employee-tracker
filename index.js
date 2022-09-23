const inquirer = require("inquirer")
const { apiRoutes } = require('./routes/apiRoutes/index');
const { initialQ } = require("./utils/prompts");

// Function to initialize application
const start = () => {
  inquirer.prompt(initialQ).then(apiRoutes);
};

start();
