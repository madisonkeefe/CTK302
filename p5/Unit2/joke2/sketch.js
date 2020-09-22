let timer = 0;
let state = 0;

function setup() {
  createCanvas(500, 500);
  textSize(32);
  textAlign(CENTER);
  rectMode(CENTER);
}
  function draw() {

    switch (state) {

      case 0:
        background('green');
        text("What kind of shoes do frogs wear?", 250, 250, 450, 400);
        timer = timer + 1;
        if (timer > 5 * 60) {
          state = 1;
          timer = 0;
        }


        break;

      case 1:
        background('yellow');
        text("Open toed.", 250, 250);
        break;

    }

  }
