// Consumer Key	v6GXrGrT04AWCblHYYiKXAznKmyABeKV

// import axios from "axios";
// const BASEURL = "http://api.tixik.com/api/nearby?lang=en&lat=36.106121163930377&lng=28.07762145996093&limit=10&key=";
// const APIKEY = "20180823031440594079204";

// export default {
//   findInspiration: function(query) {
//     return axios.get(BASEURL + query + APIKEY);
//   }
// };

const router = require("express").Router();
const usersController = require("../../controllers/carSearchController");
const usersController = require("../../controllers/flightSearchController");
const usersController = require("../../controllers/hotelSearchController");
const usersController = require("../../controllers/randomFlightController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);
  // .get(usersController.find);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);



module.exports = router;