const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200, 300, 50, 50); //new : new object
    box2 = new Box(240, 100, 50, 100);

    ground = new Ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    
    ground.display();
}

/*
OBJECT ORIENTED PROGRAMMING (OOP)

Real-world objects:
    1. Properties
    2. Functions

Steps:
    1. Creating a design/blueprint ==> CLASS
    2. Creating the object from the design
    3. Using the object (functions)

*/