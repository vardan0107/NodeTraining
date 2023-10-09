// SQL & node Connection  node gives internalmodule
// SQL we refer as External module here

var mysql = require("mysql"); // External module for Node/Express

// logger instance with Node & MYSQL
var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "debug";

// configuration of SQL to coonet with Node here

// Config of SQL pararameter to connect with NODE
var con = mysql.createConnection({
  host: "localhost", // local host / ip address of your machine
  user: "root",
  password: "root",
  database: "customer",
});

// Write a code to test the connectio of node with Express

// Testing the connection with any DDL/DML operation

// con.connect(function(err) {
//     if (err) throw err;
//     console.log(" DB is --Connected!");
//   });

// insert operation here to insert the data MYSQL in node

// Insert operation

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   //Insert a record in the "customers" table:
//   var sql = "INSERT INTO customer_details (id, name) VALUES (2, 'Hitesh')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });


// fetch the result here :--> 
// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM customer_details", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });



// Update SQL 

// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "UPDATE customer_details SET name = 'Raj' WHERE id = 2";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result.affectedRows + " record(s) updated");
//     });
//   });

// delete
// delete SQL 

con.connect(function(err) {
    if (err) throw err;
    var sql = "DELETE FROM customer_details WHERE id = 2";
    logger.debug(sql);
    con.query(sql, function (err, result) {
      if (err) throw err;
      logger.debug("Number of records deleted: " + result.affectedRows);

    });
  });