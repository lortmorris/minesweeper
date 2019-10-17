import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  Row,
  Col,
  Form,
} from 'react-bootstrap';

import Actions from '../../actions';

const GameHeader = () => {
  const completed = useSelector((state) => state.Game.points.completed * 5);
  const timer = useSelector((state) => state.Game.timer);
  const dispatch = useDispatch();
  const doChange = (value) => {
    dispatch(Actions.Game.setDifficulty(value));
    dispatch(Actions.Game.getNextGame());
  };
  return (
    <header className="gameHeader">
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="gameHeaderForm.Difficulty">
              <Form.Label>Difficulty</Form.Label>
              <Form.Control as="select" onChange={(evt) => doChange(evt.target.value)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Row>{`Scoring: ${completed}`}</Row>
        </Col>
        <Col>
          <Row>{`Timer: ${timer}`}</Row>
        </Col>
      </Row>
    </header>
  );
};

export default GameHeader;
