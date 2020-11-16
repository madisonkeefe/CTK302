var back;
var over;
var title;
var win;
var cars = [];
var frogPos;
var state = 0;
var maxCars = 10;
var maxTimer = 12*60
var timer = maxTimer;

function setup() {
  // put setup code here
  createCanvas(800,600);

//spawn cars
for(var i = 0; i < maxCars; i++){
  cars.push(new Car());
}//end loop
  frogPos = createVector(400, height - 100);

  textAlign(CENTER);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);


  back = loadImage("assets/lily.jpg");
  over = loadImage("assets/over.png");
  first = loadImage("assets/background.png");
  win = loadImage("assets/winner.jpg");
}//end setup

//--------------------------------------

function draw() {
  // put drawing code here

  switch(state){

    case 0://menu
    background('white');
    image(first,400,300);
    fill('black');
    rect(400,150,500,100);
    textSize(50);
    fill('orange');
    text("Gather The Honey",width/2 ,height/2-50);
    textSize(24);
    text("click to begin",width/2 ,height/2);
    break;

  
