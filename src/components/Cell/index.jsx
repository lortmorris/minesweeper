import React from 'react';

import {
  Button,
} from 'react-bootstrap';

import props from './props';

const Cell = ({
  onClickHandle,
  data,
}) => {
  const {
    value,
    show,
    x,
    y,
  } = data;
  if (show) {
    return (
      <span className="game-cell fill">{`${value === -1 ? '*' : value}`}</span>
    );
  }
  return (
    <Button
      className="game-cell"
      onClick={() => onClickHandle(x, y)}
    />
  );
};

Cell.propTypes = props;

export default Cell;
