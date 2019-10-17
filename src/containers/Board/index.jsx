import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  Col,
  Row,
} from 'react-bootstrap';

import Actions from '../../actions';
import Cell from '../../components/Cell';

let key = 0;
const getNextId = () => {
  key += 1;
  return key;
};

const Board = () => {
  const boardGame = useSelector((state) => state.Game.board);
  const gameStatus = useSelector((state) => state.Game.status);
  const dispatch = useDispatch();

  const onClickHandle = (x, y) => dispatch(Actions.Game.clickCell(x, y));
  return (
    <Col>
      <Row>
        {boardGame.map((col) => (
          <Col
            key={`col-${getNextId()}`}
          >
            {col.map((row) => (
              <Row key={row.key}>
                <Cell
                  data={row}
                  onClickHandle={onClickHandle}
                  gameStatus={gameStatus}
                />
              </Row>
            ))}
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default Board;
