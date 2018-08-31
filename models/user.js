const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  name: {
    first: { type: String},
    last: { type: String},
  },
  uploadedFileCloudinaryUrl: {type: String, default: null},
  
  email: { type: String},

  address: {
    addressOne: { type: String},
    addressTwo: { type: String},
    city: { type: String},
    state: { type: String},
    zip: { type: String}
  },

  travelInfo: {
    airline: { type: String, required: false },
    frequentFlyerNumber: { type: String, required: false },
    rental: { type: String, required: false },
    rentalNumber: { type: String, required: false },
    train: { type: String, required: false },
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