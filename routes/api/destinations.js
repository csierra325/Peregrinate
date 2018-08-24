const router = require("express").Router();
const amadeusController = require("../amadeus");

// Matches with "/destinations"  *** NEED TO PULL IN AMADEUS.JS ***
router.route("/destinations")
  .get((req, res) => {
    
  });

// Matches with "/api/books/:id"
router


module.exports = router;
