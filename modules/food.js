import { state } from "./state.js";

const createFood = () => {
  const { gridSize } = { ...state };

  /**
   * @param {number} gridSize
   * @returns {{x: number, y: number}}
   */
  const generateFood = (gridSize) => {
    const x = Math.floor(Math.random() * gridSize) + 1;
    const y = Math.floor(Math.random() * gridSize) + 1;
    return { x, y };
  };
};
