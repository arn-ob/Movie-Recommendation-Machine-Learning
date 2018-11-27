// Core library 
var express = require('express');
var http = require('http');
var path = require('path');
var cors = require('cors');
var tmdbTest = require('./core/tmdb');
var tmdb_Details = require('./core/tmdb-get-details');

// App init
var app = express();

app.use(cors()); // For enable all cros support.. Without it,it will not work good

// all environments
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded());
//app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist'))); // For deploy the project


// Route System
app.post('/get_latest_movie', tmdbTest.tmdbReq);
app.post('/get_details', tmdb_Details.tmdb_get_details_id);
app.post('/get_details_title', tmdb_Details.tmdb_get_details_title);



app.use(function (req, res) {
    console.log('Page not Found 404');
    res.send({"status": 404});
});

// run server
//app.use(app.router);
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});