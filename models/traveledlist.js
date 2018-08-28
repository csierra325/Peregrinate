const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const travellistSchema = new Schema({
  travelItem: { type: String, required: true },
});

const travellist = mongoose.model("Traveled List", travellistSchema);

module.exports = travellist;
