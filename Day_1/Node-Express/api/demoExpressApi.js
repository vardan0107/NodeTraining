// require express
// create app reference object for API look up with get post put delete
var express = require("express");
//Import the FS internal node
var fs = require("fs");
var app = express();

// This responds with "Hello World" on the homepage
// GET is using for Fatch   Status code 200k
app.get("/customerDetails", function (req, res) {
  // red operation with file
  // data base intration with MYSQL // Mongo
  fs.readFile(__dirname + "/" + "demo.json", "utf8", function (err, data) {
    console.log(data);
    res.send(data);
  });
});

//  POST is for Create the Data // Status code :-- 201 Create
// This responds a POST request for the homepage
app.post("/post", function (req, res) {
  console.log("Got a POST request for the homepage");
  res.send("Hello POST");
});

// delete for ..record deletion   --- 200 k
// This responds a DELETE request for the /del_user page.
app.delete("/del_user", function (req, res) {
  console.log("Got a DELETE request for /del_user");
  res.send("Hello DELETE");
});

// list of user :--- 200k
// This responds a GET request for the /list_user page.
app.get("/list_user", function (req, res) {
  console.log("Got a GET request for /list_user");
  res.send("Page Listing");
});

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get("/ab*cd", function (req, res) {
  console.log("Got a GET request for /ab*cd");
  res.send("Page Pattern Match");
});

var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
