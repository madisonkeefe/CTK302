function setup() {
  createCanvas(800, 800);
  
}

function draw() {
  background('grey');
  fill('white');
  arc(520, 241, 250, 500, 0, PI);
  ellipse(400, 200, 250,200);







  fill('black')
  text(mouseX + "," + mouseY, 20, 20);
}
