const express = require("express");
const Toy = require("../models/Toy");
const router = express.Router();

// GET all toys
router.get("/", async (req, res) => {
  const toys = await Toy.find();
  res.json(toys);
});

// ADD toy
router.post("/", async (req, res) => {
  const toy = new Toy(req.body);
  await toy.save();
  res.json({ message: "Toy added" });
});

// DELETE toy
router.delete("/:id", async (req, res) => {
  await Toy.findByIdAndDelete(req.params.id);
  res.json({ message: "Toy deleted" });
});

module.exports = router;
