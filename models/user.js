const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },

  name: {
    first: { type: String, default: null},
    last: { type: String, default: null},
  },
  
  email: { type: String, default: null},

  address: {
    addressOne: { type: String , default: null},
    addressTwo: { type: String, default: null},
    city: { type: String, default: null},
    state: { type: String, default: null},
    zip: { type: String, default: null}
  },

  travelInfo: {
    airline: { type: String, default: null },
    frequentFlyerNumber: { type: String, default: null },
    rental: { type: String, default: null },
    rentalNumber: { type: String, default: null },
    local: { type: String, default: null },
    departureCity: { type: String, default: null }
  },


  bucketlist: [
    // {
    //   type: Schema.Types.ObjectId,
    //   ref: 'bucketlist'
    // }
  ],
  friendlist: [
    // {
    //   type: Schema.Types.ObjectId,
    //   ref: 'friendlist'
    // }
  ],
  traveledlist: [
    // {
    //   type: Schema.Types.ObjectId,
    //   ref: 'traveledlist'
    // }
  ],
  randomFlight: [
    // {
    //   type: Schema.Types.ObjectId,
    //   ref: 'randomFlight'
    // }
  ],
  flightSearch: [
    // {
    //   type: Schema.Types.ObjectId,
    //   ref: 'flightSearch'
    // }
  ],
  carSearch: [
    // {
    //   type: Schema.Types.ObjectId,
    //   ref: 'carSearch'
    // }
  ],
  hotelSearch: [
    // {
    //   type: Schema.Types.ObjectId,
    //   ref: 'hotelSearch'
    // }
  ],
  friendspage: [
    { type: Schema.Types.ObjectId, 
      ref: "friendspage"}, 
    {timestamps: true}
  ],

  profile: [{
    type: Schema.Types.ObjectId,
    ref: "profile"
  }]
});

const User = mongoose.model("User", usersSchema);
module.exports = User;