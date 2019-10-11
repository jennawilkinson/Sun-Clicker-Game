class Item extends Sprite {
  constructor(n, e) {
    super(Math.random() * width, Math.random() * height, "#faff00")
    this.width = 15
    this.height = 15
    this.name = n
    this.effect = e
    this.vx = -this.SPEED;
    this.vy = -this.SPEED;
  }
}