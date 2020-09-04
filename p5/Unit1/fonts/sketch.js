var f, f1;

function setup() {
  createCanvas(800, 800);

  f = loadFont('assets/a.ttf');
  f1 = loadFont('assets/s.ttf');

  textAlign(CENTER);
}

function draw() {
  background(100);

  textFont(f1);
  fill('white');
  textSize(20);
  text("To die will be an", width / 2, height / 2);

  textFont(f);
  fill('white');
  textSize(90);
  text("Awfully Big Adventure", width / 2, height / 2 + 100);




}
