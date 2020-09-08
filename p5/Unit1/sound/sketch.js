var song1;
var img1;

function preload() {
  song1 = loadSound("assets/prettylights.mp3");

}

function setup() {
  createCanvas(800, 800);
  img1 = loadImage("assets/water.jpeg");
  imageMode(CENTER);
  song1.loop();
}

function draw() {
  background('white');
  image(img1, width / 2, height / 2, 700, 700);
}

function mouseReleased() {
  if (song1.isPlaying()) {
    song1.pause();
  } else {
    song1.play();
  }
}
