function setup() {
    createCanvas(600, 600);
  background ("white");
  }
  
  function draw() {  
    stroke(color(random(0,255), random(0,255), random(0,255)));
    fill(color(random(0,255), random(0,255), random(0,255)));
  
    if(mouseIsPressed) {
    rect(mouseX, mouseY,20,35);
    }
  }