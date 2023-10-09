const mongoose = require("mongoose");

// Connection URL

const url = "mongodb://localhost:27017/mydbs"; // Replace with your MongoDB server URL and database name

// Connect to the server

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection

const db = mongoose.connection;

// Event handlers for connection events

db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", () => {
  console.log("Connected to MongoDB");

  // Now you can define and use Mongoose models for your data

  // Close the connection when done

  // mongoose.connection.close();
});
var myobj = { name: "xyz", email: "sofia", number: 1234567 };

// db.collection("customers").insertOne(myobj, function (err, res) {
//   if (err) throw err;
//   console.log("1 document inserted");
//   db.close();
// });

db.once("open", () => {
  console.log("Connected to MongoDB");

  const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: Number
  });

  const Customer = mongoose.model("customers", customerSchema);

  Customer.find({ email: "sofia" })
    .then((documents) => {
      console.log("Matching documents:", documents);
    })
    .catch((err) => {
      console.error(err);
    });
});

// const customer = require('../models/CustomerModel');

// // Create a new user
// const newCustomer = new customer({
//   name: 'John Doe',
//   email: 'johndoe@example.com',
//   password: 'password123'
// });

// newCustomer.save()
//   .then(() => console.log('customer created'))
//   .catch((err) => console.log(err));

// // Read all customers
// customer.find()
//   .then((customers) => console.log(customers))
//   .catch((err) => console.log(err));

// // Update a customer
// customer.findOneAndUpdate({ name: 'John Doe' }, { name: 'Jane Doe' })
//   .then(() => console.log('customer updated'))
//   .catch((err) => console.log(err));

// // Delete a customer
// customer.deleteOne({ name: 'Jane Doe' })
//   .then(() => console.log('customer deleted'))
