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

/*
const WagerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  collection: {
    type: String,
    required: false,
  },
  initial_floor_price: {
    type: String,
    required: false,
  },
  wager: {  // 1 = bullish , 2 = bearish //
    type: Boolean,
    required: false,
  },
});
*/

const User = mongoose.model("User", UserSchema);
//const Wager = mongoose.model("Wager", WagerSchema);

module.exports = User;
//module.exports = Wager;