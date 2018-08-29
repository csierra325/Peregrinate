const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightSearchSchema = new Schema({
  origin: { type: String, required: true },
  destination: { type: String, required: false },
  departureDate: { type: Date, required: false },
  duration: { type: Date, required: true },
  maxPrice: { type: Number, required: false }
});

const flightSearch = mongoose.model("Flight Search", flightSearchSchema);

module.exports = flightSearch;