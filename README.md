es6-mail-nodejs
===================

ECMASCRIPT 2015 with a nodejs backend

A simple demo written in pure javascript (es6) and nodejs.

Demonstrates:
* homemade "framework" with no 3rd party dependencies (outside of polyfills) including the use of
  * modules 
  * routing
  * http ajax
  * promises
  * templating
  
* html5 and css3 used for styling and layout

* supports any screensize

* nodejs backend backed by mongodb
* supports basic rest api
  * GET /rest/messages - returns list of messages from the db
  * POST /rest/messages - adds a new message to the list
  * GET /rest/messages/:ObjectId - gets one message by id

Installation
------------
* install io/node js
* install mongodb
* populate database with sh ./importDb.sh
* install jspm with npm install -g jspm
* install js dependencies with jspm install
* start the server from the "server" directory with "node nodeServer.js"
* view the app at localhost:5000
