const mongoose = require("mongoose");

const WagerSchema = new mongoose.Schema({
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
    expiration_date: { 
      type: String,
      required: false,
    },
  });

const wagerModel = mongoose.model("Wager", WagerSchema);

module.exports = wagerModel;
