var request = require("request");

var a = 0;
var options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/' + a,
    qs: {
        language: 'en-US',
        api_key: '52e1a7b21533b5e1f51c02c04d14b6b4'
    },
    body: '{}'
};

exports.CustomOPTQueryy = function (q) {
    options.qs = q;
};

function ins() {
    console.log("Here");
    a = 28;
}

exports.tmdb_get_details = function (req, res) {
    var input = req.body;
    console.log(input);
        options.url = 'https://api.themoviedb.org/3/movie/' + input[0]['id'];
        console.log(options.url);
        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            res.send(body);

        });

};