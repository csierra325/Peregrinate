const router = require("express").Router();
const traveledList = require("../../controllers/traveledList");

router.get('/wishlist/traveledList/:id', function(req, res){
  db.traveledList.findAll({})
  .then(function(dbtraveledList){
    res.json(dbtraveledList);
  })
  .catch(function(err){
    res.json(err);
  })

})

router.post('/wishlist/traveledlist/:id', function(req, res){
  db.traveledList.create(req.body)
  .then(function(dbtraveledList){
    res.json(dbtraveledList)

  })
  .catch(function(err){
    res.json(err);
  })
})



// Matches with "/api/books"
router.route("/wishlist")
  .post(travelList.create);

// Matches with "/api/wishlist/:id"
router
  .route("/:id")
  .get(travelList.findById)
  .put(travelList.update)
  .delete(travelList.remove);

module.exports = router;