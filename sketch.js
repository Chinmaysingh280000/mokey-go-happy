
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
 
  
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  

  ground= createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x)
  
}


function draw() {
  background("white") 
   if(keyDown("space")){
     monkey.velocityY = -10
    
   }
  
   monkey.velocityY = monkey.velocityY + 0.8
        
  monkey.collide(ground)
  if(ground.x<50){
    ground.x = ground.width/2
  }
  spawnBananas()
   spawnRock()
  
drawSprites()
  
} 
function spawnBananas(){
  if(frameCount%120==0){
    banana=createSprite(400,random(120,200))
    banana.addImage(bananaImage)
    banana.velocityX=-4
    banana.scale=0.05
  }
}
function spawnRock(){
  if(frameCount%145==0){
     obstacle=createSprite(400,300)
     obstacle.addImage(obstacleImage)
     obstacle.velocityX=-4
     obstacle.scale=0.25
 
  }
}




