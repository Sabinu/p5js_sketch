function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
  fill(255, 0, 0, 20);
  noStroke();
  r = random(50, 100)
  ellipse(mouseX, mouseY, r, r);
}

function mousePressed() {
  background(255);
}
