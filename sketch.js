var fixed , moving;


function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  moving=createSprite(400,200.,50,20);
  fixed.shapeColor="blue";
  moving.shapeColor="blue";
  fixed.debug=true;
  moving,debug=true;
}

function draw() {
  background(0,0,0);
  moving.x=World.mouseX;
  moving.y=World.mouseY;
if(moving.x - fixed.x < fixed.width/2 + moving.width/2 && 
  fixed.x - moving.x < fixed.width/2 + moving.width/2 &&
  moving.y - fixed.y < fixed.width/2 + moving.width/2 && 
  fixed.y  - moving.y < fixed.width/2 + moving.width/2){
  fixed.shapeColor="yellow";
  moving.shapeColor="yellow";
}
else{
  fixed.shapeColor="blue";
  moving.shapeColor="blue";
}
  drawSprites();
}