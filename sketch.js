// create a brick building, be able to drop bombs that destroy building
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bricks;
var bombs;
var bg;

var bricks = new Group();

function createBrickRow(y, color) {
  for(c=0; c<6; c++)
  {
    var brick = createSprite(65+54*c,y,50, 25);
    brick.shapeColor = color;
    bricks.add(brick);
  }
}

createBrickRow(65, "red");
createBrickRow(65+29, "red");
createBrickRow(65+29+29, "red");
createBrickRow(65+29+29+29, "red");

function preload(){
  bg_img = loadImage('background.jpg');
}

function setup() {
  createCanvas(600,300);

  engine = Engine.create();
  world = engine.world;
  
}

function draw() 
{
  background(51);
  image (bg_img,0,0,600,300);
  Engine.update(engine);

  drawSprites()

}

 function mousePressed(){
  bombs = createImg('bomb.png');
  bombs.size(50,50);
}

