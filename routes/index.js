var express = require('express');
var router = express.Router();



//////// MODELS
var Place = require('../models/place');
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');


module.exports = router;

router.get('/', function(req, res, next) {
	var hotelPrms = Hotel.findAll();
	var restaurantPrms = Restaurant.findAll();
	var activityPrms = Activity.findAll();

	Promise.all([hotelPrms, restaurantPrms, activityPrms])
	.then(function(allfields) {
		console.log("in promise");
		res.render('index', {
			hotels: allfields[0],
			restaurants: allfields[1],
			activities: allfields[2]
		})
	})
	.catch(next);

})

