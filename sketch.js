function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
    fill(255, 0, 0, 20);
    noStroke();
    ellipse(mouseX, mouseY, 100, 100);
}

function mousePressed() {
  background(255);
}
