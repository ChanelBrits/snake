const board = document.getElementById("game-board");

const gridSize = 20;

const generateFood = () => {
  const x = Math.floor(Math.random() * gridSize) + 1;
  const y = Math.floor(Math.random() * gridSize) + 1;
  return { x, y };
};

let snake = [{ x: 10, y: 10 }];
let food = generateFood();

/**
 *  Draws the game map and determines where the snake and food will be placed.
 */
const draw = () => {
  board.innerHTML = "";
  drawSnake();
  drawFood();
};

const drawSnake = () => {
  for (const segment of snake) {
    const snakeElement = createGameElement("div", "snake");
    setPosition(snakeElement, segment);
    board.appendChild(snakeElement);
  }
};

/**
 * Creates a snake segment or a food cube
 *
 * @param {string} tag
 * @param {string} className
 */
const createGameElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

/**
 * Changes the style of the game element by moving it around the grid
 *
 * @param {HTMLElement} element
 * @param {number} position
 */
const setPosition = (element, position) => {
  element.style.gridColumn = position.x;
  element.style.gridRow = position.y;
};

const drawFood = () => {
  const foodElement = createGameElement("div", "food");
  setPosition(foodElement, food);
  board.appendChild(foodElement);
};

draw();
