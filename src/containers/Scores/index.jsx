import React from 'react';

import { useSelector } from 'react-redux';

import {
  ListGroup,
} from 'react-bootstrap';

const Scores = () => {
  const scores = useSelector((state) => state.Users.Scores);

  return (
    <ListGroup>
      {scores.map((s) => (
        <ListGroup.Item>{`${s.name}: ${s.scoring}`}</ListGroup.Item>
      ))}

    </ListGroup>
  );
};

export default Scores;
