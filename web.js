var express = require('express');
var url = require('url');
var app = express();

var linkedin = {};
linkedin.apikey = process.env.LINKEDIN_API;

app.use(express.static(__dirname+'/public'));

app.get('/', function(req, res) {
    res.render('index.ejs', {
	layout:false,
	linkedin: linkedin,
	host: req.header('host'),
	url: req.url
    });
});

app.get('/test', function(req, res) {
    res.render('index.ejs', {
	layout:false,
	linkedin: linkedin
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});