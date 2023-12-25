const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: String,

    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },

  { timestamps: true },
);
module.exports = mongoose.model("regit", productSchema);
