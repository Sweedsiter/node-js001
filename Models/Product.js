const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: String,
    group: {
      type: String,
    },
    image: {
      type: String,
    },
    lkurl: {
      type: String,
    },
    price: {
      type: String,
    },
    tital: String,
  },

  { timestamps: true },
);
module.exports = mongoose.model("products", productSchema);
