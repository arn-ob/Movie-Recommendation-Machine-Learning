var request = require("request");
var option = require("./option");


var options_for_search = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    qs: {
        "year": "2018",
        "include_adult": "false",
        "page": "1",
        "query": "Movie",
        "language": "en-US",
        "api_key": "52e1a7b21533b5e1f51c02c04d14b6b4"
    },
    body: '{}'
};

exports.CustomOPTQueryy = function (q) {
    options.qs = q;
};

exports.tmdbReq = function (req, res) {
    request(option.for_search, function (error, response, body) {
        if (error) throw new Error(error);
        res.send(body);
    });
};