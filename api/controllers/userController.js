'use strict';

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../../config.js');

var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.get_index = function(req, res) {
    User.find({}, function(err, users) {
    if (err)
        res.send(err);
    res.json(users);
    });
};

exports.register = function(req, res) {
  console.log(req.body);
  var hashedPassword = bcrypt.hashSync('12345678', 8);
  User.create({
    name : req.body.name,
    email : req.body.email,
    password : hashedPassword
  },
  function (err, user) {
    if (err) return res.status(500).send("There was a problem registering the user.")
    // create a token
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
  }); 
};