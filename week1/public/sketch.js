// 1 Box by Recursion, 2nd by For-loop

// Recursion is a loop that is contained within itself

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(mouseX,mouseY/mouseX,mouseX-mouseY);
  rectMode(CENTER);
  drawSomething(mouseX, mouseY, mouseY);
  
  for (var i = mouseY; i>0; i--){
   // print("run the line inside of the for loop");
    
    fill(0,0,i);
    stroke(i);
    rect(mouseX+50,mouseY+50,i,i);
    
    print("<--- number of times this is called");
   
    ///defines max, or "ceiling"
	
  }
  
}

function drawSomething(x,y,s) {
  
	fill(s,0,0);
	
	noStroke();
	
	rect(x,y,s,s);
	
  if (s>10) {
    drawSomething(x,y,s-10);
  }
	
	//Hey 
	//Why aren't we doing this?
	//
	//s=s-10;
  
  //recursion defines the last minimum, or "floor"
  
  
  
  
  
  ///defines max, or "ceiling"
	
}
