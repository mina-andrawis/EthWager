const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const WagerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
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

const userModel = mongoose.model("User", UserSchema);
const wagerModel = mongoose.model("Wager", WagerSchema);

module.exports = userModel;
module.exports = wagerModel;