# -*- coding: utf-8 -*-
"""
Created on Sun Nov 25 01:05:39 2018

@author: Arnob
"""

import movie_db_api.tmdb_api_func as tmdb_api

content = {
    "id": "28",
    "id": "29"
}

for s in content.pop():
    print(s)


a = tmdb_api.get_movie_details(int(content["id"]))