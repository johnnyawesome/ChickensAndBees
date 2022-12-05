//Draw Grass as Background
function drawGrassBackground() {

  const grassSpriteSize = 48;

  for (let i = 0; i < height; i += grassSpriteSize) {
    for (let j = 0; j < width; j += grassSpriteSize) {
      image(spriteSheetGrass, j, i, grassSpriteSize, grassSpriteSize);
    }
  }
}