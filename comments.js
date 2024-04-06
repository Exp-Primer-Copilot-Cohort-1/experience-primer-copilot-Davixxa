// Create web server
var express = require('express');
var app = express();

// Create request and response
app.get('/comments', function(req, res) {
  // Set response header
  res.setHeader('Content-Type', 'text/plain');
  // Send response to client
  res.end('Comments');
});

// Start server
var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server running at http://%s:%s', host, port);
});