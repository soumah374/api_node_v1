'use strict';

var mongoose = require('mongoose'),
  Geolocalisation = mongoose.model('Geolocalisation');

exports.get_index = function(req, res) {
    Geolocalisation.find({}, function(err, geolocalisation) {
    if (err)
      res.send(err);
    res.json(geolocalisation);
  });
};


exports.post_create = function(req, res) {
  console.log(res.body)
  var geolocalisation = new Geolocalisation(req.body);
  geolocalisation.save(function(err, geolocalisation) {
    if (err)
      res.send(err);
    res.json(geolocalisation);
  });
};
