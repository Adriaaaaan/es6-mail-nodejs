from flask import Flask
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


@app.route('/rest/messages')
def getMessages():
    rows = int(request.args.get('resultsNumber', 100))
    start = int(request.args.get('startNumber', 0))
    results = db.messages.find().skip(start).limit(rows)
    json_results = []
    for result in results:
      json_results.append(result)
    return toJson(json_results)

@app.route('/rest/messages/<id>')
def getMessage(id):
    result = db.messages.find_one({'_id': ObjectId(id)})
    return toJson(result)

if __name__ == '__main__':
  app.debug = True
  app.run( 
  )

