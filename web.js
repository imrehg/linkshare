var express = require('express');
var querystring = require('querystring');
var url = require('url');
var app = express();

var linkedin = {};
linkedin.apikey = process.env.LINKEDIN_API;

app.use(express.static(__dirname+'/public'));

app.get('/', function(req, res) {
    var url_parts = url.parse(req.url, true)
    var query_pars = url_parts.query;
    var query_str = querystring.stringify(query_pars);
    console.log(query_str);

    res.render('index.ejs', {
	layout:false,
	linkedin: linkedin,
	host: req.header('host'),
	path: url_parts.pathname,
	query_str: query_str
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