var express = require("express");
var app = express();
const timestamp = Date.now();
const name = require("os").userInfo().username

app.get("/url", (req, res, next) => {
 res.json([
	 "message: My name is : timestamp: " ]);
});
app.listen(3000, () => {
 console.log("Server running on port 3000");
});
