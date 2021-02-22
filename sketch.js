
var monkey , monkey_running;
var banana,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var survivalTime = 0;
var ground, groundImage;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
   obstacleGroup = createGroup();
  bananaGroup = createGroup();
 
}



function setup() {
  //create a monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)

  
}


function draw() {
  background(225);
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }

  if (keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime,100,50);
  
  bananaa();
  obstacles();
  
  drawSprites();
}


function bananaa(){
 if (frameCount % 80 === 0){
   var banana = createSprite(600,165,10,40);
  banana.y = Math.round(random(120,200));                banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -3;
  banana.lifetime = 200;
  //add each banana to the group
    bananaGroup.add(banana);
}
}

function obstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,330,10,40);
    obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -3;
  obstacle.lifetime = 200;
  //add each banana to the group
    obstacleGroup.add(obstacle);
}
}


