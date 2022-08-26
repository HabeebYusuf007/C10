var seaImg;
var shipImg1;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(800,400);
  
  //create Sea sprite
  sea = createSprite(150,150,100,100);
  sea.addImage(seaImg);
  sea.velocityX = 0.2;

  
  //create ship sprite
  ship = createSprite(400,220);
  ship.addAnimation("floating", shipImg1);
 // console.log(shipImg1);
  

}

function draw() {
  background("blue");
  ship.scale = 0.3;
  drawSprites();

 if(sea.x < 0){
   sea.x = sea.width/2;
   
 }
}