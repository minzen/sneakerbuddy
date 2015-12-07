var mongoose = require('mongoose');

//module.exports = mongoose.model('Shoepair', {
//	name: String//,
//	description: String,
//	acquisitionDate: Date,
	// This could be made more sophisticated (to include the dates of the workouts, links to the workout etc.)
//	kilometresRun: Number
//});

module.exports = mongoose.model('Shoepair', {
       name : {type : String, default: ''}
});
