const noteRoutes = require('./noteRoutes');
module.exports = function(app, Post) {
  noteRoutes(app, Post);
}