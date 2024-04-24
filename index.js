var express = require("express");
var http = require('http');
var app = express();
//app.listen(3000)


const TIMESTAMP = Date.now();
const UNAME = require("os").userInfo().username

name = "My name is: " + UNAME

message = {"Message":name , "Timestamp": TIMESTAMP }

http.createServer(app).listen(80)

app.listen = function() {
	const server = http.createServer(this)
	return server.listen.apply(server, arguments)
}

app.get("/", (req, res, next) => {
 res.send([message]);
});

app.listen(3000, 'localhost', () => {
 console.log("Server running on port 80");
});

