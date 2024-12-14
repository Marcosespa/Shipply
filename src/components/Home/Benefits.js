// src/components/Benefits.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/Home/benefits.css';

const Benefits = () => {
  return (
    <div className="benefits-section bg-light py-5">
      <Container>
        <Row className="text-center">
          <Col>
            <h5 className="text-warning fw-bold">Despreocúpate de tu logística</h5>
            <h2 className="fw-bold">Shipply maneja cada paso hasta el momento de la entrega</h2>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col md={4}>
            <div className="benefit-item">
              <div className="benefit-icon">
                <img src="/path/to/icon1.png" alt="Recogemos tu inventario" />
              </div>
              <h5 className="mt-3">Recogemos tu inventario</h5>
            </div>
          </Col>
          <Col md={4}>
            <div className="benefit-item">
              <div className="benefit-icon">
                <img src="/path/to/icon2.png" alt="Alistamos tus pedidos" />
              </div>
              <h5 className="mt-3">Alistamos tus pedidos</h5>
            </div>
          </Col>
          <Col md={4}>
            <div className="benefit-item">
              <div className="benefit-icon">
                <img src="/path/to/icon3.png" alt="Realizamos seguimiento" />
              </div>
              <h5 className="mt-3">Realizamos seguimiento</h5>
            </div>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col md={4}>
            <div className="benefit-item">
              <div className="benefit-icon">
                <img src="/path/to/icon4.png" alt="Nos integramos" />
              </div>
              <h5 className="mt-3">Nos integramos</h5>
            </div>
          </Col>
          <Col md={4}>
            <div className="benefit-item">
              <div className="benefit-icon">
                <img src="/path/to/icon5.png" alt="Almacenamos" />
              </div>
              <h5 className="mt-3">Almacenamos</h5>
            </div>
          </Col>
          <Col md={4}>
            <div className="benefit-item">
              <div className="benefit-icon">
                <img src="/path/to/icon6.png" alt="Despachamos" />
              </div>
              <h5 className="mt-3">Despachamos</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Benefits;

