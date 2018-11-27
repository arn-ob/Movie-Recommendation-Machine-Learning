var request = require("request");
var option = require('./option');

// Selected Option 
var selected_option = option.for_get_movie_details;

exports.tmdb_get_details = function (req, res) {
    var input = req.body;
    selected_option.url = selected_option.url + input.movie_id;
    console.log("Request URL: " + selected_option.url);
    request(selected_option, function (error, response, body) {
        if (error) throw new Error(error);

        res.send(body); // Send Details

    });

};