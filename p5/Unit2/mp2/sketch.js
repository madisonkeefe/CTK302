var myState = 0;
var x = 0;
var click;
var tree;
var monkeytree;
var monkeylook;
var monkeyseebanana;
var monkeyhugnana;
var timer = 0;
textAlign(CENTER);
imageMode(CENTER)

function setup() {
  // put setup code here
  createCanvas(1000, 1000);
  f = loadFont('assets/a.ttf');
  click = loadImage("assets/clickme.png");
  tree = loadImage("assets/tree.png");
  monkeytree = loadImage("assets/monkeytree.png");
  monkeylook = loadImage("assets/monkeylook.png");
  monkeyseebanana = loadImage("assets/monkeyseebanana.png");
  monkeyhugnana = loadImage("assets/monkeyhugnana.png");

}

function draw() {
  // put drawing code here
  background('white');

  switch (myState) {
    case 0:
      textFont(f);
      textSize(90);
      text("Press to hear a tale of a lone monkey", 90, 90);
      image(click, 220, 100, 500, 500);
      timer++;
      if (timer > 200) {
        myState = 1;
        timer = 0;
      }
      break;

    case 1:
      textFont(f);
      textSize(90);
      text("In an abandoned forest stood one tree", 100, 100);
      image(tree, 220, 200, 500, 500);
      break;

    case 2:
      textFont(f);
      image(monkeytree, 220, 200, 500, 500);
      textSize(90);
      text("Along came a monkey feeling lonely", 100, 100);


      break;

    case 3:
      textFont(f);
      textSize(90);
      text("Until one day he spotted a friend the same size as him", 100, 100);
      image(monkeyseebanana, 220, 150, 500, 500);
      break

    case 4:
      textFont(f);
      textSize(90);
      text("And they became bestfriends for life", x, 100);
      x = x + 2;
      if (x > width) {
        x = -300;
      }
      image(monkeyhugnana, 220, 150, 500, 500);
      break;




  }
}

function mouseReleased() {
  myState = myState + 1;
  if (myState > 5) {
    myState = 0;

  }
}
