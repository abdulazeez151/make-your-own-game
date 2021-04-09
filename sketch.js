const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var thePlayer, heroImage;
var world, engine;
var wall;
var castle, castle2, castleImage;
var monster01, monster1Image;
var monster02, monster2Image;
var monster03, monster3Image;
var monster04, monster4Image;
var monster05, monster5Image;
var monster06, monster6Image;
var monster07, monster7Image;
var monsters, monsterGroup;
var gameOver, gameOverImage;

function preload(){
  castleImage = loadImage("castle.png");

  monster1Image = loadImage("monster1.png.jpg");
  monster2Image = loadImage("monster2.png.jpg");
  monster3Image = loadImage("monster3.png.jpg");
  monster4Image = loadImage("monster4.png.jpg");
  monster5Image = loadImage("monster5.png.jpg");
  monster6Image = loadImage("monster6.png.jpg");
  monster7Image = loadImage("monster7.png.jpg");

  gameOverImage = loadImage("gameOver.png");

  heroImage = loadImage("hero.png.png");
}

function setup() {
  createCanvas(1600,800);

  engine = Engine.create();
  world = engine.world;

  castle = createSprite(1400,200,10,10);
  castle.addImage(castleImage);

  castle2 = createSprite(1400,600,10,10);
  castle2.addImage(castleImage);

  thePlayer = createSprite(50, 750, 15, 15);
  thePlayer.addImage(heroImage);
  thePlayer.scale = 0.9;

  gameOver = createSprite(750, 400, 10, 10);
  gameOver.shapeColor = "pink";
  //gameOver.addImage(gameOverImage);
}

function draw() {
  background("pink");  

  if (frameCount % 20 === 0) {
    monsters = createSprite(random(1200, 200), 0, 1400, 600);
    monsters.velocityY = 6;
    var rand = Math.round(random(1,7));
    switch(rand){
    case 1: monsters.addImage("monster1",monster1Image);
    break;
    case 2: monsters.addImage("monster1", monster2Image);
    break;
    case 3: monsters.addImage("monster1", monster3Image);
    break;
    case 4: monsters.addImage("monster1", monster4Image);
    break;
    case 5: monsters.addImage("monster1", monster5Image);
    break;
    case 6: monsters.addImage("monster1", monster6Image);
    break;
    case 7: monsters.addImage("monster1", monster7Image);
    break;
    } 
    //monsterGroup.add(monsters);                     
  }
     
  if(thePlayer.index !== null) {
    for(var i = 0; i < monsterGroup; i++) {
      if(monsterGroup.get(i).isTouching(thePlayer)) {
        monsterGroup.get(i).destroy();
      }
    }
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    thePlayer.x = thePlayer.x + 15;
  }

  if(keyIsDown(LEFT_ARROW)){
    thePlayer.x = thePlayer.x - 15;
  }

  thePlayer.display();

  drawSprites();
}