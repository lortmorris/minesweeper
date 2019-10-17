import React from 'react';

import {
  Container,
  Modal,
} from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';

import GameHeader from '../../containers/GameHeader';
import Scores from '../../containers/Scores';
import Winner from '../Winner';
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
        show={gameStatus === 'end' || gameStatus === 'winner'}
        onHide={() => newGame()}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {`${gameStatus === 'winner' ? 'Winner' : 'Scores'}`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {gameStatus === 'end' && (
            <Scores
              handleClick={newGame}
            />
          )}
          {gameStatus === 'winner' && (
            <Winner />
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

Layout.propTypes = propTypes;

export default Layout;
