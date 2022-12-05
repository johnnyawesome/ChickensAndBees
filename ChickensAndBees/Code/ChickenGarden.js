/// <reference path="../TSDef/p5.global-mode.d.ts" />

"use strict";

//################ Chicken ################

//Image-Files
let spriteSheetWalk;
let spriteSheetEat;
let spriteSheetGrass;
let spriteSheetPlants;
let spriteSheetFood;
let spriteSheetFence;
let spriteSheetBee;

//Arrays containing Chicken Sprite-Frames
let walkRight = [];
let walkLeft = [];
let walkUp = [];
let walkDown = [];
let eatRight = [];
let eatLeft = [];
let eatUp = [];
let eatDown = [];

//Array containing individual Chickens
let chickens = [];

//Size of the chicken that will be displayed (scaled) - This is NOT the Chicken's Sprite-Size!!
const chickenSize = 48;

//How many Chickens we have
const numberOfChickens = 5;

//################ Bee ################

//Array containing Bee-Sprites
let beeSprites = [];
//Array containing individual Bees
let bees = []
//How many Bees should fly around
const numberOfBees = 8;

//################ Plants ################

//Array containing Plant-Sprites
let plantSprites = [];
//Array containing individual Plants
let plants = [];

//################ Food ################

//Array containing Food-Sprites
let foodSprites = [];
//Array containing individual Food
let food = [];
//How much Food we have (We'll scale it with Chickens + 2, so there's always enough Food)
const numberOfFood = numberOfChickens + 2;

//################ Fence ################

//Fences
let fenceHorizontal = null;
let fenceVertical = null;



//Load all Images before running Code
function preload() {
  spriteSheetWalk = loadImage("../Sprites/chicken_walk.png");
  spriteSheetEat = loadImage("../Sprites/chicken_eat.png");
  spriteSheetBee = loadImage("../Sprites/bee.png");
  spriteSheetGrass = loadImage("../Sprites/grass.png");
  spriteSheetPlants = loadImage("../Sprites/plants.png");
  spriteSheetFood = loadImage("../Sprites/cereals.png");
  spriteSheetFence = loadImage("../Sprites/fence.png");
}

function setup() {
  //angleMode(DEGREES);
  createCanvas(650, 650, P2D);
  stroke(0, 255, 0);
  noFill();
  frameRate(8);

  //Draw Grass as Background
  drawGrassBackground();

  //Fill Chicken-Sprite-Array with individual Plants
  fillChickenSpriteArray();
  //Generate Chickens
  generateChickens();

  //Fill Bee-Sprite-Array with individual Bee Images
  fillBeeSpriteArray();
  //Generate Bees
  generateBees();

  //Fill Plant-Sprite-Array with individual Plants
  fillPlantSpriteArray();
  //Generate Plants
  generatePlants();

  //Fill Food-Sprite Array with Food
  fillFoodSpriteArray();
  //Generate Food
  generateFood();

  //Fill Fence-Sprite Variables
  fenceHorizontal = spriteSheetFence.get(0, 35, 65, 30);
  fenceVertical = spriteSheetFence.get(70, 0, 100, 95);
}

function draw() {

  //Draw Grass as Background
  drawGrassBackground();

  //Display Food
  for (const cereal of food) cereal.display();

  //Display Plants
  for (const plant of plants) plant.display();

  //Draw the Fence
  drawFence();

  //Display Chickens
  for (const chicken of chickens) {
    chicken.walk();
    if (chicken.standing && !chicken.eating) chicken.stand();
    if (chicken.eating) chicken.eat();
    if (!chicken.standing) chicken.animate();
    chicken.edges();
    chicken.handleStanding();
    chicken.changeDirection();
  }

  for (const bee of bees) {
    bee.animate();
    bee.fly();
    bee.die();
    bee.born();
  }
}




