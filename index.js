var express = require("express");
var app = express();

const timestamp = Date.now();
const uname = require("os").userInfo().username

name = "My message is: " + uname,

message = { "message" : name, "timestamp" : timestamp }


app.get("/url", (req, res, next) => {
 res.send([message]);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
