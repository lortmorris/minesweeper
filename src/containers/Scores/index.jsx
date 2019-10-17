import React from 'react';

import { useSelector } from 'react-redux';

import {
  ListGroup,
  Button,
  Col,
  Row,
} from 'react-bootstrap';

import props from './props';

const Scores = ({
  handleClick,
}) => {
  const scores = useSelector((state) => state.Users.scores);

  return (
    <Col>
      <Row>
        <ListGroup>
          {scores.map((s) => (
            <ListGroup.Item key={`user-${s.name}`}>{`${s.name}: ${s.scoring}`}</ListGroup.Item>
          ))}
        </ListGroup>
      </Row>
      <Row>
        <Button onClick={handleClick}>New Game</Button>
      </Row>
    </Col>
  );
};

Scores.propTypes = props;

export default Scores;
