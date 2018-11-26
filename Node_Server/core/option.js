exports.for_search = {
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