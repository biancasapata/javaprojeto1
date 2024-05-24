function setup() {
  createCanvas(1000, 800);
  background("blue");
}

function draw() {
  fill("darkblue");
  stroke("lightblue");
  if(mouseIsPressed)
    circle(mouseX, mouseY, 30, 50);
}
