let sprites = []
let items = []
let items2 = []
let score = 0;

let sun = {
  x: 200,
  y: 200,
  width: 250 
}

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 12; i++) {
    let item = new Item("potion", Math.random() * 5 )
    sprites.push(item)
    sprites.push(item)
  }
  for (let i = 0; i < 12; i++) {
    let item2 = new Item2("potion", Math.random() * 5 )
    sprites.push(item2)
    sprites.push(item2)
  }
}

function draw() {
  fill("yellow")
  background(202, 220, 250);
  sprites.filter(sprite => sprite.active).forEach(sprite => {
    sprite.update()
    sprite.draw()
  })  
  checkCollisions()
  
  if (mouseIsPressed && dist(sun.x, sun.y, mouseX, mouseY) <= sun.width/2) {
    fill("yellow")
    ellipse(200, 200, 230, 230)
  }
  else {
    fill("yellow")
    ellipse(sun.x, sun.y, sun.width, sun.width) 
  }
  fill("black")
  textSize(25)
  text("Score: " + score, 10, 30)
}

function mouseClicked() {
  if (dist(sun.x, sun.y, mouseX, mouseY) <= sun.width/2){
    score++
  }
}

function checkCollisions() {
  for(let i = 0; i < items.length; i++) {
    let item = items[i]
  }
}