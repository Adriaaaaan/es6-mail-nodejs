from flask import Flask
from flask import request
from pymongo import MongoClient
import datetime
app = Flask(__name__, static_url_path='')

client = MongoClient()

db = client.angularmail

@app.route('/')
def hello():
  return "Hello! :)"

if __name__ == '__main__':
  app.run( 
  )

