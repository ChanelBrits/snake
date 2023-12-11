/**
 * Generates random coordinates for the food within the grid.
 * @param {number} gridSize
 *
 * @returns {{x: number, y: number}} Randomly generated coordinates for the food.
 */
export const generateFood = (gridSize) => {
  const x = Math.floor(Math.random() * gridSize) + 1;
  const y = Math.floor(Math.random() * gridSize) + 1;
  return { x, y };
};

/**
 * Creates a game element with a specified tag and class.
 *
 * @param {string} tag
 * @param {string} className
 * @returns {HTMLElement}
 */
export const createGameElement = (tag, className) => {
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
export const setPosition = (element, position) => {
  element.style.gridColumn = position.x;
  element.style.gridRow = position.y;
};

export const directionMap = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};

export const keyMap = {
  Space: "start",
  ArrowUp: "up",
  ArrowDown: "down",
  ArrowLeft: "left",
  ArrowRight: "right",
};

const increaseSpeed = () => {};
