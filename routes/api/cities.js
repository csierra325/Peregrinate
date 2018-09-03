const router = require("express").Router();
const cities = require("../../controllers/citiesController");

router
  .route('/')
  .get(cities.findAll)
  

module.exports = router;