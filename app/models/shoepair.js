var mongoose = require('mongoose');

module.exports = mongoose.model('Shoepair', {
       name : {type : String, default: ''},
       description : {type : String, default: ''},
       acquisitionDate :  {type : Date},
       // This could be made more sophisticated (to include the dates of the workouts, links to the workout etc.)
     	 kilometresRun : {type: Number, default: 0 },
});
