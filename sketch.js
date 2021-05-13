const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,0,50,50);
    box2 = new Box(240,-1000,50,50);
    ground = new Ground(300,height,600,20);
    ball = new Ball(300,550)
}

function draw(){
    background(0);
    Engine.update(engine);
    if(box1.body){
    box1.display();
    Matter.Body.setVelocity(box1.body, {x:0, y:2});
}
    if(box2.body){
    box2.display();
    Matter.Body.setVelocity(box2.body, {x:0, y:2});

    }
    ground.display();
    ball.display();
}