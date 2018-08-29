const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: { type: String, required: true , unique: true},
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },


  bucketlist: [
    {
      type: Schema.Types.ObjectId,
      ref: 'bucketlist'
    }
  ]


});



const User = mongoose.model("User", usersSchema);

module.exports = User;