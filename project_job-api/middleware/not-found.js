const { StatusCodes } = require("http-status-codes");

const notFound = (req, res) =>
  res.status(StatusCodes.NOT_FOUND).send("Not Found Page");

module.exports = notFound;
