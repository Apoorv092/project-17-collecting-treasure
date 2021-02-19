var PLAY=1
var END=0
var gamestate=1

var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var score=0
var cashG,diamondsG,jwelleryG,swordGroup;
var rubyImg;
var endImg

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
rubyImg=loadImage("ruby.png")

  
}

function setup(){
  
  createCanvas(400,400);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(200,370,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.addAnimation("ending",endImg);
boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
rubyG=new Group();
  




}

function draw() {

  background(0);
  
  
  edges= createEdgeSprites();
  boy.collide(edges);
  if(gamestate===PLAY){
    
    boy.x = World.mouseX;
    
    path.velocityY = 4;
    
    if(path.y > 400 ){
    path.y = height/2;
  } 
   if (cashG.isTouching(boy)) {
      cashG.destroyEach();
     score=score +50
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
     score=score+150
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      score=score+100
    }else if(rubyG.isTouching(boy)){
      rubyG.destroyEach();
      score=score+150
    }  
  
    else
      
      if(swordGroup.isTouching(boy)) {
      gamestate=END
        boy.changeAnimation("ending",endImg)
      boy.scale=1.0
        boy.x=200
        boy.y=200
        
    createCash()
        createJwellery()
        createDiamonds()
        createRuby()
        createSword()
  }
  }else 
    
    
    
  
  //code to reset the background
 
  createCash()
        createJwellery()
        createDiamonds()
        createRuby()
        createSword()
 

     
    
  

  drawSprites();
  
  
  if(gamestate===END){
      fill(255)
      textSize(14)
      text("Press UP ARROW to restart",100,250)
      score=0
        cashG.destroyEach()
        cashG.setVelocityEach(0)
      
        swordGroup.destroyEach();
        swordGroup.setVelocityEach(0)
    
        rubyG.destroyEach()
        rubyG.setVelocityEach(0)
        
        jwelleryG.destroyEach()
    jwelleryG.setVelocityEach(0)
    
    diamondsG.destroyEach()
    diamondsG.setVelocityEach(0)
      
      path.setVelocity(0)
      
      
       if(keyDown("UP_ARROW")){
          reset()
          }
         
    
    }
  textSize(20);
  fill(255);
  text("Treasure: "+ score,150,20);

}

function reset(){
  gamestate=PLAY
  boy.changeAnimation("SahilRunning",boyImg)
  boy.scale=0.08
  boy.x=200
  boy.y=370
   
path.velocityY=4
  path.x=200
  path.y=200
  
}

function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}
function createRuby(){
 if(frameCount% 150==0){
ruby=createSprite(Math.round(random(50,350),40,10,10));
   ruby.addImage(rubyImg)
   ruby.scale=0.1
   ruby.velocityY=3
   ruby.lifetime=150
   rubyG.add(ruby)
 }
  
}
