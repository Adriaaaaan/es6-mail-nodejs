from flask import Flask
from flask import jsonify
from flask import request, url_for,redirect
from pymongo import MongoClient
import json
from bson import json_util
from bson.objectid import ObjectId
import datetime

app = Flask(__name__, static_url_path='')
client = MongoClient()
db = client.angularMail

def toJson(data):
    return json.dumps(data, default=json_util.default)

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/rest/messages', methods=['GET', 'POST'])
def messages():
    if request.method == 'POST':
        return addMessage(request.get_json())
    else:
        return getMessages()
    

@app.route('/rest/messages/<id>', methods=['GET', 'DELETE'])
def message(id):
    if request.method == 'GET':
        return getMessage(id)
    elif request.method == 'DELETE':
        return deleteMessage(id)

def getMessage(id):
    result = db.messages.find_one({'_id': ObjectId(id)})
    return toJson(result)

def deleteMessage(id):
    result = db.messages.remove({'_id': ObjectId(id)})
    return toJson(result)

def addMessage(post):
    id = db.messages.insert(post)
    response = jsonify()
    response.data = toJson(id)
    response.status_code = 201
    response.autocorrect_location_header = False
    return response

def getMessages():
    rows = int(request.args.get('resultsNumber', 100))
    start = int(request.args.get('startNumber', 0))
    results = db.messages.find().skip(start).limit(rows)
    json_results = []
    for result in results:
      json_results.append(result)
    return toJson(json_results)

if __name__ == '__main__':
  app.debug = True
  app.run( 
  )

