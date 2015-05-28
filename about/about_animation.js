
var rects = [];
var canvas;
function setup() {
  // put setup code here
  canvas = createCanvas(screen.width/2, screen.height-200);
  //canvas.position(screen.width/2, 0);
  canvas.parent('about_animation_block');
  background(255);
  //div = createDiv("Testing, testing, 1 2 3");
  //div.position();
  //div.class('customDiv');
  for(var i=0; i<13; i++){
	rects[i] = new Rect();
  }
}

function draw() {
  // put drawing code here
  background(255);
  for(var i=0; i<13; i++){
	rects[i].be();
  }  
  
}

function Rect() {
	this.width = random(100);
	this.height = this.width;
	this.x = random(width);
	this.y = random(height);
	this.opacity = random(100, 175);
	this.rot = random(TWO_PI);
	this.dieRate = int(random(1, 5));
	rectMode(CENTER);
	noFill();
	
	this.be = function(){
		stroke(0, this.opacity);
		push();
		translate(this.x, this.y);
		rotate(this.rot)
		rect(0, 0, this.width, this.height);
		pop();
		//alert('lalalalala');
		this.opacity-= this.dieRate;
		if(this.opacity < -10){
			this.width = random(100);
			this.height = this.width;
			this.width = random(width);
			this.height = random(height);
			this.opacity = random(100, 175);	
			this.rot = random(TWO_PI);			
		}
	}
}
