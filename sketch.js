const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body= Matter.Body;

var box1;

function setup(){
    createCanvas(800,600);
    box1=Bodies.rectangle(400,300,70,35);
    //Body.setStatic(box1,true)
}

function draw(){
    background("blue");
    var angle = box1.angle;

    Matter.Body.rotate(box1,PI/4);

    push ();
    translate (box1.position.x,box1.position.y)
    rotate (angle);    
    rectMode(CENTER);
    rect(0,0,70,35,angle);
    
    
}

