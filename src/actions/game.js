export const setLevel = (level) => ({
  type: 'GAME_SET_LEVEL',
  payload: {
    level,
  },
});

export const setDifficulty = (difficulty) => ({
  type: 'GAME_SET_DIFFICULTY',
  payload: {
    difficulty: parseInt(difficulty, 10),
  },
});

export const setBoard = (board) => ({
  type: 'GAME_SET_BOARD',
  payload: {
    board,
  },
});

export const clickCell = (x, y) => ({
  type: 'GAME_USER_CLICKED',
  payload: {
    x,
    y,
  },
});

export const getNextGame = () => ({
  type: 'GAME_GET_NEXT_GAME',
});

export const setValue = (x, y, value) => ({
  type: 'GAME_SET_CELL_VALUE',
  payload: {
    value,
    x,
    y,
  },
});

export const showCell = (x, y) => ({
  type: 'GAME_SHOW_CELL',
  payload: {
    x,
    y,
  },
});

export const endGame = () => ({
  type: 'GAME_SET_ENDGAME',
});

export const setGamePoints = (completed, rest) => ({
  type: 'GAME_SET_POINTS',
  payload: {
    completed,
    rest,
  },
});

export default {
  setLevel,
  setBoard,
  clickCell,
  showCell,
  getNextGame,
  setDifficulty,
  setValue,
  endGame,
  setGamePoints,
};
