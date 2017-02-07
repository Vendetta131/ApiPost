var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/blog',function(err,db) {
  if(err) throw err;
});

module.exports = mongoose;
