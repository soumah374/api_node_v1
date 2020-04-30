
var express = require('express'),
  app = express(),
  port = process.env.PORT || 8000,
  mongoose = require('mongoose'),
  Geolocalosation = require('./api/models/geolocalisationModel'),
  User = require('./api/models/userModel'),
  bodyParser = require('body-parser');

var cors = require('cors');
app.use(cors())


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Cartographiedb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/apiRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
