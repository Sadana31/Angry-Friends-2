const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig2;
var backgroundImg,platform;
var bird, slingshot;
var score = 0;

var gameState = "onSling";


function preload(){
    backgroundImg = loadImage("bg.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810, 220);
    
    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);
    bird.scale = 0.9;

    pig3 = new Pig2(550,350);
    box6 = new Box(550,300,50,50);
    pig4 = new Pig2(400,350);
    box7= new Box(400,300,50,50,255);

    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
        background(backgroundImg);

    textSize(30);
    text("SCORE: " + score, 900,50);        

    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    pig2.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    platform.display();

    pig3.display();
    pig3.score();
    pig4.display();
    pig4.score();

    box6.display();
    box7.display();

    bird.display();
    slingshot.display();   
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
     gameState = "launched";
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(bird.body);
        gameState = "onSling";
        Matter.Body.setPosition(bird.body, {x:200, y:50});
    }
}
