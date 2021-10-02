import React, {useState} from 'react';


import '../styles/about_me.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutMe = () => {

  return (
    <Container fluid>
        <Row className="about-me-section">
          <Col xs={12}>
            <a href="#">Hola me llamo Rafa y esas cosas</a>
          </Col>
        </Row>
    </Container>
  );
};

export default AboutMe;