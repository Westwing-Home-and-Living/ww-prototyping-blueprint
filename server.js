/**
 * Server file based on facebooks tutorial
 **/

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/www/data/comments.json', function(req, res) {
    fs.readFile('build/www/data/comments.json', function(err, data) {
        console.log('comments.json changed.')
        var comments = JSON.parse(data);
        comments.push(req.body);
        fs.writeFile('build/www/data/comments.json', JSON.stringify(comments, null, 4), function(err) {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(comments));
        });
    });
});

module.exports = app;
