




var ground;
function setup() {
  createCanvas(800,400);
  ground=new Ground (200,50,100,20) 
  
}

function draw() {
  background("black"); 
 
  ground.display();
 
}