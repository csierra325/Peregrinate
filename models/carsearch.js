const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carsearchSchema = new Schema({
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  pickUp: { type: Date, required: true },
  dropOff: { type: Date, required: true },
});

const carSearch = mongoose.model("Carsearch", carSearchSchema);

module.exports = carsearch;