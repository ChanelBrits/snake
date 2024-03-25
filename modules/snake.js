import { setPosition, createGameElement, drawGameElements } from "./helpers.js";
import { state, State } from "./state.js";

export const createSnake = () => {
  const directionMap = {
    up: { x: 0, y: -1 },
    down: { x: 0, y: 1 },
    left: { x: -1, y: 0 },
    right: { x: 1, y: 0 },
  };

  /**
   * Draws the snake on the game board by creating and positioning its segments.
   * @param {HTMLElement} board
   */
  const drawSnake = (board) => {
    drawGameElements(board, state.snake);
  };

  return { drawSnake };
};
