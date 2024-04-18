const express = require("express");
const errHandlerMiddleWare = require("./middleware/error-handler");
const notFoundMiddleWare = require("./middleware/not-found");
const connectDB = require("./db/connect");
require("dotenv").config();

const app = express();

app.use(express.json());

//routes

app.use(notFoundMiddleWare);
app.use(errHandlerMiddleWare);

const port = process.env.PORT || 3000;
const url = process.env.MONGO_URI;

const start = async () => {
  try {
    await connectDB(url);
    app.listen(port, console.log(`Sever is listening on ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
