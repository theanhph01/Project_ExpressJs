const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Home page");
});
app.get("/about", (req, res) => {
  res.send("About page");
});
app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3000, () => {
  console.log("Server is listening 3000 port...");
});
