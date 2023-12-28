const express = require("express");
const router = express.Router();
const multer = require("multer");
const DBproduct = require("../Models/Product");
// const rigit = require("../Models/regit");
const {
  list,
  read,
  addmin,
  login,
  logout,
  manager,
  addform,
  cread,
  delet,
  EditItem,
  update,
} = require("../Controllers/ProductController");

// Group
// DBproduct.aggregate([
//   {
//     $group: {
//       _id: { group: "$group" },
//       count: { $sum: 1 },
//     },
//   },
// ])
//   .then()
//   .catch();

// Multer upload Images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/products");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + ".jpg");
  },
});
const upload = multer({
  storage: storage,
});

// middleware that is specific to this router
router.use((req, res, next) => {
  next();
});

// define the home page router
router.get("/", list);
router.get("/product/:id", read);
router.get("/login", addmin);
router.post("/login", login);
router.get("/manager", manager);
router.get("/logout", logout);
router.get("/addform", addform);
//Create one
router.post("/cread", upload.single("image"), cread);
router.get("/delet/:id", delet);
router.get("/edit/:id", EditItem);
router.post("/updateItem/:id", update);
router.get("/regit", async (req, res) => {
  // const products = await regit.find({}).exec();
  const products = await DBproduct.find({}).exec();
  const tt = products.map((e) => e.group);
  res.json(tt);
});

module.exports = router;
