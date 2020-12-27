
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var options={
	isStatic : false,
	restitution: 0.3,
	friction: 0.5,
	density: 1.2,
}
function preload() {
	//paperImg = loadImage("ball.png");
}


function setup() {
	createCanvas(windowWidth, windowHeight);

	ground = new Ground(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
	paper1 = new paper(150, windowHeight-100, 60)
	ground1 = new Ground1(650,550,1300,10)
	ground2 = new Ground2(900,470,5,150);
	ground3 = new Ground3(978,542,150,5);
	ground4 = new Ground4(1050,470,5,150);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 
  
  drawSprites();
 ground.display();
 paper1.display();
 ground1.display();
 ground2.display();
 ground3.display();
 ground4.display();
}

function keyPressed() {
	if (keyWentDown === UP_ARROW) {
		Matter.Body.applyForce(paper1Object,paper1Object.position,{x:85, y:-85});
	}
}


