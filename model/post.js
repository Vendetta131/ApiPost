var mongoose = require('../db/');
var Schema = mongoose.Schema;

var schema = new Schema({
	title: {
		type:String,
	},
	description: {
		type:String
	},
	formatdate:{
		type: Date,
		default: Date.now
	}
});

exports.Post = mongoose.model('Post',schema);
