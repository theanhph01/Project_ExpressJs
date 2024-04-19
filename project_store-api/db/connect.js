const mongoose = require("mongoose");

const connectDB = (url) => {
  console.log("Connect Database Succesful");
  return mongoose.connect(url);
};

module.exports = connectDB;
