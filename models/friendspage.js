const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const friendspageSchema = new Schema({
  requester: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  recipient: {
    type: Schema.Types.ObjectId,
    ref: 'User'
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

const friendspage = mongoose.model("friendspage", friendspageSchema);

module.exports = friendspage;