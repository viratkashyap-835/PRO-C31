const Engine = Matter.Engine;
 const World = Matter.World;
 const Events = Matter.Events;
     const Bodies = Matter.Bodies;

var engine,world; 
var particles = [];
var plinkos=[];
var divisions=[];
var ground;



var divisionHeight = 300;

function setup() {

  
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,height,480,10);

  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 55))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,85))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,120))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,150))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,185))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,225))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,265))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,305))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,345))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,385))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,425))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,465))
  }
  for(var k = 0; k <=width; k = k+80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

}

function draw() {
  background(0);
  if(frameCount % 60 === 0){
  
    particles.push(new Particle(random(width/2-10,width/2+10), 10,10));
  }

  
  Engine.update(engine, 25);
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }

 
  for(var k = 0; k<divisions.length;k++){
    divisions[k].display();
 }


  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
 }



 ground.display();

  drawSprites();
}