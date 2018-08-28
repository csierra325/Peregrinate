const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightsearchSchema = new Schema({
  origin: { type: String, required: true },
  destination: { type: String, required: false },
  departureDate: { type: Date, required: false },
  duration: { type: Date, required: true },
  maxPrice: { type: Number, required: false }
});

const flightsearch = mongoose.model("Flight Search", flightsearchSchema);

module.exports = flightsearch;