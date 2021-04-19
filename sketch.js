
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var dustbin1,dustbin2,dustbin3;
var paper1;

 


function setup() {
	createCanvas(800, 700);
	background("white");


	engine = Engine.create();
	world = engine.world;

	dustbin1 = new Dustbin(145,650,10,70);
	dustbin2 = new Dustbin(200,680,100,10);
	dustbin3 = new Dustbin(255,650,10,70);

	ground = new Ground(400,690,800,5);

	paper1 = new Paper(700,400,50,50);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground.display();

  paper1.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:-230,y:250});
	}
}



