const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
});

const Customer = mongoose.model("customerData", CustomerSchema, "customerData");

module.exports = Customer;
