var bubbles = [];
var img, img2;

function setup() {
  img = loadImage("assets/unnamed.png");
  img2 = loadImage("assets/dunkin.png");
  //img3 = loadImage("assets/versuss.jpg");

  // Tabletop stuff, for getting google spreadsheet data in.
  //  let url = '1GtE3eoYVWBv9zMPoyettXzDCEv6qdNGKio_hgEh5duM'; // this is KEY of the URL from the sheet
  let url = "1-Abv-kcEMt7i5dxHNC2W6UOCh2vh0YnDLRYTVqI9pMw"
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].Name, data[i].Coffee)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  background('#0b2212');



  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].drive();
  }

}


// my Bubble class
class Bubble {

  constructor(myName, myCoffee) {
    this.name = myName;
    this.coffee = myCoffee;
    this.pos = createVector(random(width), random(height));
    this.vel = random(1, 3);

  }


  display() {
    if (this.coffee == "Starbucks") {
      image(img, this.pos.x, this.pos.y, 80, 50);
    } else {
      image(img2, this.pos.x, this.pos.y, 50, 50);
    }
    //  ellipse(this.pos.x, this.pos.y, 80, 80);
    //text(this.coffee, this.pos.x, this.pos.y + 16);
    fill('white');
    text(this.name, this.pos.x, this.pos.y);
  }

  drive() {
    this.pos.x += this.vel;
    if (this.pos.x > width) this.pos.x = 0;
  }

}
