var express = require("express");
var app = express();

var customerClass = require("../service/CustomerDAO");

var customerObj = new customerClass();

app.post("/createCustomer", function (req, res) {
  customerObj.createCustomer();
});

app.put("/updateCustomer", function (req, res) {
  customerObj.updateCustomerDetails();
});

app.delete("/deleteCustomer", function (req, res) {
  customerObj.deleteCustomerDetails();
});

app.get("/listCustomer", async function (req, res) {
  console.log(customerObj.listAllCustomerDetails() + "hel");
  const x = await customerObj.listAllCustomerDetails();
  res.send(x);
});

var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
