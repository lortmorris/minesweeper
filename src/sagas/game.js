import {
  put,
  select,
  delay,
} from 'redux-saga/effects';

import Actions from '../actions';

const getRandomValue = (limit) => Math.round(Math.random() * limit);

function* calculateRowValue(y, x) {
  const state = yield select();
  const { board } = state.Game;
  let value = 0;
  const sides = [];
  if (board[x - 1] && board[x - 1][y - 1]) sides.push({ x: x - 1, y: y - 1 });
  if (board[x] && board[x][y - 1]) sides.push({ x, y: y - 1 });
  if (board[x + 1] && board[x + 1][y - 1]) sides.push({ x: x + 1, y: y - 1 });

  if (board[x - 1] && board[x - 1][y]) sides.push({ x: x - 1, y });
  if (board[x + 1] && board[x + 1][y]) sides.push({ x: x + 1, y });

  if (board[x - 1] && board[x - 1][y + 1]) sides.push({ x: x - 1, y: y + 1 });
  if (board[x] && board[x][y + 1]) sides.push({ x, y: y + 1 });
  if (board[x + 1] && board[x + 1][y + 1]) sides.push({ x: x + 1, y: y + 1 });

  sides.forEach((s) => {
    if (board[s.x][s.y].value === -1) value += 1;
  });
  return value;
}

export function* clickedRow(action) {
  const state = yield select();
  const {
    x,
    y,
  } = action.payload;

  const { board } = state.Game;
  const cell = board[x][y];
  console.info(x, y, board[x][y]);
  if (cell.value === -1) {
    console.info('is a bomb!');
    yield put(Actions.Game.showCell(x, y));
    let cells = [];
    board.forEach((cols) => {
      cols.forEach((row) => {
        if (row.value === -1) {
          cells.push(row);
        }
      });
    });
    cells = cells.sort(() => 0.5 - Math.random());
    for (let z = 0; z < cells.length; z += 1) {
      const row = cells[z];
      yield delay(Math.round(Math.random() * 100));
      yield put(Actions.Game.showCell(row.x, row.y));
    }
    return true;
  }

  const value = yield calculateRowValue(x, y);
  yield put(Actions.Game.setValue(x, y, value));
  yield put(Actions.Game.showCell(x, y));
  return false;
}

function generateBoard(colums = 1, rows = 1, bombs = 1) {
  if ((colums * rows) <= bombs) throw new Error('invalid bombs');

  const table = [];
  const temporal = [];
  for (let y = 0; y < colums; y += 1) {
    const field = [];
    for (let x = 0; x < rows; x += 1) {
      field.push({
        value: 0,
        show: false,
        key: `key-${x}-${y}`,
        x,
        y,
      });
      temporal.push({ y, x });
    }
    field.key = y;
    table.push(field);
  }

  for (let b = 0; b < bombs; b += 1) {
    const position = getRandomValue(temporal.length - 1);
    table[temporal[position].y][temporal[position].x].value = -1;
    temporal.splice(position, 1);
  }

  for (let y = 0; y < colums; y += 1) {
    for (let x = 0; x < rows; x += 1) {
      if (table[y][x].value > -1) calculateRowValue(table, y, x, colums, rows);
    }
  }
  return table;
}


function* getNextGame() {
  const state = yield select();
  const {
    difficulty,
  } = state.Game;
  const total = difficulty * 5 * difficulty * 5;
  const table = generateBoard(difficulty * 5, difficulty * 5, total * 0.3);
  yield put(Actions.Game.setBoard(table));
}
export default getNextGame;
