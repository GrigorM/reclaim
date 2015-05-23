var div;

function setup() {
  // put setup code here
  canvas = createCanvas(screen.width, 300);
  background(50, 50, 150);
  div = createDiv("Testing, testing, 1 2 3");
  div.position(0, 50);
  div.class('customDiv');
}

function draw() {
  // put drawing code here
}
