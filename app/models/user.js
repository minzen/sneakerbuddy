var mongoose = require('mongoose');

// bcrypt = require(bcrypt),
// SALT_WORK_FACTOR = 10;

module.exports = mongoose.model('User', {
	username: {
    type: String,
    required: true,
    index: { unique: true }
  },
  password: {
    type: String,
    required: true
  }
});
