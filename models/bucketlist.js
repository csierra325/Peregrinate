const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bucketlistSchema = new Schema({
  bucketItem: { type: String, required: true },
});

const bucketlist = mongoose.model("Friend List", bucketlistSchema);

module.exports = bucketlist;
