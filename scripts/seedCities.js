const mongoose = require("mongoose");
const db = require("../models");
const citiesCSV = require("./cities.json");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/peregrinateUsers");

db.US_cities.create(citiesCSV)
    .then(res => console.log("Cities successfully seeded!"))
    .catch(console.log);