// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0;
var temperature = 0;
var pressure = 0;
var img;
var f;

function setup() {
  createCanvas(800, 800);
  img = loadImage("assets/weatheralert.jpg");
  // HERE is the call to get the weather.
  f = loadFont("assets/cursive.ttf");
  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Chatham,IL,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=1679480a2e83ea7829885e3c83f45f78'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  pressure = weather.main.pressure;


}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background('white');
      image(img, 100, 100, 600, 600); //picture
      fill('black');
      textFont("f");
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("Windspeed is " + windspeed, 20, 40);
      text("Temperature is " + temperature, 20, 60);
      text("Pressure is " + pressure, 20, 80);


      // cloud
      fill('white');
      noStroke();
      ellipse(x, 300, 200, 100);

      // move the cloud's x position
      x = x + windspeed;
      if (x > width) x = 0;

      //thermometer
      fill('red');
      rect(650, 600, 20, -400);
      fill('blue');
      rect(650, 600, 20, -200);
      fill('white');
      ellipse(660, 600, 50, 50);
      fill('black');
      rect(650, 420, 20, 20);
      text("50", 580, 500, 30, 30);
      text("Degrees", 600, 500, 30, 30);


      break;

  }
  //  noStroke();
  //fill('black');
  //text(mouseX + "," + mouseY, 200, 200);
}
