class Sprite {
  constructor(x, y, c) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.width = 50;
    this.height = 50;
    this.color = c;
    this.SPEED = .5
    this.active = true
  }
  draw() {
    fill(this.color);
    ellipse(this.x, this.y, this.width, this.height)
  }
  die() {
    this.active = false;
  }
  move(dx, dy) {
    this.vx = dx * this.SPEED
    this.vy = dy * this.SPEED
  }
  update() {
    if (this.x <= 0 || this.x >= 400) {
      this.vx = -this.vx
    }
    if (this.y <= 0 || this.y >= 400) {
      this.vy = -this.vy
    }
    this.x += this.vx
    this.y += this.vy
  }
  stop() {
    this.vx = 0
    this.vy = 0
  }
}