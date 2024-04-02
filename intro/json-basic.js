const express = require('express')
const {people, products} = require('./data')

const app = express()

app.get("/", (req,res)=>{
    res.json(products)
})

app.all('*',(req,res)=>{
    res.status(404).send("Page not found")
})
app.listen(3000,()=>{
    console.log("Server is listening on port 3000....");
})