const mysql = require("mysql2");

const db = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "vancity#1",
      database: "company",
    }
  );

  module.exports = db;