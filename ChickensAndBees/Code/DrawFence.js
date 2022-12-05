//Draw the Fence
function drawFence() {

  const horizontalFenceWidth = 65
  const verticalFenceHeight = 100

  //Upper, horizontal Row
  for (let i = 0; i < width; i += horizontalFenceWidth) image(fenceHorizontal, i, 15, horizontalFenceWidth, 30);
  //Left vertical column
  for (let i = 14; i < height - verticalFenceHeight; i += verticalFenceHeight) image(fenceVertical, 0, i, 0, verticalFenceHeight);
  //Right vertical column
  for (let i = 14; i < height - verticalFenceHeight; i += verticalFenceHeight) image(fenceVertical, width - 20, i, 0, verticalFenceHeight);
  //Bottom, horizontal Row
  for (let i = 0; i < width; i += horizontalFenceWidth) image(fenceHorizontal, i, height - 45, horizontalFenceWidth, 30);
}