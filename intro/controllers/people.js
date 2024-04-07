let { people } = require("../data.js");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const postPeople = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "Not value name" });
  }
  res.status(201).json({ success: true, person: name });
};

const updatePerson = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const person = people.find((person) => person.id === Number(id));
    if (!person) {
      return res.status(404).json({ success: false, msg: "Not found person" });
    }
    const newPeople = people.map((person) => {
      if (person.id === Number(id)) {
        person.name = name;
      }
      return person;
    });
    res.status(200).json({ status: true, data: newPeople });
  }

const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));
    if (!person) {
      return res.status(404).json({ success: false, msg: "Not found person" });
    }
    const newPeople = people.filter(
      (person) => person.id !== Number(req.params.id)
    );
    res.status(200).json({ status: true, data: newPeople });
  }

module.exports = {
    getPeople,
    postPeople,
    updatePerson,
    deletePerson,
}
