/**
 * @callback GetState
 * @returns {State}
 */

/**
 * @callback Dispatch
 * @param {Action} action
 */

/**
 * @callback Subscription
 * @param {State} prev
 * @param {State} next 
 
 */

/**
 * @typedef {object} Position
 * @property {number} x
 * @property {number} y
 */

/**
 * @typedef { 'up' | 'down' | 'left' | 'right' } Direction
 */

/**
 * @typedef {Object} State
 * @property {Array<Position>} snake - The starting position of the snake.
 * @property {Position} food - The starting position of the food.
 * @property {boolean} gameStatus - If the game is running or not.
 * @property {number} gameSpeed - How quickly the snake moves.
 * @property {Direction} direction - The starting direction of the snake.
 * @property {number} score - The player's score.
 * @property {number} gridSize - The size of the game board.
 */
export const State = {};

/**
 * @type {Array<Subscription>}
 */
let subscribers = [];

/**
 * @type {Array<State>}
 */
export const state = [
  {
    snake: undefined,
    food: undefined,
    gameStatus: false,
    gameSpeed: 200,
    direction: "right",
    score: 0,
    gridSize: 20,
  },
];

/**
 * @returns {State}
 */
const getState = () => {
  return Object.freeze({ ...state[0] });
};

/**
 * @param {Action} action
 */
const dispatch = (action) => {
  const prev = getState();
  const next = reducer(prev, action);

  subscribers.forEach((item) => item(prev, next));
};
