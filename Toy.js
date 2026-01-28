const mongoose = require("mongoose");

const toySchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String
});

module.exports = mongoose.model("Toy", toySchema);
