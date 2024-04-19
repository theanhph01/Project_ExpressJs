const { query } = require("express");
const Product = require("../models/product");
const product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { name, company, featured, sort, fields, limit, page, numericFilters } =
    req.query;
  const queryObj = {};
  if (featured) {
    queryObj.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObj.company = company;
  }
  if (name) {
    queryObj.name = { $regex: name, $options: "i" };
  }
  if (numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    const options = ['price', 'rating'];
    filters = filters.split(',').forEach((item) => {
      const [field, operator, value] = item.split('-');
      if (options.includes(field)) {
        queryObj[field] = { [operator]: Number(value) };
      }
    });
  }
  //Query params
  let result = Product.find(queryObj);
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }
  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    result = result.select(fieldsList);
  }
  //   if (limit) {
  //     const limitNumber = parseInt(limit)
  //     result = result.limit(limitNumber)
  //   }

  const pageNumber = Number(page) || 1;
  const limitPage = Number(limit) || 10;
  const skip = (pageNumber - 1) * 10;
  result = result.limit(limitPage).skip(skip);

  const products = await result;
  res.status(200).json({ nbHits: products.length, products });
};

const getAllStaticProducts = async (req, res) => {
  const products = await Product.find({ price: { $lt: 30 } }).select(
    "name price"
  );
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProducts,
  getAllStaticProducts,
};
