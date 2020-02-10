let socket = io();

socket.on('connect',function(){
console.log('Connected to server !');
})

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(255);

  socket.on('dataB',function(data){
    console.log(data);
    elipse(data.x,data.y,10,10);
  });
}

function draw(){


}

function mouseMoved(){
socket.emit('dataA',{x:mouseX, y:mouseY});

}

//remember to hookup src sockets in index.html in public folder