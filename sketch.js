const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder, ball, ground;
var stand1, stand2;
var ball;
var backgroundImg;
var slingShot;
var polygon_img;
var score = 0;
function preload() {
  
  get_bg()
  polygon_img = loadImage("polygon2.png");
  
 
}
function setup() {
  createCanvas(900, 400);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Base();
  stand1 = new Ground(390, 300, 250, 10);
  stand2 = new Ground(700, 200, 200, 10);

  
  block1 = new Block(340, 275, 40, 40);
  block2 = new Block(360, 235, 40, 40);
  block3 = new Block(380, 275, 40, 40);
  block4 = new Block(400, 235, 40, 40);
  block5 = new Block(420, 275, 40, 40);
  block6 = new Block(380, 195, 40, 40);
  blocks1 = new Block(650, 175, 40, 40);
  blocks2 = new Block(690, 175, 40, 40);
  blocks3 = new Block(670, 135, 40, 40);
  blocks4 = new Block(730, 175, 40, 40);
  blocks5 = new Block(710, 135, 40, 40);
  blocks6 = new Block(690, 95, 40, 40);

  
  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  slingShot = new Slingshot(ball, { x: 100, y: 200 });
}
function draw() {
  Engine.update(engine);
  
  if(backgroundImg){
    background(backgroundImg);
  }
  
  textSize(20);
  fill("yellow");
  text(
    "score:" + score,
    10,
    30
  );

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block5.display();
  block6.display();
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  blocks6.display();

  
 
 
  block4.score();
  block5.score();
  block6.score();
  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  blocks5.score();
  blocks6.score();

  imageMode(CENTER);
  image(polygon_img, ball.position.x, ball.position.y, 40, 40);

  slingShot.display();
}
function mouseDragged() {
  Matter.Body.setPosition(ball, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(ball)
  }
}

async function get_bg(){
  var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var jsondata = await response.json();
  var dt = jsondata.datetime;
  var hour = dt.slice(11,13);

  if(hour>=6 && hour<20){
      bg="bg.png";
  }

  else{
      bg="bg2.jpg"
  }
  
  backgroundImg = loadImage(bg);

}

/*function score(){
  if(block1.speed <0 && block1.speed >-10){
    score=score+10;
  }
  if(block2.speed <0 && block2.speed >-10){
    score=score+10;
  }
  if(block3.speed <0 && block3.speed >-10){
    score=score+10;
  }
  if(block4.speed <0 && block4.speed >-10){
    score=score+10;
  }
  if(block5.speed <0 && block5.speed >-10){
    score=score+10;
  }
  if(block6.speed <0 && block6.speed >-10){
    score=score+10;
  }
  if(blocks1.speed <0 && blocks1.speed >-10){
    score=score+10;
  }
  if(blocks2.speed <0 && blocks2.speed >-10){
    score=score+10;
  }
  if(blocks3.speed <0 && blocks3.speed >-10){
    score=score+10;
  }
  if(blocks4.speed <0 && blocks4.speed >-10){
    score=score+10;
  }
  if(blocks5.speed <0 && blocks5.speed >-10){
    score=score+10;
  }
  if(blocks6.speed <0 && blocks6.speed >-10){
    score=score+10;
  }
}*/


