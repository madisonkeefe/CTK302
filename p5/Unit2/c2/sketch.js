var mic;
var vol;
let state = 0;
let timer = 0;


function setup() {
  createCanvas(500, 500);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

  vol = (mic.getLevel()).toFixed(2);


  switch (state) {
    case 0:
      background('red');
      text("shhhh", 250, 250);
      if (vol > 0.10) {
        state = 1
      }

      break;

    case 1:
      background('green');
      text("QUIET DOWN", 250, 250);
      timer = timer + 1;
      if (timer > 10 * 60) {
        state = 0;
        timer = 0;
      }
      break;
  }

}




// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
