var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
// var port = process.env.PORT || 3000;
var port = 8080;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('pressure', function(msg){
    io.emit('pressure', msg);
  });
  socket.on('humidity', function(msg){
    io.emit('humidity', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
