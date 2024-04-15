var express = require("express");
var app = express();
const timestamp = Date.now();
const name = require("os").userInfo().username


app.get("/url", (req, res, next) => {
 res.send(["My name is", name, "timestamp", timestamp]);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
