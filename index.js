var express = require("express");
var http = require('http');
var app = express();


const TIMESTAMP = Date.now();
const UNAME = require("os").userInfo().username

name = "My name is: " + UNAME

message = {"Message": name , "Timestamp": TIMESTAMP }

http.createServer(app).listen(3000)


app.get("/", (req, res, next) => {
 res.send([message]);
});

app.listen = (3000, 'localhost', function() {
	console.log("Server running on port 3000")
	console.log(UNAME);
	const server = http.createServer(this)
	return server.listen.apply(server, arguments)
});

