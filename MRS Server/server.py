# Flask Core Server Module
from flask import Flask, render_template, request, redirect, url_for
from threading import Timer
from flask_cors import CORS
import json
import re

# Model Import
import ML_Model.ML_Model_v1 as ml_model_v1

# TMDB API Import
import movie_db_api.tmdb_api_func as tmdb_api

app = Flask(__name__)
CORS(app)

@app.route('/movie_details')
def index():
   # a = tmdb_api.get_movie_details()
   a = 'Index'
   return a


@app.route('/lists')
def lists():
   return ml_model_v1.get_recommendations('Frozen')

@app.route('/return_name_from_id', methods = ['POST'])
def return_name_from_id():
    content = json.dumps(request.json)
    a = json.loads(str(content))
#    a = int(a[1]["id"])
    try:
         return tmdb_api.get_movie_details(int(a[0]["id"]))
    except (Exception):
        return "ignore"


@app.route('/return_name_from_id2', methods = ['POST'])
def return_name_from_id2():
    content = json.dumps(request.json)
    a = json.loads(str(content))
#    a = int(a[1]["id"])
    try:
         return tmdb_api.get_movie_details(int(a[0]["id"]))
    except (Exception):
        return "ignore"

    
#    a = re.findall(r'\d+', conten
#    a = str(a)
#    a =  a.replace("['", "")
    # return a
#     arr = "'" + arr + "'"
#    contents = json.dumps(str(arr))
    
    
    
#@app.route('/result',methods = ['POST', 'GET'])
#def result():
#   if request.method == 'POST':
#      result = request.form
#      return render_template("result.html", result = result)


if __name__ == '__main__':
   app.run(debug = True, port=3100)