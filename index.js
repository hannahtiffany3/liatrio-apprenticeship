var express = require("express");
var http = require('http');
var app = express();


var timestamp = Date.now();
var uname = require("os").userInfo().username
name = "My name is: " + uname


http.createServer(app).listen(3000)

app.get("/", (req, res, next) => {
 res.json({
	 Message: name,
	 Timestamp: timestamp,
 });
});

app.listen = (3000, 'localhost', function() {
	console.log("Server running on port 3000")
	const server = http.createServer(this)
	return server.listen.apply(server, arguments)
});

