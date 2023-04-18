let express = require("express");
let app = express();
let path = require("path");

// level 1
// console.log("Hello world");
// level 2
// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

// level 3
// const absolutePath = __dirname + "/views/index.html";

// app.get("/", (req, res) => {

//   res.sendFile(absolutePath)
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// level 4
app.use("/public", express.static(__dirname + "/public"));

module.exports = app;
