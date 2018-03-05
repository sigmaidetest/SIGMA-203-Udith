let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {

	console.log("test");
	callback(null,'Successfully executed');
}