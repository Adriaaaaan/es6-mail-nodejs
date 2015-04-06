var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');

var messagesApi = require('./serverJs/messages');
var websocketEvents = require('./serverJs/websocketEvents');

app.use(express.static('../'));
app.use( bodyParser.json() );      
app.use(bodyParser.urlencoded({    
  extended: true
}));

websocketEvents(server);
messagesApi(app);

server.listen(5000, function() {
  console.log('HTTP listening 5000');
});
