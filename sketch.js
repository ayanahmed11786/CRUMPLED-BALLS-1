
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbin1, dustbin2, dustbin3;
var paper1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(550,670,width-100,20);

    dustbin1 = new Dustbin(900,650,200,20);
	dustbin2 = new Dustbin(1000,610,20,100);
	dustbin3 = new Dustbin(800,610,20,100);

	paper1 = new Paper(50,600,10,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ellipseMode(RADIUS);
  paper1.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
   
	   Body.applyForce(paper1.body,paper1.body.position,{x:22,y:-15});
   
	 }
   }

