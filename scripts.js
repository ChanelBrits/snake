import {
  generateFood,
  createGameElement,
  setPosition,
  directionMap,
  keyMap,
  increaseSpeed,
} from "./modules/helpers.js";

const board = document.getElementById("game-board");
const instructionText = document.getElementById("instruction-text");
const logo = document.getElementById("logo");
const score = document.getElementById("score");
const highScoreText = document.getElementById("high-score");

const gridSize = 20;

let snake = [{ x: 10, y: 10 }];
let food = generateFood(gridSize);
let highScore = 0;
let direction = "right";
let gameInterval;
let gameSpeedDelay = 200;
let gameStarted = false;

/**
 *  Draws the game map and determines where the snake and food will be placed.
 */
const draw = () => {
  board.innerHTML = "";
  drawSnake();
  drawFood();
  updateScore();
};

// /**
//  * Draws the snake on the game board by creating and positioning its segments.
//  */
// const drawSnake = () => {
//   for (const segment of snake) {
//     const snakeElement = createGameElement("div", "snake");
//     setPosition(snakeElement, segment);
//     board.appendChild(snakeElement);
//   }
// };

// const updateScore = () => {
//   const currentScore = snake.length - 1;

//   score.textContent = currentScore.toString().padStart(3, "0");
// };

// const updateHighScore = () => {
//   const currentScore = snake.length - 1;

//   if (currentScore > highScore) {
//     highScore = currentScore;
//     highScoreText.textContent = highScore.toString().padStart(3, "0");
//   }
//   highScoreText.style.display = "block";
// }

/**
 * Draws the food on the game board by creating and positioning the food element.
 */
const drawFood = () => {
  const foodElement = createGameElement("div", "food");
  setPosition(foodElement, food);
  board.appendChild(foodElement);
};

// const stopGame = () => {
//   console.log("stopping game");
//   clearInterval(gameInterval);
//   gameStarted = false;

//   instructionText.style.display = "block";
//   logo.style.display = "block";
// };

// const resetGame = () => {
//   updateHighScore();
//   stopGame();
//   updateScore();

//   snake = [{ x: 10, y: 10 }];
//   food = generateFood(gridSize);
//   direction = "right";
//   gameSpeedDelay = 200;
// };

// const checkCollision = () => {
//   const head = snake[0];

//   if (head.x < 1 || head.x > gridSize || head.y < 1 || head.y > gridSize) {
//     resetGame();
//   }

//   for (const segment of snake.slice(1)) {
//     if (head.x === segment.x && head.y === segment.y) {
//       resetGame();
//       break;
//     }
//   }
// };

const handleFoodEating = () => {
  food = generateFood(gridSize);
  gameSpeedDelay = increaseSpeed(gameSpeedDelay);
  clearInterval(gameInterval);

  gameInterval = setInterval(() => {
    move();
    checkCollision();
    draw();
  }, gameSpeedDelay);
};

// const move = () => {
//   const head = { ...snake[0] };
//   const changeDirection = directionMap[direction];

//   head.x += changeDirection.x;
//   head.y += changeDirection.y;

//   snake.unshift(head);

//   if (head.x === food.x && head.y === food.y) {
//     handleFoodEating();
//   } else {
//     snake.pop();
//   }
// };

// const startGame = () => {
//   gameStarted = true;
//   instructionText.style.visibility = "hidden";
//   logo.style.visibility = "hidden";

//   gameInterval = setInterval(() => {
//     move();
//     checkCollision();
//     draw();
//   }, gameSpeedDelay);
// };

const handleDirectionKey = (pressedKey) => {
  const newDirection = keyMap[pressedKey];

  if (newDirection) {
    direction = newDirection;
  }
};

const handleKeyPress = (event) => {
  const pressedKey = event.code || event.key;

  if (pressedKey === "Space") {
    startGame();
  } else {
    handleDirectionKey(pressedKey);
  }
};

document.addEventListener("keydown", handleKeyPress);

// draw();
// setInterval(() => {
//   move();
//   draw();
// }, 200);
