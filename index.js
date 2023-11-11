const express = require("express");
const app = express();
const port = 8002;

app.get("/", (req, res) => {
  res.send("This is Home Page");
});

app.listen(port, "localhost", () => {
  console.log("start port 8080");
});
module.exports = app;
