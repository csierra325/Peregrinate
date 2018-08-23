const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const friendlistSchema = new Schema({
  friendItem: { type: String, required: true },
});

const friendlist = mongoose.model("Friend List", friendlistSchema);

module.exports = friendlist;
