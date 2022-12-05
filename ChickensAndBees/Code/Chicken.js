//Size of the Sprites
const chickenSpriteSize = 32;

class Chicken {

  constructor() {

    this.name = Math.random().toString(36).substring(2, 7);
    this.x = Math.floor(random(0, width - chickenSize * 2));
    this.y = Math.floor(random(0, height - chickenSize * 2));
    this.direction = random(["up", "down", "left", "right"]);
    this.speed = Math.floor(random(4, 9));
    this.directionCount = 0; //Countdown between Direction-Changes
    this.standing = false;
    this.standingCount = random(3, 10); //Countdown between Stance-Changes
    this.eating = false;
  }

  //Walking in all 4 directions
  walk() {
    if (this.standing === false) {
      if (this.direction === "right") {
        this.x += this.speed;
      } else if (this.direction === "left") {
        this.x -= this.speed;
      } else if (this.direction === "up") {
        this.y -= this.speed;
      } else if (this.direction === "down") {
        this.y += this.speed;
      }
    }
  }

  //If close to an edge, turn around
  edges() {
    if (this.direction === "right" && this.x >= width - (chickenSize * 2)) this.direction = "left";
    if (this.direction === "left" && this.x <= 0 + (chickenSize * 2)) this.direction = "right";
    if (this.direction === "up" && this.y <= 0 + (chickenSize)) this.direction = "down";
    if (this.direction === "down" && this.y >= height - (chickenSize * 2)) this.direction = "up";
  }

  //Run the Sprite-Animation
  animate() {
    if (this.standing === false) {
      if (this.direction === "right") image(walkRight[frameCount % walkRight.length], this.x, this.y, chickenSize, chickenSize);
      if (this.direction === "left") image(walkLeft[frameCount % walkLeft.length], this.x, this.y, chickenSize, chickenSize);
      if (this.direction === "up") image(walkUp[frameCount % walkUp.length], this.x, this.y, chickenSize, chickenSize);
      if (this.direction === "down") image(walkDown[frameCount % walkDown.length], this.x, this.y, chickenSize, chickenSize);
    } else {
      if (this.direction === "right") image(walkRight[0], this.x, this.y, chickenSize, chickenSize);
      if (this.direction === "left") image(walkLeft[0], this.x, this.y, chickenSize, chickenSize);
      if (this.direction === "up") image(walkUp[0], this.x, this.y, chickenSize, chickenSize);
      if (this.direction === "down") image(walkDown[0], this.x, this.y, chickenSize, chickenSize);
    }
  }

  //Change Walking-Direction
  changeDirection() {

    if (this.findFoodDirection()) this.direction = this.findFoodDirection();
  }

  //Find closest Food
  findAndReserveClosestFood() {

    //If there is reserved Food, return that
    for (let crop of food) if (crop.reserved === this.name) return crop;

    //Filter food[] for food that hasn't been reserved yet
    const notReservedFood = food.filter(f => !f.reserved);

    //Find closest Food
    const closestFood = notReservedFood.reduce((last, current) => dist(this.x, this.y, current.x, current.y) <= dist(this.x, this.y, last.x, last.y) ? current : last);

    //Reserve the closest Food
    for (let crop of food) if (crop.x === closestFood.x && crop.y === closestFood.y) crop.reserved = this.name;

    return closestFood;

  }

  deleteClosestFood() {
    let closestFood = this.findAndReserveClosestFood()
    for (const index in food) if (closestFood.x === food[index].x && closestFood.y === food[index].y) food.splice(index, 1)
  }

  //Change direction to closest Food
  findFoodDirection() {

    const closestFood = this.findAndReserveClosestFood();

    const distanceX = this.x - closestFood.x;
    const distanceY = this.y - closestFood.y;

    if (distanceY > 0 && abs(distanceY) > this.speed) {
      return "up";
    } else if (distanceY < 0 && abs(distanceY) > this.speed) {
      return "down";
    } else if (distanceX < 0 && abs(distanceX) > this.speed + chickenSpriteSize) {
      return "right";
    } else if (distanceX > 0 && abs(distanceX) > this.speed - chickenSpriteSize / 2) {
      return "left";
    } else if (abs(distanceX) <= this.speed + chickenSpriteSize
      && abs(distanceY) <= this.speed) {
      this.standing = true;
      this.eating = true;
    }
  }

  handleStanding() {

    //Randomly stand still
    if (random(0, 40) > 39) this.standing = true;

    //Decrease standing-Countdown
    if (this.standing) this.standingCount--;

    if (this.standing && this.standingCount <= 0) {
      this.standing = false;
      this.standingCount = random(30, 40);
      if (this.eating) {
        this.eating = false;
        this.deleteClosestFood();
        food.push(new Food());
      }
    }
  }

  eat() {
    if (this.standing) {
      if (this.direction === "right") image(eatRight[frameCount % eatRight.length], this.x, this.y, chickenSize, chickenSize);
      if (this.direction === "left") image(eatLeft[frameCount % eatLeft.length], this.x, this.y, chickenSize, chickenSize);
      if (this.direction === "up") image(eatUp[frameCount % eatUp.length], this.x, this.y, chickenSize, chickenSize);
      if (this.direction === "down") image(eatDown[frameCount % eatDown.length], this.x, this.y, chickenSize, chickenSize);
    }
  }

  stand() {
    if (this.standing) {
      if (this.direction === "right") image(walkRight[0], this.x, this.y, chickenSize, chickenSize);
      if (this.direction === "left") image(walkLeft[0], this.x, this.y, chickenSize, chickenSize);
      if (this.direction === "up") image(walkUp[0], this.x, this.y, chickenSize, chickenSize);
      if (this.direction === "down") image(walkDown[0], this.x, this.y, chickenSize, chickenSize);
    }
  }
}


//Fill Chicken Sprite-Arrays with Frames
function fillChickenSpriteArray() {
  //Chicken Walking
  for (let i = 0; i <= 96; i += chickenSpriteSize)  walkLeft.push(spriteSheetWalk.get(i, chickenSpriteSize, chickenSpriteSize, chickenSpriteSize));
  for (let i = 0; i <= 96; i += chickenSpriteSize)  walkRight.push(spriteSheetWalk.get(i, 96, chickenSpriteSize, chickenSpriteSize));
  for (let i = 0; i <= 96; i += chickenSpriteSize)  walkUp.push(spriteSheetWalk.get(i, 0, chickenSpriteSize, chickenSpriteSize));
  for (let i = 0; i <= 96; i += chickenSpriteSize)  walkDown.push(spriteSheetWalk.get(i, 64, chickenSpriteSize, chickenSpriteSize));
  //Chicken Eating
  for (let i = 0; i <= 96; i += chickenSpriteSize)  eatLeft.push(spriteSheetEat.get(i, chickenSpriteSize, chickenSpriteSize, chickenSpriteSize));
  for (let i = 0; i <= 96; i += chickenSpriteSize)  eatRight.push(spriteSheetEat.get(i, 96, chickenSpriteSize, chickenSpriteSize));
  for (let i = 0; i <= 96; i += chickenSpriteSize)  eatUp.push(spriteSheetEat.get(i, 0, chickenSpriteSize, chickenSpriteSize));
  for (let i = 0; i <= 96; i += chickenSpriteSize)  eatDown.push(spriteSheetEat.get(i, 64, chickenSpriteSize, chickenSpriteSize));
}

//Generate Chickens
function generateChickens() {
  for (let i = 0; i < numberOfChickens; i++) chickens.push(new Chicken());
}