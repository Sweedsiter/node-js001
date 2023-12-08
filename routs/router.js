const express = require("express");
const router = express.Router();
const multer = require("multer");
const DBproduct = require("../Models/Product");
const {
  list,
  read,
  addmin,
  login,
  logout,
  manager,
  addform,
  cread,
} = require("../Controllers/ProductController");

DBproduct.aggregate([
  {
    $group: {
      _id: { group: "$group" },
    },
  },
])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

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

module.exports = router;
