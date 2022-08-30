const path = require('path');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.sendFile(path.json(__dirname, '../../client/index.html'));
  });
};