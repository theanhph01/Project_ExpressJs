const {getHomePage} = require("../controller/main")

const express = require("express")
const router = express.Router()

router.route("/").get(getHomePage)

module.exports = router



