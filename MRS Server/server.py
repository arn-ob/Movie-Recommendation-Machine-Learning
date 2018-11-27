# Flask Core Server Module
from flask import Flask, render_template, request, redirect, url_for
from threading import Timer
from flask_cors import CORS
import json

# Model Import
#import ML_Model.ML_Model_v1 as ml_model_v1
import ML_Model.ML_Model_v2 as ml_model_v2

# TMDB API Import
import movie_db_api.tmdb_api_func as tmdb_api

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return "index"

@app.route('/movie_details', methods = ['POST'])
def movie_details():
    content = json.dumps(request.json)
    a = json.loads(str(content))
    return ml_model_v2.improved_recommendations(str(a["movie_name"]))
    
#@app.route('/get_req_title', methods = ['POST'])
#def get_req():
#    content = json.dumps(request.json)
#    a = json.loads(str(content))
#    return ml_model_v1.get_recommendations_by_title(str(a["movie_name"]))
#
#
#@app.route('/get_req_id', methods = ['POST'])
#def get_req_id():
#    content = json.dumps(request.json)
#    a = json.loads(str(content))
#    return ml_model_v1.get_recommendations_by_id(int(a["movie_id"]))    
#    

if __name__ == '__main__':
   app.run(debug = True, port=3100)