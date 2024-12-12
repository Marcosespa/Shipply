// src/components/Services.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = () => {
  return (
    <Container className="py-5" id="services">
      <h2 className="text-center mb-4">Nuestros Servicios</h2>
      <Row>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <i className="bi bi-box-seam fs-1 text-primary"></i>
              <Card.Title className="mt-3">Almacenamiento</Card.Title>
              <Card.Text>Recolectamos, clasificamos y almacenamos tus productos de acuerdo a su naturaleza y especificaciones en nuestras bodegas especializadas.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <i className="bi bi-arrow-repeat fs-1 text-primary"></i>
              <Card.Title className="mt-3">Cross-docking</Card.Title>
              <Card.Text>Recibimos tus órdenes, recepcionamos tus productos, armamos, etiquetamos y empacamos tus pedidos sin almacenar.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <i className="bi bi-truck fs-1 text-primary"></i>
              <Card.Title className="mt-3">Envío</Card.Title>
              <Card.Text>Te ofrecemos diversas alternativas de transporte de acuerdo a tu necesidad.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
