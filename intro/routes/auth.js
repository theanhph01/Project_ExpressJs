const express = require("express");
const router = new express.Router();

router.get("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(401).send(`Not found user name '${name}'`);
  }
  return res.status(200).send(`Welcome '${name}'`);
});

module.exports = router;
