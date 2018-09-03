const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const currentFriendsSchema = new Schema({
      friend: { type: String }
});

const currentFriends = mongoose.model("FriendRequests", currentFriendsSchema);

module.exports = currentFriends;