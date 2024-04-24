
# A very simple Flask Hello World app for you to get started with...
import pickle

from sklearn.feature_extraction.text import TfidfVectorizer

from flask import Flask
from flask import request
from flask_cors import CORS
from flask import jsonify

import numpy as np

app = Flask(__name__)
CORS(app, resource={
    r"/*":{
        "origins":"*"
    }
})

@app.route('/', methods=['GET'])
def hello_world():
    return jsonify('Hello from Flask!')


@app.route('/prediction', methods=['POST'])
def news_prediction():


    reqe_data = request.get_json()
    author = reqe_data.get("Author")
    title = reqe_data.get("Title")
    description = reqe_data.get("Description")


    # author = request.form["Author"]
    # title = request.form["Title"]
    # description = request.form["Description"]

    text_input = author + " " + title + " " + description

    vectorizer = TfidfVectorizer()
    vectorizer.fit([text_input])
    X = vectorizer.transform([text_input])

    X1 = np.zeros((1,17128))
    for i in range(min(X.shape[0],17128)):
        X1[0,i] = X[0,i]

    pickled_model = pickle.load(open('model.pkl', 'rb'))
    result = pickled_model.predict(X1)

    return jsonify(str(result[0]))

@app.route('/home')
def news():
    return "this is my route"