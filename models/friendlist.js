const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const friendlistSchema = new Schema({
  friendItem: { type: String, required: true },
});

const friendlist = mongoose.model("FriendList", friendlistSchema);

module.exports = friendlist;
