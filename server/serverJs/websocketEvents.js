var socketIo = require('socket.io');

module.exports = function(server){
  var io = socketIo(server);
  io.on('connection',function(socket){
	  console.log("client connected");
	  socket.on('message', function(msg){
	    console.log('message: ' + msg);
	  });
  });

  io.on('messages',function(message){
	  console.log("Recieved! "+message);
  });
};
