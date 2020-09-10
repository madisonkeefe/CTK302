//var song1;

function setup() {
  createCanvas(800, 800);
  frameRate(10);
  //song1.play();
}

function preload() {
  //song1 = loadSound("assets/eyes.mp3");

}

function draw() {
  background(220);
  noStroke();
  fill('#a9a9a9');
  rect(0, 560, 2000, 500);
  //background(random(255), random(255), random(255));

  noStroke();
  fill('white');
  ellipse(320, 310, 170, 150); //cloud formation
  ellipse(400, 400, 170, 150);
  ellipse(430, 300, 170, 150);
  ellipse(515, 360, 170, 150);
  ellipse(270, 365, 170, 150);

  stroke('black');
  strokeWeight(1);
  fill('white');
  ellipse(337, 341, 30, 60); //eyes
  ellipse(435, 341, 30, 60);

  stroke('grey'); //eye color outline
  strokeWeight(1);
  fill('black');
  ellipse(337, 355, 20, 30);
  ellipse(435, 355, 20, 30);

  stroke('black');
  strokeWeight(2);
  fill('black');
  line(319, 427, 319, 545);
  line(479, 430, 479, 545);
  ellipse(300, 545, 60, 30);
  ellipse(460, 545, 60, 30);

  if (mouseIsPressed) {
    //background('grey');

    //if (song1.isPlaying()) {
      //song1.pause();
    //} else {
      //song1.play();
    //}

    background(random(255), random(255), random(255));
    noStroke();
    fill(random(255), random(255), random(255));
    rect(0, 560, 2000, 500);

    noStroke();
    fill('white');
    ellipse(320, 310, 170, 150); //cloud formation
    ellipse(400, 400, 170, 150);
    ellipse(430, 300, 170, 150);
    ellipse(515, 360, 170, 150);
    ellipse(270, 365, 170, 150);



    stroke('black');
    strokeWeight(1);
    fill('white');
    ellipse(337, 341, 30, 60); //eyes
    ellipse(435, 341, 30, 60);


    stroke('black');
    strokeWeight(2);
    fill('black');
    line(319, 427, 319, 545);
    line(479, 430, 479, 545);
    ellipse(343, 545, 60, 30);
    ellipse(507, 545, 60, 30);

    line(279, 244, 279, 153);
    line(475, 235, 478, 153);

    rect(262, 131, 230, 80);

    strokeWeight(10);
    line(335, 131, 335, 88);
    line(335, 88, 420, 88);
    line(420, 88, 420, 131);

    stroke('grey');
    fill('white');
    ellipse(315, 172, 40, 40);
    ellipse(438, 172, 40, 40);

    //line(184, 366, 110, 235);
    //line(601, 366, 666, 234);
    //line(652, 228, 678, 239);
    //line(699, 225, 678, 239);
    //line(649, 204, 651, 228);



    noFill()

    stroke("#ff61a9");
    strokeWeight(0.5);
    fill('pink');
    arc(410, 400, 100, 100, 0, radians(180), PIE); //mouth

    ellipse(300, 385, 20, 20);
    ellipse(475, 385, 20, 20);

    noStroke();
    fill('white');
    arc(415, 410, 70, 70, 0, radians(100), PIE); //mouth




    stroke('black'); //eye color outline
    strokeWeight(1);
    fill('#85cae1');
    ellipse(337, 355, 20, 30);
    ellipse(435, 355, 20, 30);


    noStroke();
    fill('black');
    ellipse(337, 363, 17, 15);
    ellipse(435, 363, 17, 15);





  }
  noStroke();
  fill('black');
  text(mouseX + "," + mouseY, 20, 20);
}

//function touchStarted() {
  //getAudioContext().resume();
//}
