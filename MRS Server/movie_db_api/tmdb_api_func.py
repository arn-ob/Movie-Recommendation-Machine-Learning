# -*- coding: utf-8 -*-
"""
Created on Fri Nov 23 14:13:39 2018

@author: Arnob
"""


import tmdbsimple as tmdb
import json
tmdb.API_KEY = '52e1a7b21533b5e1f51c02c04d14b6b4'


#get_info('Frozen')

#Poster Link
# https://image.tmdb.org/t/p/original/dIaff79mnD2rf1LGkUfWYyZUSZj.jpg
    

def get_info():
    search = tmdb.Search()
    response = search.movie(query='The Bourne Supremacy')
    b = response
    res = json.dumps(b)
    return res


  
def get_movie_details():
    # full details get    
    movie = tmdb.Movies(603)
    response = movie.info()
    b = response
    res = json.dumps(b)
    return res




def get_youtube_video():
    # full details get    
    movie = tmdb.Movies(603)
    #response = movie.info()
    response = movie.videos()
    b = response
    res = json.dumps(b)
    return res

# For Testing
#get_info()
#get_movie_details()
#get_youtube_video()
    
  movie = tmdb.Genres()
    #response = movie.info()
response = movie.movie_list()
for s in response.genres:
    print(s["name"])
    #response["genres"][0]["name"]
    
    
    
res = json.dumps(response)
res
res["genres"]
































