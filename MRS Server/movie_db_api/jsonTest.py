# -*- coding: utf-8 -*-
"""
Created on Sun Nov 25 01:05:39 2018

@author: Arnob
"""

import movie_db_api.tmdb_api_func as tmdb_api
import json

content = { "28": "{\"adult\": false, \"backdrop_path\": \"/k91Dag8AZbhjIJqrtf7F1bQnGPg.jpg\", \"belongs_to_collection\": null, \"budget\": 31500000, \"genres\": [{\"id\": 18, \"name\": \"Drama\"}, {\"id\": 10752, \"name\": \"War\"}], \"homepage\": \"http://www.apocalypsenow.com\", \"id\": 28, \"imdb_id\": \"tt0078788\", \"original_language\": \"en\", \"original_title\": \"Apocalypse Now\", \"overview\": \"At the height of the Vietnam war, Captain Benjamin Willard is sent on a dangerous mission that, officially, \\\"does not exist, nor will it ever exist.\\\" His goal is to locate - and eliminate - a mysterious Green Beret Colonel named Walter Kurtz, who has been leading his personal army on illegal guerrilla missions into enemy territory.\", \"popularity\": 15.425, \"poster_path\": \"/jcvJ2xcVWU9Wh0hZAxcs103s8nN.jpg\", \"production_companies\": [{\"id\": 60, \"logo_path\": \"/2eqFolQI0NLL7ExZts5MnLLaPwX.png\", \"name\": \"United Artists\", \"origin_country\": \"\"}, {\"id\": 26663, \"logo_path\": null, \"name\": \"Zoetrope Studios\", \"origin_country\": \"\"}], \"production_countries\": [{\"iso_3166_1\": \"US\", \"name\": \"United States of America\"}], \"release_date\": \"1979-08-15\", \"revenue\": 89460381, \"runtime\": 147, \"spoken_languages\": [{\"iso_639_1\": \"km\", \"name\": \"\"}, {\"iso_639_1\": \"en\", \"name\": \"English\"}, {\"iso_639_1\": \"fr\", \"name\": \"Fran\\u00e7ais\"}, {\"iso_639_1\": \"vi\", \"name\": \"Ti\\u1ebfng Vi\\u1ec7t\"}], \"status\": \"Released\", \"tagline\": \"This is the end...\", \"title\": \"Apocalypse Now\", \"video\": false, \"vote_average\": 8.2, \"vote_count\": 3349}"}
content.replace('\\"',"\"")
b = json.dumps(content)
a = json.loads(content)
int(a[0]["id"])

#for s in content.pop():
#    print(s)

content["id"]

a = tmdb_api.get_movie_details(int(content["id"]))