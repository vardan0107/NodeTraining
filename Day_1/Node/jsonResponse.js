var http=require("http");
var fs=require("fs");
var obj;
http.createServer(function(request,response){
	// REST integration with back end server call using Exress js Methods
	var data=fs.readFile('demo.json','utf8',function(err,data){
	if(err) return console.error(err);
	obj=JSON.parse(data);  // parse method use to read the JSON code 
	console.log(obj);
	response.writeHead(200,{"Content-Type": "text/plain"});
	response.write("name of customer --> "+obj.name);
    response.write("Age of customer -->"+obj.age)
    response.write("Location of the Customer-->" +obj.location);
	response.end();
	});
}).listen(8888);
