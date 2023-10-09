// Internal modules
var Person = require("./ES5Module");
var Demo = require("./ES6Module");
// var BasicCal = require("./BasicCal");
// var SciCal = require("./SciCal");

// external modules
const http = require("http");
var fs = require("fs");

var a = new Person();
var b = new Demo();
// var c = new BasicCal();
// var d = new SciCal();
const server = http
  .createServer(function (req, res) {
    try {
      var data = fs.readFileSync("./test.txt", "utf8");
      fs.readFile("./test.txt", function (err, data ) {
        console.log("inside readfile");
        // if (err) return console.error(err);
        console.log("data.toString()"+ data.toString())
        res.write(data.toString());
        res.write("\nprogram ended222222222");
      });
      res.writeHead(200, { "Content-Type": "text/plain" });
      console.log("\n<----- Server Started ------->");
      res.write("\nES5 Module -->" + a.sayHello());
      res.write("\nES5 Module -->" + a.sayHi());
      res.write("\nES6 Module -->" + b.print());
      res.write("\nfile operation blocking code" + data.toString());
      res.end();
    } catch (error) {
      console.error("Error occurred: ", error);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    }
  })
  .listen(8082);

console.log(a.sayHello());
console.log(a.sayHi());

console.log(b.print());

// console.log(c.add(1,2))
// console.log(d.sqrt(4))
