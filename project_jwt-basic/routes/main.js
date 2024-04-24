const { login, dashboard } = require("../controller/main");
const authMiddleware = require("../middleware/auth");

const express = require("express");
const router = express.Router();

router.route("/dashboard").get(authMiddleware, dashboard);
router.route("/login").post(login);

module.exports = router;
