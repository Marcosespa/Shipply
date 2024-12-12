import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/benefits2.css';
import images from "../assets/images/images";

const Benefits2 = () => {
  return (
    <div className="benefits-section">
      <Container>
        <Row className="align-items-center">
          {/* Columna de logo y cajas */}
          <Col md={6} className="text-center logo-container">
            <img
              src={images.logo2}
              alt="Logo 2"
              className="img-fluid logo-image"
            />
          </Col>
          <Col md={6} className="text-center">
            <h2 className="text-warning">Beneficios</h2>
            <p>Nos enfocamos en ofrecer servicios de calidad para que hagas crecer tu negocio.</p>
            <Row className="mt-4 justify-content-center">
              <Col md={4} sm={6} className="benefit-card">
                <i className="bi bi-shield-check icon-benefit"></i>
                <h4>Seguridad y soporte 24/7</h4>
              </Col>
              <Col md={4} sm={6} className="benefit-card">
                <i className="bi bi-lightning-fill icon-benefit"></i>
                <h4>Velocidad de respuesta</h4>
              </Col>
              <Col md={4} sm={6} className="benefit-card">
                <i className="bi bi-gear-fill icon-benefit"></i>
                <h4>Tecnología especializada</h4>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Benefits2;
