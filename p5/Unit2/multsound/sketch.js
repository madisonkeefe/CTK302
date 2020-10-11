let state = 0;
let song1, song2, song3;

function preload() {
  song1 = loadSound("assets/mario.mp3");
  song2 = loadSound("assets/sonic.mp3");
  song3 = loadSound("assets/zelda.mp3");

  song1.loop();
  song1.pause();
  song2.loop();
  song2.pause();
  song3.loop();
  song3.pause();



}

function setup() {
  createCanvas(400, 400);

}


function draw() {

  background(100);


  switch (state) {

    case 0:
      text("1", 100, 100);
      song1.play();
      state = 1;
      break;

    case 1:
      text("Listen to sound 1", 100, 100);
      break;

    case 2:
      song2.play();
      state = 3;
      break;

    case 3:
      text("Listen to sound 2", 100, 100);
      break;

    case 4:
      song3.play();
      state = 5;
      break;

    case 5:
      text("Listen to sound 3", 100, 100);
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 5) state = 0;

  song1.pause();
  song2.pause();
  song3.pause();

}
