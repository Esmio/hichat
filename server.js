var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var users = [];
app.use('/', express.static( __dirname + '/wwww'));
server.listen(3001);

//socket

io.on('connection', function(socket) {
	socket.on('login', function(nickname) {
		if(users.indexOf(nickname) > -1) {
			socket.emit('nickExisted');
		} else {
			socket.userIndex = users.length;
			socket.nickname = nickname;
			users.push(nickname);
			socket.emit('loginSuccess');
			io.socket.emit('system', nickname);
		}
	})
	socket.on('login', function(nickname) {
     if (users.indexOf(nickname) > -1) {
         socket.emit('nickExisted');
     } else {
         socket.userIndex = users.length;
         socket.nickname = nickname;
         users.push(nickname);
         socket.emit('loginSuccess');
         io.sockets.emit('system', nickname, users.length, 'login');
     };
 });
})