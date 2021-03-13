const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const puzzleSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  winCondition: { type: String, required: true },
  isSolved: { type: Boolean, default: false },
});

const Puzzle = mongoose.model("Puzzle", puzzleSchema);

module.exports = Puzzle;