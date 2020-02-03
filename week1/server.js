// Get http features from node
let http = require('http');
// Specify a port
let PORT = 8001;

//make an express app
let express = require('express');
let app = express();

//let server = http.createServer(handleRequest).listen(PORT);


let server = http.createServer(app).listen(PORT, function(){
console.log("server listening on port" + PORT);


});

app.use(express.static('public'));

// http.createServer(app).listen(8001, function(){
// 	console.log("Server listening on port: " + PORT);
// });

//youve created an http server
//let server = http.createServer(handleRequest).listen(PORT);

//function handleRequest(req,res){
//	console.log(req);
//	res.writeHead(200);
//	res.end("Hellow World",req);
//}
//console.log(server);


// .listen(PORT, function(){
//	console.log("server lisining on port" + PORT);;
//}

//Tell express app where to look for documents


