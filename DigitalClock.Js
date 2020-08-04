var clockX = 100;
var clockY = 200;

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  drawClockBase()
  clock()
}

function drawClockBase() {
fill(0);
rect(clockX,clockY,900,400,50);
fill(160,160,160);
rect(clockX + 45,clockY + 50,800,300,10);
textSize(30);
noStroke();
text("Zion's Virtual Clock",clockX + 315,clockY + 380);
}

function clock() {
fill(160,95,255);
textSize(120);
stroke(0);
strokeWeight(10);
  var Hour = hour();
  var min = minute();
  var secs = second()
  var noon = Hour >= 12? " PM" : " AM"
  if(min < 10)
    min = "0"+min
  Hour%=12
  text(Hour+":"+min+":"+secs+noon, clockX + 100, clockY + 240); 
}
