# Flask Core Server Module
from flask import Flask, render_template, request, redirect, url_for
from threading import Timer
from flask_cors import CORS

# Model Import
import ML_Model.ML_Model_v1 as ml_model_v1

# TMDB API Import
import movie_db_api.tmdb_api_func as tmdb_api

app = Flask(__name__)
CORS(app)

@app.route('/movie_details')
def index():
   a = tmdb_api.get_movie_details()
   return a

#@app.route('/result',methods = ['POST', 'GET'])
#def result():
#   if request.method == 'POST':
#      result = request.form
#      return render_template("result.html", result = result)


if __name__ == '__main__':
   app.run(debug = True, port=4000)