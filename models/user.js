const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: { type: String, required: true , unique: true},
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  bucketlist: [
    {
      type: Schema.Types.ObjectId,
      ref: 'bucketlist'
    }
  ],
  friendlist: [
    {
      type: Schema.Types.ObjectId,
      ref: 'friendlist'
    }
  ],
  traveledlist: [
    {
      type: Schema.Types.ObjectId,
      ref: 'traveledlist'
    }
  ],
  randomFlight: [
    {
      type: Schema.Types.ObjectId,
      ref: 'randomFlight'
    }
  ],
  flightSearch: [
    {
      type: Schema.Types.ObjectId,
      ref: 'flightSearch'
    }
  ],
  carSearch: [
    {
      type: Schema.Types.ObjectId,
      ref: 'carSearch'
    }
  ],
  hotelSearch: [
    {
      type: Schema.Types.ObjectId,
      ref: 'hotelSearch'
    }
  ],
  friendspage: [
    { type: Schema.Types.ObjectId, 
      ref: "friendspage"}, 
    {timestamps: true}
  ],
});

const User = mongoose.model("User", usersSchema);
module.exports = User;