es6-mail-nodejs
===================

ECMASCRIPT 2015 with a nodejs backend

A simple demo written in angular js and nodejs.

Demonstrates:
* basic angular js with
  * directives
  * routing
  * forms
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
* install js dependencies with npm install and bower install
* start the server with node nodeServer.js
* view the app at localhost:5000
