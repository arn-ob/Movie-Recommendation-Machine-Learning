var request = require("request");
var option = require('./option');

// Selected Option 
var selected_option_id = option.for_get_movie_details;
var selected_option_title = option.get_details_by_title;

exports.tmdb_get_details_id = function (req, res) {
    
    var input = req.body;
    selected_option_id.url = 'https://api.themoviedb.org/3/movie/' + input.movie_id;

    console.log("Request URL: " + selected_option_id.url);
    request(selected_option_id, function (error, response, body) {
        if (error) throw new Error(error);

        res.send(body); // Send Details

    });

};

exports.tmdb_get_details_title = function (req, res) {
    
    var input = req.body;
    selected_option_title.qs.query = input.movie_title;

    console.log("Request Title: " + selected_option_title.qs.query);
    request(selected_option_title, function (error, response, body) {
        if (error) throw new Error(error);

        res.send(body); // Send Details

    });

};