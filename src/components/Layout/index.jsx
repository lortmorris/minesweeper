import React, {
  useState,
} from 'react';

import {
  Container,
  Modal,
} from 'react-bootstrap';

import GameHeader from '../../containers/GameHeader';
import Scores from '../../containers/Scores';

import propTypes from './props';

const Layout = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <GameHeader />
      {children}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            New Domain
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Scores />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

Layout.propTypes = propTypes;

export default Layout;
