let balloons = []
let osc

function setup() {
  createCanvas(windowWidth, windowHeight);

  osc = new p5.Oscillator();
  osc.setType('saw');
  // osc.amp(0);
}

function draw() {
  background(0);
  for(let i=0; i<balloons.length; i++) {
    balloons[i].tick();
  }
}

function mousePressed() {
  let b = new Balloon();
  balloons.push(b);
  // print(balloons);
}
