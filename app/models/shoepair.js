var mongoose = require('mongoose');

module.exports = mongoose.model('Shoepair', {
	name: {
    type: String,
    required: true
  },
	description: {
    type: String,
    required: false
  },
	acquisitionDate: {
    type: Date,
    required: false
  },
	//This could be made more sophisticated (to include the dates of the workouts, links to the workout etc.)
	kilometresRun: {
    type: Number,
    required: true,
    default: 0
  }
});
