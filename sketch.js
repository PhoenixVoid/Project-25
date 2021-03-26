const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj, paperObject, groundObject;
var engine, world;

var dustbin;
var dustbinImg;

function preload(){
	dustbinImg = loadImage("dustbinImage.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER)


	dustbin = createSprite(600, 300, 20, 20);
	dustbin.addImage(dustbinImg);
	dustbin.scale = 1.5;

	engine = Engine.create();
	world = engine.world;

	dustbinObj = new Dustbin(600, 360);

	groundObject = new Ground(width/2, 390, width, 20);

	paperObject = new Paper(100, 200, 30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(500, 500, 500);
  
	textSize(15);
	fill(38, 50, 62);
	stroke(0);
	text("To throw the paper in the trash can, click UP ARROW repeatedly", 210, 60);

  dustbinObj.display();

  groundObject.display();

  drawSprites();

  paperObject.display();

}

function keyPressed() {

	if (keyCode == UP_ARROW){


		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:45, y:-58});

	}

}




























































































