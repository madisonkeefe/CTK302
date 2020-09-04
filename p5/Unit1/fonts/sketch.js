var f, f1, img3;

function setup() {
  createCanvas(800, 800);

  f = loadFont('assets/a.ttf');
  f1 = loadFont('assets/s.ttf');
  img3 = loadImage("assets/3.jpg");

  textAlign(CENTER);
  imageMode(CENTER);
}

function draw() {
  background('white');
  image(img3, width / 2, height / 2);
  textFont(f1);
  fill('white');
  textSize(20);
  text("To die will be an", width / 2, height / 2);

  textFont(f);
  fill('white');
  textSize(90);
  text("Awfully Big Adventure", width / 2, height / 2 + 100);




}
