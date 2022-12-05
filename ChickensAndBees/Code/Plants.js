//Size of Plant-Sprite
const plantSpriteSize = 32;

//Plant-Class
class Plant {

  constructor() {
    this.x = Math.floor(random(25, width - 30));
    this.y = Math.floor(random(30, height - 30));
    this.flower = Math.floor(random(0, plantSprites.length));
  }

  display() {
    image(plantSprites[this.flower], this.x, this.y, plantSpriteSize, plantSpriteSize);
  }
}

//Fill Plant-Sprite-Array with Plants
function fillPlantSpriteArray() {
  for (let i = 0; i < 256; i += plantSpriteSize) {
    for (let j = 0; j < 256; j += plantSpriteSize) {
      plantSprites.push(spriteSheetPlants.get(j, i, plantSpriteSize, plantSpriteSize));
    }
  }
}

//Generate Plants
function generatePlants() {

  for (let i = 0; i <= Math.round(random(50, 60)); i++) plants.push(new Plant());
}