//Size of Food-Sprite
const foodSpriteSize = 32;

class Food {

  constructor() {
    this.x = Math.floor(random(30, width - 60));
    this.y = Math.floor(random(30, height - 60));
    this.cropSpecies = Math.floor(random(0, foodSprites.length));
    this.reserved = null;
  }

  display() {
    image(foodSprites[this.cropSpecies], this.x, this.y + 22, foodSpriteSize, foodSpriteSize);
  }
}

//Fill Food-Sprite Array with Food
function fillFoodSpriteArray() {
  for (let i = 0; i < 150; i += 30) foodSprites.push(spriteSheetFood.get(65, i, foodSpriteSize, foodSpriteSize));
}

//Generate Food
function generateFood() {
  for (let i = 0; i <= numberOfFood; i++) food.push(new Food());
}