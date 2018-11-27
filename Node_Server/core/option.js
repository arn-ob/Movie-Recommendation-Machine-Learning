/**
 * This is the Key
 */
var key = "52e1a7b21533b5e1f51c02c04d14b6b4";

/**
 * this will search movie for index view. 
 * The page Number are change based on request. U can also change the qs property
 */
exports.for_search = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular',
    qs: {
        "page": "1",
        "language": "en-US",
        "api_key": key
    },
    body: '{}'
};


/**
 * This option will search and get details by movie id
 * Here add manualy by adding the id to url
 */
exports.for_get_movie_details = {
    method: 'GET',
    url:  '',
    qs: {
        language: 'en-US',
        api_key: key
    },
    body: '{}'
};

/**
 * This option will search by movie title
 */
exports.get_details_by_title = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    qs: {
        include_adult: 'false',
        page: '1',
        query: '',
        language: 'en-US',
        api_key: key
    },
    body: '{}'
};