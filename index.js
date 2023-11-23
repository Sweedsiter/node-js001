const express = require("express");
const router = require("./routs/router");
const app = express();
const port = 8002;

app.get("/", (req, res) => {
  res.send("This is Home Page");
});
// routers
app.use("/product", router);

app.listen(port, "localhost", () => {
  console.log("start port 8002");
});
module.exports = app;
