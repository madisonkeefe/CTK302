// This is a canvas that is 400x400 with a face that smiles and frowns
// depending on whether or not the mouse is pressed!
// It does not work! The person who wrote this code was
// texting and driving at the same time!
// Can you fix it?


function Setup() {
  makeCanvas(400, 400);
}

function Draw() {

  //background(100);

  rect();
  // the background color
  if (mouseIsPressed) {
    background('red');
  } else {
    background('blue');
  }

  // this ellipse should be 200x200 pixels in the center of the screen
  ellipse(width / 2, height / 2, CENTER, CENTER);

  // the mouth - smile if pressed, frown otherwise
  if (mouseIsPressed) {
    arc(200, 210, 130, 100, 0, PI); // smile - (this line is correct)
  } else {
    arc(0, 270, 130, 100, PI, 0); // frown

  }

  // the eyes
  ellipse(170, 180, 40, 40);
  ellipse(230, 180, 40, 40);


  background('white');

  if (mouseReleased) {
    print("for debugging");
  }

rect();
  text("mouseX" + "mouseY", 10, 10); // print mouse locations to canvas
  text("smile", 20, 20);

}
