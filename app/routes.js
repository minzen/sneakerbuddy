var Shoepair = require('./models/shoepair');

function getShoepairs(res){
	Shoepair.find(function(err, shoepairs) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			// Debug output to the log of each shoe pair
			console.log(shoepairs);
			res.json(shoepairs); // return all shoepairs in JSON format
		});
};

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all shoepairs
	app.get('/api/shoepairs', function(req, res) {

		// use mongoose to get all shoepairs in the database
		getShoepairs(res);
	});

	// create shoepair and send back all shoepairs after creation
	app.post('/api/shoepairs', function(req, res) {

		// create a shoepair, information comes from AJAX request from Angular
		Shoepair.create({
			name: req.body.name,
			description: req.body.description,
			acquisitionDate: req.body.acquisitionDate,
			// This could be made more sophisticated (to include the dates of the workouts, links to the workout etc.)
		  kilometresRun: req.body.kilometresRun,
			done: false
		}, function(err, shoepair) {
			if (err)
				res.send(err);

			// get and return all the shoepairs after you create another
			getShoepairs(res);
		});
	});

	// delete a shoepair
	app.delete('/api/shoepairs/:shoepair_id', function(req, res) {



		Shoepair.remove({
			_id : req.params.shoepair_id
		}, function(err, shoepair) {
			if (err)
				res.send(err);

			getShoepairs(res);
		});
	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};
