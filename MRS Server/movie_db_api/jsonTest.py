# -*- coding: utf-8 -*-
"""
Created on Sun Nov 25 01:05:39 2018

@author: Arnob
"""

import movie_db_api.tmdb_api_func as tmdb_api
import json

content = "[{'28': '{\"adult\": false, \"backdrop_path\": \"/k91Dag8AZbhjIJqrtf7F1bQnGPg.jpg\", \"belongs_to_collection\": null, \"budget\": 31500000, \"genres\": [{\"id\": 18, \"name\": \"Drama\"}, {\"id\": 10752, \"name\": \"War\"}], \"homepage\": \"http://www.apocalypsenow.com\", \"id\": 28, \"imdb_id\": \"tt0078788\", \"original_language\": \"en\", \"original_title\": \"Apocalypse Now\", \"overview\": \"At the height of the Vietnam war, Captain Benjamin Willard is sent on a dangerous mission that, officially, \\\\\"does not exist, nor will it ever exist.\\\\\" His goal is to locate - and eliminate - a mysterious Green Beret Colonel named Walter Kurtz, who has been leading his personal army on illegal guerrilla missions into enemy territory.\", \"popularity\": 15.425, \"poster_path\": \"/jcvJ2xcVWU9Wh0hZAxcs103s8nN.jpg\", \"production_companies\": [{\"id\": 60, \"logo_path\": \"/2eqFolQI0NLL7ExZts5MnLLaPwX.png\", \"name\": \"United Artists\", \"origin_country\": \"\"}, {\"id\": 26663, \"logo_path\": null, \"name\": \"Zoetrope Studios\", \"origin_country\": \"\"}], \"production_countries\": [{\"iso_3166_1\": \"US\", \"name\": \"United States of America\"}], \"release_date\": \"1979-08-15\", \"revenue\": 89460381, \"runtime\": 147, \"spoken_languages\": [{\"iso_639_1\": \"km\", \"name\": \"\"}, {\"iso_639_1\": \"en\", \"name\": \"English\"}, {\"iso_639_1\": \"fr\", \"name\": \"Fran\\\\u00e7ais\"}, {\"iso_639_1\": \"vi\", \"name\": \"Ti\\\\u1ebfng Vi\\\\u1ec7t\"}], \"status\": \"Released\", \"tagline\": \"This is the end...\", \"title\": \"Apocalypse Now\", \"video\": false, \"vote_average\": 8.2, \"vote_count\": 3349}'}, {'30': '{\"adult\": false, \"backdrop_path\": \"/8A11sHkxWPHtXM1H3jzuWZpAvg5.jpg\", \"belongs_to_collection\": null, \"budget\": 0, \"genres\": [{\"id\": 16, \"name\": \"Animation\"}, {\"id\": 878, \"name\": \"Science Fiction\"}], \"homepage\": null, \"id\": 30, \"imdb_id\": \"tt1530535\", \"original_language\": \"ja\", \"original_title\": \"\\\\u5f7c\\\\u5973\\\\u306e\\\\u60f3\\\\u3044\\\\u3067\", \"overview\": \"Koji Morimato\\\\u2019s animated science fiction short story about how the border between reality and illusion on a space station becomes blurry.\", \"popularity\": 2.25, \"poster_path\": \"/1A59xquD5rZeQRgjMfI4qu1ZvcQ.jpg\", \"production_companies\": [{\"id\": 11671, \"logo_path\": \"/iRdYQdn1eunwV3qAs6RK5Mqwn8Z.png\", \"name\": \"Studio 4\\\\u00b0C\", \"origin_country\": \"JP\"}], \"production_countries\": [{\"iso_3166_1\": \"JP\", \"name\": \"Japan\"}], \"release_date\": \"1995-12-23\", \"revenue\": 0, \"runtime\": 44, \"spoken_languages\": [{\"iso_639_1\": \"ja\", \"name\": \"\\\\u65e5\\\\u672c\\\\u8a9e\"}], \"status\": \"Released\", \"tagline\": \"\", \"title\": \"Magnetic Rose\", \"video\": false, \"vote_average\": 5.3, \"vote_count\": 35}'}]"
content.replace('\\','')
b = json.dumps(content)
a = json.loads(content)
int(a[0]["id"])

#for s in content.pop():
#    print(s)

content["id"]

a = tmdb_api.get_movie_details(int(content["id"]))