const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});
app.listen(3000, () => {
  console.log("Server is listening on port 3000....");
});
