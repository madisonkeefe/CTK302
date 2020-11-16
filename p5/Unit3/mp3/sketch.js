let cars = [];
let f1, f2, f3;
let bg;
let bees = [];
let maxCars = 5;
let frogPos;
let state = 0;
let timer = 0;
var img, img2, img3, img4;
//
function setup() {
  createCanvas(600, 600);
  frogPos = createVector(width / 2, height - 80);
  textAlign(CENTER);
  rectMode(CENTER);

  img = loadImage("assets/background.png");
  img2 = loadImage("assets/bee.png");
  img3 = loadImage("assets/honey.png");
  img4 = loadImage("assets/beelose.png");

  f1 = loadFont("assets/game.ttf");
  f2 = loadFont("assets/m.ttf");
  f3 = loadFont("assets/type.ttf");

  //bg = loadImage("assets/fall.jpg");
  bees = [img3];

  // Spawn objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}



function draw() {
  //game();
  switch (state) {
    case 0:
      background('white');
      image(img, 100, 100, 500, 500);
      textFont(f1);
      textSize(20);
      fill('black');
      text("Gather the honey little one!", width / 2, height / 2);
      text("CLICK TO BEGIN", width / 2 + 30, height / 2 + 30);
      break;

    case 1:
      game();
      timer++;
      if (timer > 10 * 60) {
        state = 3;
      }
      break;

    case 2:
      background('white');
      fill(random(255), random(255), random(255));
      textSize(55);
      text("you won", width / 2, height / 2);
      textSize(30);
      text("CLICK TO PLAY AGAIN...", width / 2 + 30, height / 2 + 30);
      break;

    case 3:
      background('black');
      image(img4, 50, 50, 250, 250);
      fill(random(255), random(255), random(255));
      textSize(55);
      text("You lost", width / 2, height / 2);
      textSize(30);
      text("CLICK TO PLAY AGAIN...", width / 2 + 30, height / 2 + 30);
      break;
  }
}


function game() {
  background('white');
  image(img, 0, 0, width, height);

  // display and move objects
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    state = 2;
  }

  //draw the frog

  image(img2, frogPos.x, frogPos.y, 150, 150);
  checkForKeys();
}


function resetTheGame() {
  cars = [];
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
  timer = 0;

}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2: //win
      resetTheGame();
      state = 0;
      break;

    case 3: //lose
      resetTheGame();
      state = 0;
      break;
  }
}
// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-9, 9), random(-9, 9));
    this.size = random(40, 80);
    //this.c = color(random(150, 200), random(50), random(50));
    let b = floor(random(3));

    this.bees = bees[b];
  }

  // methods

  display() {
    //rect(this.pos.x, this.pos.y, 50, 25);
    //  fill(this.c);
    image(img3, this.pos.x, this.pos.y);
    //image(name, this.pos.x, this.pos.y)
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
