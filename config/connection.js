const mysql = require('mysql');

const connection = mysql.createConnection({
    user: "root",
    host: "localhost",
    port: 3306,
    password: "mqEl3Ar4pQi^JcE4",
    database: "burgers_db"
})

// Connect to the database
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

module.exports = connection;