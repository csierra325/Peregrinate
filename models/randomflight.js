const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const randomFlightSchema = new Schema({
  origin: { type: String, required: true },
  destination: { type: String, required: false },
  departureDate: { type: Date, required: false },
  duration: { type: Date, required: false },
  maxPrice: { type: Number, required: false }
});

const randomFlight = mongoose.model("RandomFlight", randomFlightSchema);

module.exports = randomFlight;