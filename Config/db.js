const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://d27saitunlu:tCTScfgrUIf4mOPH@cluster0.bvxpmda.mongodb.net/",
    );
    console.log("DB Connected");
  } catch (error) {
    console.log("DB not connected");
  }
};
module.exports = connectDB;
