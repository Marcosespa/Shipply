// src/components/Benefits.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Benefits = () => {
  return (
    <div className="bg-light py-5">
      <Container>
        <h2 className="text-center text-warning">Beneficios</h2>
        <Row className="text-center mt-4">
          <Col md={4}>
            <img src="path_to_icon1" alt="Seguridad" className="mb-3" />
            <h5>Seguridad y soporte 24/7</h5>
          </Col>
          <Col md={4}>
            <img src="path_to_icon2" alt="Velocidad" className="mb-3" />
            <h5>Velocidad de respuesta</h5>
          </Col>
          <Col md={4}>
            <img src="path_to_icon3" alt="Tecnología" className="mb-3" />
            <h5>Tecnología especializada</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Benefits;
