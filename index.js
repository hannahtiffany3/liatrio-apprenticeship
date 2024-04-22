var express = require("express");
var app = express();

const TIMESTAMP = Date.now();
const UNAME = require("os").userInfo().username

name = "My name is: " + UNAME

message = {"Message":name , "Timestamp": TIMESTAMP }


app.get("/", (req, res, next) => {
 res.send([message]);
});

app.listen(3000, 'localhost', () => {
 console.log("Server running on port 3000");
});

