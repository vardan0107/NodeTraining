const mongoose = require("mongoose");

var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "debug";

const CustomerModel = require("../models/customerModel");

const url = "mongodb://localhost:27017/mydbs";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  logger.info("Connected successfully");
});

class CustomerDao {
  getAllCustomer = () =>
    new Promise((resolve) => {
      CustomerModel.find({}).then((customers) => {
        logger.info("All customers:" + customers);
        resolve(customers);
      });
    });

  addCustomer = (name, age) =>
    new Promise((resolve, reject) => {
      const newCustomer = new CustomerModel({
        name: "hello",
        age: 10,
      });

      newCustomer
        .save()
        .then((savedCustomer) => {
          logger.info("Customer saved successfully:" + savedCustomer);
          resolve(savedCustomer);
        })
        .catch((error) => {
          logger.error("Error saving customer:"+ error);
          reject()
        });
    });

  deleteCustomer = (customerId) =>
    new Promise(async (resolve, reject) => {
      const deletedCustomer = await CustomerModel.findByIdAndDelete(customerId);
      if (deletedCustomer) {
        logger.info("Customer deleted successfully:", deletedCustomer);
        resolve(deletedCustomer);
      } else {
        logger.error("Customer not found.");
        reject()
      }
    });

  updateCustomerById = (customerId, updatedData) =>
    new Promise(async (resolve, reject) => {
      const updatedCustomer = await CustomerModel.findOneAndUpdate(
        { _id: customerId },
        updatedData,
        { new: true }
      );

      if (updatedCustomer) {
        logger.info("Customer updated successfully:" + updatedCustomer);
        resolve(updatedCustomer);
      } else {
        logger.error("Customer not found.");
        reject();
      }
    });
}

// var a = new CustomerDao();

// const updatedData = {
//   name: "vardan1",
//   age: 25,
// };
// a.updateCustomerById("651f0768983e5e9c5ce7ca0a", updatedData);
module.exports = CustomerDao;
