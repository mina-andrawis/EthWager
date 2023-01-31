const mongoose = require("mongoose");

const ProgressSchema = new mongoose.Schema({
  wager_id: {
    type: String,
    required: true,
  },
  user_id: {   
    type: String,
    required: true,
  },
  initial_floor: {
    type: String,
    required: true,
  },
  floor_data: {
    type: Array
  },
  date_data: {
    type: Array
  },
});

const progressModel = mongoose.model("Progress", ProgressSchema);

module.exports = progressModel;