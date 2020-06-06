const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var world,engine;

var play;
var play1,play2,play3,play4,play5,play6,play7,play8,play9;
var ground;

function setup() {
  createCanvas(1200,600);
engine=Engine.create();
world=engine.world;
var option = {
  isStatic:true
}
ground = Bodies.rectangle(600,560,1200,30,option);
World.add(world,ground);
  play  = new Play(600,500,200,300);
  play1 = new Play(425,500,50,290);
  play2 = new Play(430,400,50,200);
  play3 = new Play(100,400,50,200);
  play4 = new Play(420,400,100,400);
  play5 = new Play(1100,400,100,400);
  play6 = new Play(780,400,200,195);
 

}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
play.display();
play1.display();
play2.display();
play3.display();
play4.display();
play5.display();
play6.display();
rect(ground.position.x,ground.position.y,1200,30);
  
}
