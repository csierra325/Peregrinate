const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotelSearchSchema = new Schema({
  origin: { type: String, required: true },
  destination: { type: String, required: false },
  departureDate: { type: Date, required: false },
  duration: { type: Date, required: false }
});

const hotelSearch = mongoose.model("Hotel Search", hotelSearchSchema);

module.exports = hotelSearch;