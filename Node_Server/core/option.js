var key =  "52e1a7b21533b5e1f51c02c04d14b6b4";

exports.for_search = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    qs: {
        "year": "2011",
        "include_adult": "false",
        "page": "1",
        "query": "Movie",
        "language": "en-US",
        "api_key": key
    },
    body: '{}'
};


exports.for_get_movie_details = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/',
    qs: {
        language: 'en-US',
        api_key: key
    },
    body: '{}'
};

