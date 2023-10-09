const express = require("express");
const serverless = require("serverless-http");
const app = express();
app.get("/hello", (req, res) => res.send("namaste aws"));
exports.handler = serverless(app);
