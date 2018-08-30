const router = require("express").Router();
// const db = require("../../models");
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);
// .get(usersController.find);

// Matches with "/api/users/:id"
router.route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .get(usersController.findOne)
  .delete(usersController.remove);

module.exports = router;
