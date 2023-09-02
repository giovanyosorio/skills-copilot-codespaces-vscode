// Create a web server
// Respond to requests with a page containing a form
// Respond to POST requests with the contents of the form sent back as plain text
// Respond to GET requests with '404 Not Found'
// Respond to other requests with '405 Method Not Allowed'
// Listen on a port passed in as an argument to the program

var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true);
  if (parsedUrl.pathname === '/api/parsetime') {
    var date = new Date(parsedUrl.query.iso);
    var json = {
      'hour': date.getHours(),
      'minute': date.getMinutes(),
      'second': date.getSeconds()
    };
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(json));
  }
  else if (parsedUrl.pathname === '/api/unixtime') {
    var date = new Date(parsedUrl.query.iso);
    var json = {
      'unixtime': date.getTime()
    };
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(json));
  }
  else {
    response.writeHead(404);
    response.end();
  }
});
server.listen(port);