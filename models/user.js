const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: { type: String, required: true , unique: true},
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  uploadedFileCloudinaryUrl: { type: String, required: flase },
  firstname: { type: String, required: false },
  lastname: { type: String, required: false },
  email: { type: String, required: false, unique: true },
  airline: { type: String, required: false },
  flyerNumber: { type: Number, required: false },
  car: { type: String, required: false },
  rentalNumber: { type: Number, required: false },
  local: { type: String, required: false },

  
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
});

const User = mongoose.model("User", usersSchema);
module.exports = User;