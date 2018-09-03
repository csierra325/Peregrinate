const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const currentFriendsSchema = new Schema({
      $ref: 'user',
      // $id: ObjectId(),
      type: Schema.Types.ObjectId,

});

const currentFriends = mongoose.model("FriendRequests", currentFriendsSchema);

module.exports = currentFriends;