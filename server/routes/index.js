'use strict';

var controller = require('../controllers');
var apis = require('../api')
var helpers = require('../helpers');

module.exports = function(app, express) {
	/*
		routes needed:
			1. POST Signup /user -> send back token to store in local storage
			2. POST Login: /login/ -> send back token
			3. GET /user/id/homes ->
			4. POST /user/id/homes -> store homes, urls, and notes
			5. POST /api/info w/configs + tokens from local storage -> return
	*/

	//Route for Signup

	app.post('/signup', function (req, res) {
		controller.users.post(req, res);
	});

	app.get('/login', function (req, res) {
		//check for token
		controller.users.get(req, res);
	})

	app.post('/login', function (req, res) {
		//within controller
			//if the user exists within the db
				//check if pw is correct
				//if so, return the correct token to the user, and have them store it locally
		controller.users.post(req, res);
	})

	app.post('/api/info', function (req, res) {
		apis.post(req, res); //delegate within controller.apis
	});

	app.post('/api/users/:user_id/homes', function (req, res) {
		controller.homes.post(req, res);
	});

	app.get('/api/users/:user_id/homes', function (req, res) {
		controller.homes.get(req, res);
	});
};
