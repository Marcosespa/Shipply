// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={6}>
            <img src="path_to_logo" alt="Shipply" width="150" />
          </Col>
          <Col md={3}>
            <h5>Menú</h5>
            <ul>
              <li><a href="#inicio" className="text-white">Inicio</a></li>
              <li><a href="#servicios" className="text-white">Servicios</a></li>
              <li><a href="#contacto" className="text-white">Contacto</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contacto</h5>
            <p>+57 3184516959</p>
            <p>alejandrareina@shipply.com.co</p>
            <p>Bogotá, Colombia</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
