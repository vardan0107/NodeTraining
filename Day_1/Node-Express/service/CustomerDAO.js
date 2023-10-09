// Develop the CustomerDAO service with all method in ES6 and refer the class methods in
// CustomerAPI express code for performing all the operations
// 1 createCustoner
// 2 updateCustomer
// 3 deleteCustomer
// 4 listCustomer

// Test all the API In Thunder Client In VS code I
// sql constant .js
// https://expressjs.com/en/apf.htaltres

var mysql = require("mysql");
var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "debug";

class CustomerCrud {
  constructor() {
    this.con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "customer",
    });
  }

  listAllCustomerDetails = () => {
    this.con.connect();
    return new Promise((resolve, reject) => {
      let query = "SELECT * FROM customer_details";
      this.con.query(query, function (err, result, fields) {
        resolve(result);
      });
    });
  };
  updateCustomerDetails = () => {};
  deleteCustomerDetails = () => {};
  //   createCustomer = () => {
  //     let sql =
  //       "INSERT INTO customer_details (id, name, age) VALUES ('2','bachi', '30')";
  //     this.#connectDbAndRunQuery(sql);
  //   };
}

let p = new CustomerCrud();
// p.createCustomer();
p.listAllCustomerDetails();

module.exports = CustomerCrud;
