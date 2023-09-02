// Create web server
var express = require('express');
var router = express.Router();

// Create middleware
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

// Create Redis client
var redis = require('redis');
var client = redis.createClient();

// Create routes
router.route('/')
    .post(parseUrlencoded, function (request, response) {
        var comment = request.body;
        var id = request.params.id;

        client.lpush('comments', JSON.stringify(comment), function (error, reply) {
            response.status(201).json(comment);
        });
    })
    .get(function (request, response) {
        client.lrange('comments', 0, -1, function (error, comments) {
            response.json(comments.map(JSON.parse));
        });
    });

module.exports = router;