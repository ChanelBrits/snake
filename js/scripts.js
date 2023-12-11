import {
  generateFood,
  createGameElement,
  setPosition,
  directionMap,
  keyMap,
} from "./helpers.js";

const board = document.getElementById("game-board");
const instructionText = document.getElementById("instruction-text");
const logo = document.getElementById("logo");

const gridSize = 20;

let snake = [{ x: 10, y: 10 }];
let food = generateFood(gridSize);
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
};

/**
 * Draws the snake on the game board by creating and positioning its segments.
 */
const drawSnake = () => {
  for (const segment of snake) {
    const snakeElement = createGameElement("div", "snake");
    setPosition(snakeElement, segment);
    board.appendChild(snakeElement);
  }
};

/**
 * Draws the food on the game board by creating and positioning the food element.
 */
const drawFood = () => {
  const foodElement = createGameElement("div", "food");
  setPosition(foodElement, food);
  board.appendChild(foodElement);
};

const move = () => {
  const head = { ...snake[0] };
  const changeDirection = directionMap[direction];

  head.x += changeDirection.x;
  head.y += changeDirection.y;

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    food = generateFood(gridSize);
    increaseSpeed();
    clearInterval(gameInterval);

    gameInterval = setInterval(() => {
      move();
      /* checkCollision(); */
      draw();
    }, gameSpeedDelay);
  } else {
    snake.pop();
  }
};

const startGame = () => {
  gameStarted = true;
  instructionText.style.display = "none";
  logo.style.display = "none";

  gameInterval = setInterval(() => {
    move();
    /* checkCollision(); */
    draw();
  }, gameSpeedDelay);
};

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

const increaseSpeed = () => {
  if (gameSpeedDelay > 150) {
    gameSpeedDelay -= 5;
  }
};

// draw();
// setInterval(() => {
//   move();
//   draw();
// }, 200);
