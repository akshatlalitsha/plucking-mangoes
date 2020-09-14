
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var tree;
var boy;
var ground;
var stone;
var  chain;
var engine,world;

function preload()
{
boy = loadImage('images/boy.png');
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

mango1 = new Mango(1100,100,30);
mango2 = new Mango(1010,140,30);
mango3 = new Mango(900,230,40);
mango4 = new Mango(1200,200,40);
mango5 = new Mango(900,160,40);
mango6 = new Mango(1120,50,40);
mango7 = new Mango(1140,140,40);


tree = new Tree(1050,580);

ground = new Ground(750,580,1300,20);

stone = new Stone(230,420,30);

//chain = new Chain(stone.body,{x:230,y:420});

	//Create the Bodies Here.

	Engine.run(engine);
  
}


function draw() {
  background("white");
  rectMode(CENTER);
  image(boy,200,340,200,300);

  ground.display();

tree.display();

mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();

stone.display();

//chain.display();
 
}



