const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);


let messages = []; //this is just a store of the messages sent since the server started - it's not used for anything yet.

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/index.html');
});
app.get('/client.js', function(req, res){
  res.sendFile(__dirname + '/client/client.js');
});


/*
	PART 1:
	Other routes we need:

	[GET] /messages - will render a JSON blob containing all of the messages created
	[GET] /online - will display a JSON blob showing the current number of online users
	[POST] /message - will take a JSON blob with some text, and add a new message to the chat with this text

*/


io.on('connection', function(socket){
  io.emit('chat message', "A User entered the chat")
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){
  	messages.push(msg);
    io.emit('chat message', msg);
  });
});



http.listen(3000, function(){
  console.log('listening on port 3000 - go to http://localhost:3000/ to see me running');
});


/*
	PART 2:
	Adding more functionality:

	New Features :
	- Users should have a Username, which should be displayed next to messages.
	- Messages should show a timestamp
	- Show '{username} is typing' message when a user is typing a message
	- Display a list of online users


*/