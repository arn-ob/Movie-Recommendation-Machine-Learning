var request = require("request");
var option = require("./option");
var selected_option = option.for_search;

exports.tmdbReq = function (req, res) {
    var input = req.body;
    if (input.page === undefined) {
        selected_option.qs.page = "1";
    } else {
        selected_option.qs.page = input.page;
    }
    request(selected_option, function (error, response, body) {
        if (error) throw new Error(error);

        res.send(body); // Send Details
    });
};