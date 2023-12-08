const express = require("express");
const router = require("./routs/router");
const app = express();
const port = 8002;
const cookieParser = require("cookie-parser");
const session = require("express-session");
app.use(
  session({ secret: "mysession", resave: false, saveUninitialized: false }),
);
const connectDB = require("./Config/db");
connectDB();
app.use(cookieParser());
// ----------------
// set the view engine to ejs
app.use(express.json());
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.listen(port, "localhost", () => {
  console.log("start port 8002");
});
module.exports = app;
