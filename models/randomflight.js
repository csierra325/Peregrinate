const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const randomflightSchema = new Schema({
  bucketItem: { type: String, required: true },
});

const randomflight = mongoose.model("Friend List", bucketlistSchema);

module.exports = randomflight;