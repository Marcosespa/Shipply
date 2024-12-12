// src/components/Testimonials.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Testimonials = () => {
  return (
    <Container className="py-5 bg-light" id="testimonials">
      <h2 className="text-center mb-4">Testimonios</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Text>"Shipply es una opción excelente para empresas que buscan crecer y optimizar sus procesos logísticos."</Card.Text>
              <Card.Footer className="blockquote-footer">Nury Cuarán, <cite title="Source Title">Transporte Carga Libre</cite></Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Text>"Son una empresa competente, responsable, dedicada y con ganas de crecer."</Card.Text>
              <Card.Footer className="blockquote-footer">Leonela, <cite title="Source Title">Travel Blue</cite></Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Text>"Destaco la responsabilidad y atención que le brindan al cliente."</Card.Text>
              <Card.Footer className="blockquote-footer">Francisco Vaca, <cite title="Source Title">AV Plastics Trade SAS</cite></Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
