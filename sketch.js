var seaImage,sea;
var shipImage,ship;


function preload(){


seaImage=loadImage("sea.png")
shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")




}

function setup(){
createCanvas(2000,1000);
sea=createSprite(300,300)
sea.addImage("water",seaImage)

ship=createSprite(500,300)
ship.addAnimation("swim",shipImage)
ship.scale=0.5
}

function draw() {
background("white");
sea.velocityX=-5
if(sea.x< 0 ) {

sea.x=sea.width/2

}





drawSprites();
}