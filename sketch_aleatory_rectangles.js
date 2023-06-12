let rectangles = [];

function setup() {
  createCanvas(800, 400);

  // Create multiple rectangles with random properties
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let rectWidth = random(50, 150);
    let rectHeight = random(50, 150);
    let fillColor = color(random(255), random(255), random(255));
    let strokeColor = color(random(255), random(255), random(255));
    let strokeWeight = random(1, 5);
    let angle = random(TWO_PI); // Random initial rotation angle
    let rotationSpeed = random(-0.05, 0.05); // Random rotation speed

    let rectangle = new Rectangle(x, y, rectWidth, rectHeight, fillColor, strokeColor, strokeWeight, angle, rotationSpeed);
    rectangles.push(rectangle);
  }
}

function draw() {
  background(220);

  for (let i = 0; i < rectangles.length; i++) {
    rectangles[i].update();
    rectangles[i].draw();
  }
}

class Rectangle {
  constructor(x, y, width, height, fillColor, strokeColor, strokeWeight, angle, rotationSpeed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.fillColor = fillColor;
    this.strokeColor = strokeColor;
    this.strokeWeight = strokeWeight;
    this.angle = angle;
    this.rotationSpeed = rotationSpeed;
  }

  update() {
    this.angle += this.rotationSpeed;
  }

  draw() {
    push();
    translate(this.x + this.width / 2, this.y + this.height / 2);
    rotate(this.angle);
    fill(this.fillColor);
    stroke(this.strokeColor);
    strokeWeight(this.strokeWeight);
    rect(-this.width / 2, -this.height / 2, this.width, this.height);
    pop();
  }
}
