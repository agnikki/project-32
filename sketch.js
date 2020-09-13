const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;
var block1, block2, block3, block4, block5,block6,block7,block8,block9;
var score = 0;
var bgImage;


function preload(){
  polygon_img=loadImage('hexagon.png'); 
  //bg_night=loadImage('11-15NightDriving-1.jpg')
  //bg_day=loadImage('Daytime.jpg')
  getTime();
}


function setup() {
  var canvas = createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  ground=new Ground(400,395,800,10)
  //level 1
  block1= new Block(330,350,30,40,"lightblue");
  block2=new Block(360,350,30,40,"lightblue");
  block3=new Block(390,350,30,40,"lightblue");
  block4=new Block(420,350,30,40,"lightblue");
  block5=new Block(450,350,30,40,"lightblue");
  //level 2
  block6=new Block(360,310,30,40,"pink");
  block7=new Block(390,310,30,40,"pink");
  block8=new Block(420,310,30,40,"pink");
  //level 3
  block9=new Block(390,270,30,40,"aquamarine");
polygon=new Polygon(200,200,40,40);
  sling= new SlingShot(polygon.body,{x:100,y:200});
}

function draw() {

  if(bgImage){
background(bgImage);
  }
  stroke("black");
  textSize(20)
  
text("SCORE: "+ score,250,40);

  Engine.update(engine); 
  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
 
  polygon.display();
  sling.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();

  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if(keyCode === 32){
      sling.attach(polygon.body);
  }
}
async function getTime(){
  var response =await fetch("http://worldtimeapi.org/api/timezone/America/Chicago");
var responseJSON=await response.json();

var datetime = responseJSON.datetime;
var hour = datetime.slice(11,13);
console.log(hour);
if(hour>=06 && hour<=19){
  bg="Daytime.jpg";
}else{
  bg="night.jpg";
}
//backgroundImg(bg);
//console.log(backgroundImg);
bgImage=loadImage(bg);
}

