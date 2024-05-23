function setup() {
  createCanvas(800, 500);
  background("blue");
}

function draw() {
  fill("darkblue");
  stroke("lightblue");
  if(mouseIsPressed)
    circle(mouseX, mouseY, 30, 50);
}
