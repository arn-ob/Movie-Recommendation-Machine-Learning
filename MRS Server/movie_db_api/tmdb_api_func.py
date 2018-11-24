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


  
def get_movie_details(movie_id):
    # full details get    
    movie = tmdb.Movies(movie_id)
    response = movie.info()
    b = response
    res = json.dumps(b)
    return res




def get_youtube_video(movie_id):
    # full details get    
    movie = tmdb.Movies(movie_id)
    #response = movie.info()
    response = movie.videos()
    b = response
    res = json.dumps(b)
    return res


def get_genres(gen_id):
      movie = tmdb.Genres()
      responses = movie.movie_list()
      for s in movie.genres:
          if s["id"] == gen_id:
              return s["name"]
  
    
    
# For Testing
#get_info()
#get_movie_details()
#get_youtube_video()
    

































