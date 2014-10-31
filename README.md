angular-mail
============

A simple demo written in angular js and python.

Demonstrates:
* basic angular js with
  * directives
  * routing
  * forms
* html5 and css3 used for styling and layout
* supports any screensize

*python backend backed by mongodb
*supports basic rest api
  * GET /rest/messages - returns list of messages from the db
  * POST /rest/messages - adds a new message to the list
  * GET /rest/messages/:ObjectId - gets one message by id

Installation
------------
* requires python, pip, virtualenv, mongodb
* pip install -r requirements.txt
* populate database with sh ./importDb.sh
* install js dependencies with bower install
* run with python server.py
