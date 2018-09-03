const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const friendRequestsSchema = new Schema({
  requester: {
      type: String, 
      required: true, 
      unique: true
  },
  recipient: {
    type: String, 
    required: true, 
    unique: true
  },
  status: {
    type: Number,
    enums: [
      0, //'pending'
      1, //'friends'
    ],
    default: 0
  } 
});

const friendRequests = mongoose.model("FriendRequests", friendRequestsSchema);

module.exports = friendRequests;