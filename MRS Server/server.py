from flask import Flask, render_template, request, redirect, url_for
from threading import Timer
from flask_cors import CORS

import ML_Model.ML_Model_v1 as ml_model

app = Flask(__name__, template_folder='template')
CORS(app)

@app.route('/index')
def index():
   b = t.get_info()
   y = json.dumps(b)
   return y

#@app.route('/result',methods = ['POST', 'GET'])
#def result():
#   if request.method == 'POST':
#      result = request.form
#      return render_template("result.html", result = result)


if __name__ == '__main__':
   app.run(debug = True, port=3000)