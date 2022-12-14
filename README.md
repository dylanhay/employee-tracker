# Employee Tracker

## Description
A command-line application that manages a company's employee database using Node.js, Inquirer, and MySQL.

## License  
This application is covered under the following license. Please review the link below for additional information pertaining to the license.
    
![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)  
https://www.gnu.org/licenses/gpl-3.0

## Table of Contents
[Built With](#built-with)  
[Installation](#installation)  
[Walkthrough Video](#walkthrough-video)  
[Contribution](#contribution) 

## Built With
* JavaScript
* Node.js
* MySQL2
* Inquirer
* console.table
* Git

## Installation
* To install the required npm packages, enter `npm install` in the CLI
* Adjust the password in connection.js to your unique password for MySQL
* Enter `mysql -u root -p` in the CLI to launch MySQL
* Enter `source db/db.sql` in MySQL to create and move to the `company` database
* Enter `source db/schema.sql` in MySQL to create the tables and associated fields
* Enter `source db/seeds.sql` in MySQL to seed the tables with the provided sample data (optional)
* Enter `npm start` in the CLI to launch the application

## Walkthrough Video
https://drive.google.com/file/d/1vyQJcpvRz6HpzX2Ofv_vht2ljqCMVXIk/view

## Contribution
Built by Dylan Hay