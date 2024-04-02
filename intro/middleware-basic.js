const express = require("express");
const { people, products } = require("./data");

const app = express();

//req => middleware => res
const logger = (req, res, next) =>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time); 
    next()
}

app.get("/", logger, (req, res)=>{
    res.send("Home Page")
})
app.get("/about",logger, (req, res)=>{
    res.send("About Page")
})


app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});
app.listen(3000, () => {
  console.log("Server is listening on port 3000....");
});