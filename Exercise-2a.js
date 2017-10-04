var circle = {
  x: 100, 
  y: 100,
  vx: 3,
  vy: 4,
  r: 10,
h:300
};
 
var circle2 = {
  x: 120, 
  y: 160,
  vx: 3,
  vy: 4,
  r: 10,
h:300
};
 
var circle3={
x:140,
y:220,
vx:3,
vy:4,
r:10,
h:300
};
 

function setup() {
  createCanvas(400, 400);
	colorMode(HSB);
  circle.h=random(234)
	circle2.h=random(244)
	circle3.h=random(100)
	
}

function draw() {
  background(255);

  
  paint(circle);
  paint(circle2);
	paint(circle3);
  
  move(circle);
  move(circle2);
  move(circle3);
	
  bounce(circle);
  bounce(circle2);
	bounce(circle3);
}

function paint(circle) {
	fill(circle.h, circle.h,circle.h)

  ellipse(circle.x, circle.y, circle.r*2, circle.r*2);
}

function move(circle) {
  circle.x += circle.vx; // circle.x = circle.x + circle.vx
  circle.y += circle.vy;
}

function bounce(circle) {
  if (circle.x > width || circle.x < 0) {
    circle.vx = - circle.vx;
  }
  if (circle.y > height || circle.y < 0) {
    circle.vy = - circle.vy;
  }
}
