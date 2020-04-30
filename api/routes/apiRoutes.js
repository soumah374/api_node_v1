'use strict';

module.exports = function(app) {
	var geolocalisation = require('../controllers/geolocalisationController');
	var user = require('../controllers/userController')
	var auth = require('../controllers/authController');
	var verifyToken = require('../../api/verifyToken.js')

	// todoList Routes
	app.route('/cartographies')
		.get(verifyToken, geolocalisation.get_index)
		.post(verifyToken, geolocalisation.post_create);

	app.route('/users')
		.get(user.get_index)
	app.route('/users/register').post(user.register)

	app.route('/api/auth/me')
		.get(verifyToken, auth.me);

	app.route('/logout').get(auth.logout)
};
