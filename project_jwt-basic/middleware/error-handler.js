const customError = require("../error/error-custom");

const errorHandler = (err, req, res, next) => {
  if (err instanceof customError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: "Something went wrong !" });
};

module.exports = errorHandler;
