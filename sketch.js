var seed = 0;

function setup() {
  createCanvas(500, 500);
  circleX = 50;
  randomSeed(seed);
  noStroke();
}

function draw() {
    // console.log(x);
    // background(0);

}

function mousePressed() {
  seed += 100;
  for (i = 0; i < width; i++) {
    for (j = 0; j < height; j++) {
      fill(random(256));
      rect(i, j, 1, 1);
    }
  }
}
