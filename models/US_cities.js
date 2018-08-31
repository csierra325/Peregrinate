const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const US_citiesSchema = new Schema({
  city: String,
  state_id: String,
  state_name: String,
  lat: Number,
  lng: Number,
  timezone: String,
});

const cities = mongoose.model("US_cities", US_citiesSchema);

module.exports = cities;
