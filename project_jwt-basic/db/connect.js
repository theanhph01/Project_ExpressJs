const mongoose = require('mongoose')

const connectDB = (url) =>{
    console.log("Connect Database Successful");
    return mongoose.connect(url)
}

module.exports = connectDB;