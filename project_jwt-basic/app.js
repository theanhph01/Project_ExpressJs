const express = require("express");
const app = express();

require("dotenv").config();
require("express-async-errors");

//Errors
const notFoundPage = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");

app.use(express.json());

//Connect DB
const connectDB = require("./db/connect");

//Routes
const mainRouter = require("./routes/main");
app.use(express.static("./public"));
app.use("/api/v1", mainRouter);
app.use(notFoundPage);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
