const express = require("express");
const app = express();

require("dotenv").config();
require("express-async-errors");

//connect Database
const connectDB = require("./db/connect");

//middlewares
app.use(express.json());
const authenticateUser = require("./middleware/auth");

//routes
const authRouter = require("./routes/auth");
const jobsRouter = require("./routes/jobs");

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

const errorHandlerMiddleware = require("./middleware/error-handle");
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
const url = process.env.MONGO_URI;

const start = async () => {
  try {
    await connectDB(url);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
