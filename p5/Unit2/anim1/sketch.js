var x = 0;
var f;

function setup() {
  createCanvas(500, 500);
  f = loadFont('assets/a.ttf');
}

function draw() {
  background(100);
  //rect(x, 250, 50, 50);
  fill('white');
  textFont(f);
  textSize(45);
  text("Watch me move", x, 250);
  x += 1;

  if (x > width) {
    x = 0;

  }
}
