import { state } from "./state.js";
import { move } from "./helpers.js";

const createGame = () => {
  const elements = {
    board: document.getElementById("game-board"),
    instructionText: document.getElementById("instruction-text"),
    logo: document.getElementById("logo"),
    score: document.getElementById("score"),
    highScoreText: document.getElementById("high-score"),
  };

  const startGame = () => {
    const updatedState = { ...state, gameStatus: true };
    elements.instructionText.style.display = "none";
    elements.logo.style.display = "none";

    const gameInterval = setInterval(() => {
      move();
    }, state.gameSpeed);
  };

  const stopGame = () => {
    clearInterval(state.gameSpeed);
    state.gameStarted = false;

    elements.instructionText.style.display = "block";
    elements.logo.style.display = "block";
  };

  const calculateScore = () => {
    const currentScore = state.snake.length - 1;
    return currentScore;
  };

  const updateScore = () => {
    elements.score.textContent = calculateScore().toString().padStart(3, "0");
  };

  const updateHighScore = () => {
    const currentScore = calculateScore();

    if (currentScore > state.highScore) {
      const updatedState = { ...state, highScore: currentScore };
      elements.highScoreText.textContent = currentScore
        .toString()
        .padStart(3, "0");
    }

    elements.highScoreText.style.display = "block";
  };

  const resetGame = () => {
    updateHighScore();
    stopGame();
    updateScore();

    const updatedState = {
      ...state,
      snake: [{ x: 10, y: 10 }],
      food: { x: 5, y: 5 },
      direction: "right",
      gameSpeed: 200,
    };
  };

  const checkCollision = () => {
    const { snake, gridSize } = { ...state };
    const head = snake[0];
    const hitWall =
      head.x < 1 || head.x > gridSize || head.y < 1 || head.y > gridSize;

    const hitSelf = snake
      .slice(1)
      .some((segment) => head.x === segment.x && head.y === segment.y);

    if (hitWall || hitSelf) {
      resetGame();
    }
  };

  return {
    startGame,
    stopGame,
    updateScore,
    updateHighScore,
    resetGame,
    checkCollision,
  };
};
