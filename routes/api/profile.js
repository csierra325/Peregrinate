const router = require("express").Router();
const userProfileController = require("../../controllers/userProfileController");

// Matches with "/api/profile"
router.route("/")
    .get(userProfileController.findAll)
    .post(userProfileController.create);

// router.route("/profile")
//     .post(traveledList.create);


// Matches with "/api/profile/:id"
router
    .route("/:id")
    .get(userProfileController.findById)
    .put(userProfileController.update)
    .delete(userProfileController.remove);

module.exports = router;
