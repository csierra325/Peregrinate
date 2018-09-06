const db = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Defining methods for the usersController
module.exports = {
  findAll: function (req, res) {
    // console.log(req.query);
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json({ dbModel: dbModel, isAuthenticated: true }))
      .catch(err => res.status(422).json({err: err, isAuthenticated: false}));
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    var password = req.body.password;
    bcrypt.hash(password, saltRounds, function (err, hash) {
      // Store hash in your password DB.
      req.body.password = hash;
      db.User
        .create(req.body)
        .then(dbModel => res.json({ dbModel: dbModel, isAuthenticated: true }))
        // .catch(err => res.status(422).json({ err: err, isAuthenticated: false }));
        .catch(err => res.status(422).json({ message: "choose another username", isAuthenticated: false }));
    });
  },
  update: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUsername: function (req, res) {
    // console.log("Getting One User")
    db.User
      .findOne({ username: req.params.username })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    // console.log(`Req.body: ${req.body} \nReq.params ${req.params}`)
  },
  // find: function (req, res) {
  //   console.log("Getting One User")
  //   db.User
  //     .findOne({ username: req.params.id })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  remove: function (req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  

//   getfriends: function(req, res){
//     const id = "5b86dd405192b86f5bee42c0"
//     db.User
    
//     .findById({id: req.params.id})
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },

// updateCurrentFriend: function(req, res) {
//   db.User
//     .findOneAndUpdate({ _id: req.params.id }, req.body)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },


};
