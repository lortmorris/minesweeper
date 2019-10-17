import React from 'react';

import {
  Container,
  Modal,
} from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';

import GameHeader from '../../containers/GameHeader';
import Scores from '../../containers/Scores';
import Actions from '../../actions';
import propTypes from './props';

const Layout = ({ children }) => {
  const gameStatus = useSelector((state) => state.Game.status);
  const dispatch = useDispatch();
  const newGame = () => dispatch(Actions.Game.getNextGame());
  return (
    <Container>
      <GameHeader />
      {children}
      <Modal
        show={gameStatus === 'end'}
        onHide={() => newGame()}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Scores
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Scores
            handleClick={newGame}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

Layout.propTypes = propTypes;

export default Layout;
