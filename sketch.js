var shipMoving, seaImage, sea, ship

function preload(){
//loading ship animation
 shipMoving=loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
 seaImage=loadImage("sea.png");



}

function setup(){
createCanvas(2000,500);
sea = createSprite(200,180,400,20);
sea.addImage("background", seaImage);
sea.x = sea.width/2;
//sea.scale = 0.1;

ship = createSprite(150,240,10,10);
ship.addAnimation("moving",shipMoving);
ship.scale = 0.35;

}


function draw() {
background("white");
sea.velocityX = -4;
if(sea.x < 0)(
  sea.x=sea.width/2
);

drawSprites();
}