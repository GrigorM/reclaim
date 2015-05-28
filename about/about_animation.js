var div;
var canvas;
function setup() {
  // put setup code here
  canvas = createCanvas(screen.width/2, screen.height);
  canvas.position(0, 0);
  background(255);
  div = createDiv("Testing, testing, 1 2 3");
  div.position(screen.width/2, 50);
  div.class('customDiv');
}

function draw() {
  // put drawing code here
}
