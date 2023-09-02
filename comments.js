// create web server


// to run: node comments.js

// load the express module
var express = require('express');

// create an express app
var app = express();

// use the express-static middleware
app.use(express.static(__dirname + '/public'));

// define the first route
app.get('/comments', function(req, res) {
  res.send('Hello World!');
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));