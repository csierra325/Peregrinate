const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const usersSchema = new Schema({
  username: { type: String, required: true , unique: true},
  password: { type: String, required: true },
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  friendItem: [{ type: Schema.Types.ObjectId, ref: "Friends"}, {timestamps: true}],
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
  ]
});
const User = mongoose.model("User", usersSchema);
module.exports = User;


const User = mongoose.model("User", usersSchema);

module.exports = User;