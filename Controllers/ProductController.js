const DBproduct = require("../Models/Product");

// List Products
const list = async function (req, res) {
  try {
    const products = await DBproduct.find({}).exec();
    res.render("index", {
      products: products,
    });
    console.log("Time: ", Date.now(), "This Products Page");
  } catch (error) {
    console.log("error");
    res.status(500).send("Sever error");
  }
};
module.exports.list = list;

// List read
const read = async function (req, res) {
  try {
    const id = req.params.id;
    const products = await DBproduct.findOne({ _id: id }).exec();
    res.render("productRead", {
      products: products,
    });
    console.log("Time: ", Date.now(), "This read Page");
  } catch (error) {
    console.log("error");
    res.status(500).send("Sever error");
  }
};
module.exports.read = read;
// Cread Document
exports.addform = async function (req, res) {
  if (req.session.login) {
    res.render("addform");
  } else {
    res.redirect("/login");
  }
  console.log("addform Page", Date.now());
};

exports.cread = async function (req, res) {
  await DBproduct({
    name: req.body.fileName,
    price: req.body.price,
    group: req.body.group,
    image: req.file.filename,
    tital: req.body.tital,
    lkurl: req.body.urllogo,
  })
    .save()
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/manager");
};

// login form
exports.addmin = function (req, res) {
  res.render("Login");
  console.log("login Page", Date.now());
};
// Login เข้าระบบ
exports.login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  // const timeExpire = 5000; //100วินาทีนั้นเอง
  if (username === "peter" && password === "1234") {
    req.session.username = username;
    req.session.password = password;
    req.session.login = true;
    // req.session.cookie.maxAge = timeExpire;
    res.redirect("/manager");
    console.log("Login Connection", Date.now());
  } else {
    res.redirect("/login");
  }
};
// logout ออกระบบ
exports.logout = (req, res) => {
  req.session.destroy((err) => {
    res.redirect("/");
  });
};
// Addmin manager
exports.manager = async (req, res) => {
  if (req.session.login) {
    const products = await DBproduct.find({}).exec();
    res.render("manager", { products: products });
  } else {
    res.redirect("/login");
  }
};
