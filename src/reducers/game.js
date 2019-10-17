const initialState = {
  scoring: 0,
  level: 1,
  difficulty: 1,
  board: [],
  status: 'new',
  points: {
    completed: 0,
    rest: 0,
  },
};

const cell = (state = {}, action) => {
  switch (action.type) {
    case 'GAME_SHOW_CELL':
      if (state.x === action.payload.x && state.y === action.payload.y) {
        return {
          ...state,
          show: true,
        };
      }
      return state;
    case 'GAME_SET_CELL_VALUE':
      if (state.x === action.payload.x && state.y === action.payload.y) {
        return {
          ...state,
          value: action.payload.value,
        };
      }
      return state;
    default:
      return state;
  }
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case 'GAME_SET_ENDGAME':
      return {
        ...state,
        status: 'end',
      };
    case 'GAME_SHOW_CELL':
      return {
        ...state,
        board: state.board.map((col) => col.map((row) => cell(row, action))),
      };

    case 'GAME_SET_CELL_VALUE':
      return {
        ...state,
        board: state.board.map((col) => col.map((row) => cell(row, action))),
      };

    case 'GAME_SET_BOARD':
      return {
        ...state,
        board: [...action.payload.board],
        status: 'new',
        points: {
          completed: 0,
          rest: 0,
        },
      };

    case 'GAME_SET_WINNER':
      return {
        ...state,
        status: 'winner',
        points: {
          completed: 0,
          rest: 0,
        },
      };

    case 'GAME_SET_POINTS':
      return {
        ...state,
        points: { ...action.payload },
      };
    case 'GAME_SET_DIFFICULTY':
      return {
        ...state,
        difficulty: action.payload.difficulty,
      };

    default:
      return state;
  }
};

export default game;
