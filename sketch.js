/***********************************************************************************
  FUN GAME
  by Jiaquan Wu
  
  -------------------------------------------------------------------------------
  DESCRIPTION:
    This is a test function build by timer and clickable asset.
***********************************************************************************/
var newTimer;
var check = false;

function setup() {
  newTimer = new Timer(1000);
  Count = new Timer(10000);
  createCanvas(1000,1000);

  button = new Clickable();
  button.text = "Catch me!";
  button.textSize = 17;
  button.color = "#FF34B3";

  button.onPress = state2;
  Count.start();
}

function draw() {
  if (Count.expired()) Count.start();
  else state1();
}

function state1() {
  background(0);
  if (newTimer.expired()) {
    newTimer.start();
    button.locate(random(0,width/2),random(0,height/2));
  }
  button.draw();
}

function state2() {
  check = true;
  Count.setTimer(0);
  background(255);
  textSize(25);
  textAlign(CENTER);
  text("You Got me! :)", width/2, height/2);
}