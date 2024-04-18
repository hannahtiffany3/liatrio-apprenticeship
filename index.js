var express = require("express");
var app = express();

const timestamp = Date.now();
const uname = require("os").userInfo().username

name = "My name is: " + uname

message = { "Message" : name, "Timestamp" : timestamp }


app.get("/", (req, res, next) => {
 res.send([message]);
});

app.listen(80, () => {
 console.log("Server running on port 80");
});
