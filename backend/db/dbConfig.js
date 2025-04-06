const mysql2 = require("mysql2");

const dbconnection = mysql2.createPool({
  user: "sql8771655",
  host: "sql8.freesqldatabase.com",
  password:"VYn5nQ2jya",
  database: "sql8771655",
  port: 3306
});

module.exports = dbconnection.promise();
