const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "vancity#1",
    database: "company",
  },
  console.log("Connected to the company database.")
);

// GET all employees
// db.query(`SELECT * FROM employees`, (err, rows) => {
//   console.log(rows);
// });

// GET a single employee
// db.query(`SELECT * FROM employees WHERE id = 1`, (err, row) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(row);
// });

// Delete a candidate
// db.query(`DELETE FROM employees WHERE id = ?`, 2, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// Create a candidate
const sql = `INSERT INTO employees (id, first_name, last_name) 
              VALUES (?,?,?)`;
const params = [2, 'Paul', 'McCartney'];

db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
