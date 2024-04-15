const express = require("express");
const homePage = require("./routes/task");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const app = express();

app.use(express.json());

app.use(express.static("./public"));
app.use("/api/v1/tasks", homePage);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Sever is listening on ${port}...`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
