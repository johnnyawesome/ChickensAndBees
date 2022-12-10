# 🐔Chickens and Bees🐝
A bunch of Chickens - They look for Food and eat it when they find some. And there are Bees! Written in P5JS.

![ChickensAndBees](https://github.com/johnnyawesome/ChickensAndBees/blob/main/ChickensAndBees/DemoImages/ChickensAndBees.gif?raw=true)

## Copyright & Attribuition

**Chicken**: Author: [daneeklu](https://opengameart.org/node/11629) License: [GPL 2.0](https://creativecommons.org/licenses/by/3.0/) and [CC-BY 3.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html) /
**Bee**: Author: [ChickenTeddy](https://opengameart.org/content/16x16-pigeon-shrimp-bee-snail-pack) License: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) /
**Grass**: Author: [Invincible](https://opengameart.org/content/grass-tiles-0) License: [CC0](https://creativecommons.org/publicdomain/zero/1.0/) /
**Fence**: Author: [William.Thompsonj](https://opengameart.org/content/16x16-fence-and-well-tiny-16) License: [CC0](https://creativecommons.org/publicdomain/zero/1.0/) /
**Flowers**: Author: [vassago-labs](https://vassago-labs.itch.io/just-a-few-flowers) License: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) /
**Grain / Cereal**: Author: [ScratchIO](https://opengameart.org/content/2d-cereals) License: [CC0](https://creativecommons.org/publicdomain/zero/1.0/)

## About the Project

The Code is written in [P5JS](https://p5js.org/). I also coded a [Squirrel that lives in the Forest](https://github.com/johnnyawesome/Squirrel) and searches for Acorns, using the [P5.Play-Library](https://p5play.org/) which in turn uses the [Planck Physics Engine](https://piqnt.com/planck.js/).

## Initialization

- Generate a Background out of Grass-Tiles
- Generate a number of Chickens (You can change "numberOfChickens" to get more / less Chickens)
- Generate a number of Bees (You can change "numberOfBees" to get more / less Bees)
- Generate a random Pattern of Plants / Flowers
- Generate Food-Piles at random Places
- Draws the Fence

## 🐔The Chickens🐔

- The Chickens will search for Food
- When they find Food, they'll eat it
- When the current Food is gone, the Chicken will search for more Food
- Sometimes a Chicken will take a short break, standing still, to be more natural-looking

## 🐝The Bees🐝
- The Bees fly all over the screen, from right to left 🐝
- Bees fly at random Speeds on their X-Axis. Some are slower, some are faster
- To look more natural, the Bees oscillate on their Y-Axis
- When a bee hits the left edge of the Screen, it dies
- A new Bee is generated in it's place

## 🌾The Food🌾

- Food will spawn in random Locations
- When a Food-Pile is eaten, a new Food-Pile will spawn at a new random Location
