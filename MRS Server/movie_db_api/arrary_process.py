# -*- coding: utf-8 -*-
"""
Created on Fri Nov 23 21:54:08 2018

@author: Arnob
"""


import json

import requests

num = 1

url = "https://api.themoviedb.org/3/search/movie?year=2018&include_adult=false&page="+ str(num) +"&query=Movie&language=en-US&api_key=52e1a7b21533b5e1f51c02c04d14b6b4"

payload = "{}"
response = requests.request("GET", url, data=payload, headers={'Content-Type': 'application/json', 'Accept': 'application/json','Connection': 'close'})

a = response.json()
res = json.dumps(response)



