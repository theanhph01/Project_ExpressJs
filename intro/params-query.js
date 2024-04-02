const express = require("express");
const { people, products } = require("./data");

const app = express();

//Route Param
app.get("/api/products", (req, res) => {
  const newProduct = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProduct);
});
app.get("/api/products/:id", (req, res) => {
  id = req.params.id;
  const singleProduct = products.find((product) => product.id === Number(id));
  if (!singleProduct) {
    res.status(404).send("Product does not exist !");
  }
  res.json(singleProduct);
});

//Query String
app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res.status(200).json({ sucess: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});

app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});
app.listen(3000, () => {
  console.log("Server is listening on port 3000....");
});

