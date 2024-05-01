var express = require("express");
var http = require('http');
var app = express();


var TIMESTAMP = new Date();
TIMESTAMP.setDate(17);
parseInt(TIMESTAMP);

var UNAME = require("os").userInfo().username
name = "My name is: " + UNAME
name=name.toString();

var message = {"message": name, "timestamp": TIMESTAMP}

http.createServer(app).listen(3000)

app.get("/", (req, res, next) => {
 res.send([message]);
});

app.listen = (3000, 'localhost', function() {
	console.log("Server running on port 3000")
	const server = http.createServer(this)
	return server.listen.apply(server, arguments)
});

