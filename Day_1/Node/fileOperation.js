var fs = require('fs');

// blocking code to read 
var data = fs.readFileSync('./test.txt', 'utf8');
console.log(data.toString());
console.log("program ended");


// Non blocking code

fs.readFile('./test.txt', function(err,data){
    if(err) return console.error(err);
    console.log(data.toString());
    console.log("program ended222222222");

})