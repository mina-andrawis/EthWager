const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const wagerSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  collec_name: {
    type: String,
    required: false,
  },
  initial_floor_price: {
    type: String,
    required: false,
  },
  bid_velocity: { 
    type: String,
    required: false,
  },
});

const userModel = mongoose.model("User", userSchema);
const wagerModel = mongoose.model("Wager", wagerSchema);

module.exports = userModel;
module.exports = wagerModel;