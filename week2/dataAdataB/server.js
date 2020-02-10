
let http =require('http');
let express = require ('express');
let app = express ();

let server = http.createServrer(app).listen(8000, function(){

	console.log('Server running on localhost at port 8000');
});

app.use(express.static('public'));

//hook up sockets to the server
let io = require ('socket.io').listen(server);

//Grab the sockets obj and listen for connections
io.sockets.on('connection', function(socket){console.log(socket.id + 'just connected.');

//listen for incoming data

socket.on('dataA', function(data) {
// data = {x:mouseX, Y:mouseY}
console.log("incoming data" + data);
io.sockets.emit('dataB',data);

});

//listen for socket disconnedcting

socket.on('disconnect', function(){

	console.log(socket.id +'just disconnected.');
})



});
