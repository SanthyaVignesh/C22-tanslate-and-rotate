const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var box,myEngine,myWorld;

function setup() {
  createCanvas(400,400);
  var box_option = {
   isStatic : true
  }

  myEngine = Engine.create();
  myWorld  = myEngine.world;

  box = Bodies.rectangle(200,200,50,150,box_option);

  World.add(myWorld,box);

  angle = 45;

  angleMode(DEGREES)

}

function draw() {
  background(0);  

  rectMode(CENTER);

  //To help student understand how rotate works

  //First run code after showing how the axis is remove comment on line no 43

  // Now show how axis has shifted after showing them how axis rotates itself around origin

  //Remove comments on line number 42 explain how origin gets translated 

  // Now ask student to tell them what value they should give on x and y of rect command
  //So they rotate around themselves similar to how earth rotates around itself.

  //translate(200,200);
  //rotate(angle);
  strokeWeight(5);
  stroke("Red");
  line( 0, 0 ,0 ,400);
  line( 0, 0 ,400,0);
  
  
  rect(box.position.x,box.position.y,50,150);

  
}