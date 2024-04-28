const mongoose = require("mongoose");

const connectDB = (url) => {
  console.log("Connect Database Sucessful");
  return mongoose.connect(url);
};

module.exports = connectDB;
