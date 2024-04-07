const express = require("express");
const {getPeople, postPeople, updatePerson, deletePerson} = require("../controllers/people.js")

const router = new express.Router();

// router.get("/", getPeople); 
// router.post("/", postPeople);
// router.put("/:id", updatePerson);
// router.delete("/:id", deletePerson);

router.route("/").get(getPeople).post(postPeople)
router.route(":id").put(updatePerson).delete(deletePerson)

module.exports = router