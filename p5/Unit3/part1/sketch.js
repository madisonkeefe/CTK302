let cars = [];
var img;

function setup() {
  createCanvas(500, 500);

  // for (let i = 0; i < 20; i++) {
  //   cars.push(new Car());
  // }
  img = loadImage("assets/fire.jpeg");
  noStroke();
  imageMode(CENTER);
}

function draw() {
  background('grey');
  image(img, 250, 250, 500, 500);
  cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0) {
      cars.splice(i, 1);
    }
  }
}


class Car {

  constructor() {
    // attributes
    this.pos = createVector(width / 2, height - 140);
    this.vel = createVector(random(-.99, .99), random(-3, -1));
    this.r = 250 //random(255);
    this.g = 20 //random(255);
    this.b = 0 //random(255);
    this.a = random(230, 255);

  }

  // methods

  display() {
    fill(this.r, this.g, this.b, this.a);
    stroke('black');
    fill('white');
    textSize(10);
    text("fire burning on the dance floor", this.pos.x, this.pos.y, 50);

  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a - 3;
  }

}
