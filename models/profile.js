const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  name: {
    first: { type: String, required: false },
    last: { type: String, required: false },
  },
  email: { type: String, required: false },

  address: {
    addressOne: { type: String, required: false },
    addressTwo: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    zip: { type: String, required: false },
    date: { type: Date, default: Date.now },
  },

  travelInfo: {
    airline: { type: String, required: false },
    frequentFlyerNumber: { type: String, required: false },
    rental: { type: String, required: false },
    rentalNumber: { type: String, required: false },
    train: { type: String, required: false },
  },
  
});

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;