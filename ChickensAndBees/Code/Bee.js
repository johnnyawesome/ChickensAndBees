const beeSpriteSize = 16;
const beeSize = beeSpriteSize + 5;

class Bee {

  constructor() {
    this.x = Math.floor(random(width, width + 80));
    this.y = Math.floor(random(30, height - 30));
    this.speed = Math.round(random(1, 5));
    this.ySin = random(1, 100);
  }

  //Animate the Bee
  animate() {
    image(beeSprites[frameCount % beeSprites.length], this.x, this.y, beeSize, beeSize);
  }

  //Flight-Path of the bee
  //The bee always flies from right to left, but oscillates on it's Y-Axis
  fly() {

    //Fly Left
    this.x -= this.speed;

    //Oscillate Y-Axis
    const amp = 2;
    this.ySin += 0.1
    this.y += cos(this.ySin) * amp;
  }

  //If a Bee reached the left Edge of the Screen, it dies
  die() {
    if (this.x < -20) {
      for (const index in bees) if (bees[index].x < 0) bees.splice(index, 1);
    }
  }

  //When a Bee died, a new one will be born
  born() {
    if (bees.length < numberOfBees) bees.push(new Bee());
  }
}

//Fill Plant-Sprite-Array with Plants
function fillBeeSpriteArray() {
  for (let i = 0; i < 32; i += beeSpriteSize) {
    beeSprites.push(spriteSheetBee.get(i, 0, beeSpriteSize, beeSpriteSize));
  }
}

//Generate Plants
function generateBees() {
  if (bees.length < numberOfBees) bees.push(new Bee());
}
