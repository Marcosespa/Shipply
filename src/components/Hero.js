// src/components/Hero.js
import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="bg-light py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h5 className="text-warning">Simplifica tu logística y acelera el crecimiento de tu E-commerce</h5>
            <h1 className="fw-bold">
              Centraliza tu inventario, automatiza el proceso de pedidos y garantiza entregas rápidas y seguras.
            </h1>
            <Button variant="warning" size="lg" className="mt-3">Contáctanos</Button>
            <p className="mt-3">La mudanza corre por cuenta nuestra</p>
          </Col>
          <Col md={6}>
          <img src="https://via.placeholder.com/500x300" alt="Placeholder" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
