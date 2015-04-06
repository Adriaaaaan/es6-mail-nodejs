var mongo = require('mongoskin');

var url = 'mongodb://localhost:27017/angularMail';

// Use connect method to connect to the Server
var db = mongo.db(url, {native_parser:true});
var toObjectID = mongo.helper.toObjectID;
db.bind('messages');

module.exports = function(app){

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
  		  return res.sendStatus(200);
  		} else {
  		  return console.log(err);
  		}
  	});
  });
  
  app.post('/rest/messages',function(req,res){
    return db.messages.insert(req.body,function(err,result){
      if(err) throw err;
      if(result===null || result.length===0)
        return res.status(400);
      return res.status(201).send(result[0]);
    });
  });
};