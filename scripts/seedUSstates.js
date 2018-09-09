const mongoose = require("mongoose");
const db = require("../models");
const seedStates = require("./usstates.json");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/peregrinate");

db.US_cities.create(seedStates)
    .then(res => {
        console.log("Cities successfully seeded!");
        mongoose.connection.close();
    })
    .catch(err => {
        console.log(err);
        mongoose.connection.close();
    });