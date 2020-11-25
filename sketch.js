
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var groundObject;

function preload(){
  
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  groundObject = new Ground(600,height,1200,20);

}

function draw() {
  background(56,44,44);

  groundObject.display();
 
}


