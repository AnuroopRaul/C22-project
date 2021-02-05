var fixedRect;
var movingRect;
var o1
var o2

function setup() {
 createCanvas(800,400);

 fixedRect =  createSprite(400, 200, 50, 100);
fixedRect.shapeColor = "yellow";
movingRect =  createSprite(400, 200, 100, 50);
movingRect.shapeColor = "yellow";
o1 = createSprite (180,120,40,90)
o1.shapeColor = "orange";
o1.velocityX = +3;
//o1.velocityY = -3;
o2 = createSprite (300,120,40,90)
o2.shapeColor = "blue";
o2.velocityX = -3;
//o2.velocityY = +3;


movingRect.debug = "true";
fixedRect.debug = "true";

}

function draw() {

background(0);  

movingRect.y = World.mouseY
movingRect.x = World.mouseX

if(isTouching(o1,movingRect)){
  movingRect.shapeColor = "green"
  o1.shapeColor = "green"
}else{
  movingRect.shapeColor = "red"
  o1.shapeColor = "orange"
}
  bounceOff(o1,o2);

  drawSprites();
}