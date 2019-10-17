import React from 'react';

import {
  Col,
  Row,
  Image,
} from 'react-bootstrap';

import winner from '../../assets/winner.gif';

const Winner = () => (
  <Col>
    <Row>
      <Image src={winner} rounded />
    </Row>
  </Col>
);

export default Winner;
