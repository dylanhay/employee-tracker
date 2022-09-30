# Employee Tracker

## Description
A command-line application that manages a company's employee database using Node.js, Inquirer, and MySQL.

## Table of Contents
[Built With](#built-with)  
[Installation Instructions](#installation-instructions)  
[Walkthrough Video](#walkthrough-video)  
[Contribution](#contribution) 

## Built With
* Node.js
* MySQL
* Inquirer
* console.table

## Installation Instructions
Node.js and MySQL must be installed to run this application locally.

* Node.js can be downloaded and installed from https://nodejs.org/en/download/  
* To initialize Node.js, enter `npm init --y` in the command line while in the root folder
* To install the required npm packages, enter `npm install` in the command line while in the root folder

* MySQL can be downloaded and installed from https://dev.mysql.com/downloads/mysql/
* Adjust the password in connection.js to your unique password for MySQL
* Enter `mysql -u root -p` in the command line to launch MySQL
* Enter `source db/db.sql` in MySQL to create and move to the company database
* Enter `source db/schema.sql` in MySQL to create the tables and associated fields
* Enter `source db/seeds.sql` in MySQL to seed the tables with the provided sample data (optional)

* Enter "npm start" in the command line to launch the application

## Walkthrough Video

## Contribution
Made with ❤️ by Dylan Hay