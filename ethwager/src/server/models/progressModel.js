const mongoose = require("mongoose");

const ProgressSchema = new mongoose.Schema({
  wager_id: {
    type: String,
    required: true,
  },
  initial_floor: {
    type: String,
    required: true,
  },
  current_floor: {
    type: String
  },
});

const progressModel = mongoose.model("Progress", ProgressSchema);

module.exports = progressModel;