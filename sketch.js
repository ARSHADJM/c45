var steve,stevewalkImage
var groundImage;
var ground
var wither,witherimg;
var chestPlate,pants,helmet,sword;
var chstimg,pntsimg,helmimg,swrdimg;
var apple,appleimg;
var cactus,cactusimg;
function preload(){
 groundImage = loadImage("background.png");
  stevewalkImage = loadImage("walk.gif");
  witherimg = loadImage("Wither.jpg");
  chstimg = loadImage("Chestplate.png");
  pntsimg = loadImage("iron pants.jpg");
  helmimg = loadImage("Helmet.png");
  swrdimg = loadImage("Iron.png");
  appleimg = loadImage("apple2.png")
  cactusimg = loadImage("cactus.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight);
 ground=createSprite(width/2,height/2,width*2,height);
  ground.addImage(groundImage)

 steve = createSprite(50,160,20,50);
  steve.addImage("walking",stevewalkImage);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  steve.scale = 0.30;
  steve.x = 250
}


function draw(){
  background("white");
  //console.log(steve.y)
  
  //jump when space key is pressed
  if(keyDown("space")){
    steve.velocityY = -10;
  }
   if(keyDown("right_arrow")){
    steve.velocityX = +5
   
  }

  steve.velocityY = steve.velocityY + 0.5;
  ground.velocityX=-2
  
  if (ground.x<0){
    ground.x=ground.width/2
  }

 
  
  console.log(frameCount)
  steve.collide(edges[3])
  steve.collide(edges[2])
  drawSprites();
}