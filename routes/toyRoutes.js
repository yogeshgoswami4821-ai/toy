const express = require("express");
const Toy = require("../models/Toy");

const router = express.Router();

/* ADD TOY */
router.post("/", async (req, res) => {
  try {
    const toy = await Toy.create(req.body);
    res.json(toy);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* GET ALL TOYS */
router.get("/", async (req, res) => {
  const toys = await Toy.find();
  res.json(toys);
});

/* GET SINGLE TOY */
router.get("/:id", async (req, res) => {
  const toy = await Toy.findById(req.params.id);
  res.json(toy);
});

/* DELETE TOY */
router.delete("/:id", async (req, res) => {
  await Toy.findByIdAndDelete(req.params.id);
  res.json({ message: "Toy deleted" });
});

module.exports = router;
