const db = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Defining methods for the usersController
module.exports = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User
    
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    // var password = req.body.password;
    // console.log(`Not hashed password: ${password}`)
    // bcrypt.hash(password, saltRounds, function (err, hash) {
    //   // Store hash in your password DB.
    //   req.body.password = hash;
    //   console.log(`Hashed password: ${req.body.password}`);
    //   db.User
    //     .create(req.body)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // });

    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  find: function (req, res) {
    console.log("Getting One User")
    db.User
      .findOne({ username: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    // console.log(`Req.body: ${req.body} \nReq.params ${req.params}`)
  },
  remove: function (req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  

};
