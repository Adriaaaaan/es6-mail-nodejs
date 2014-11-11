var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var mongo = require('mongoskin');

var url = 'mongodb://localhost:27017/angularMail';

// Use connect method to connect to the Server
var db = mongo.db(url, {native_parser:true});
var toObjectID = mongo.helper.toObjectID;
db.bind('messages');

app.use(express.static(__dirname + '/static'));

app.get('/rest/messages',function(req,res){
    db.messages.find().toArray(function (err, items) {
        res.json(items);
    });
});

app.get('/rest/messages/:id',function(req,res){
    return db.messages.findById(toObjectID(req.params.id), function (err, product) {
		if (!err) {
		  return res.send(product);
		} else {
		  return console.log(err);
		}
	});
});

app.delete('/rest/messages/:id',function(req,res){
    return db.messages.remove({_id:toObjectID(req.params.id)}, function (err, product) {
		if (!err) {
		  return res.send(product);
		} else {
		  return console.log(err);
		}
	});
});

io.on('connection',function(socket){
	console.log("client connected");
	socket.on('message', function(msg){
	  console.log('message: ' + msg);
	});
});

io.on('messages',function(message){
	console.log("Recieved! "+message);
});


server.listen(5000, function() {
                console.log('HTTP listening 5000');
            });
			
