const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;