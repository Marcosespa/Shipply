// src/components/Testimonials.js
import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const Testimonials = () => {
  return (
    <div className="bg-dark text-white py-5">
      <Container>
        <h2 className="text-center">Testimonios</h2>
        <Carousel className="mt-4">
          <Carousel.Item>
            <Row>
              <Col md={6}>
                <p>"Shipply es excelente con los servicios de almacenamiento, alistamiento y distribución de mis productos."</p>
                <h5>Francisco Vaca</h5>
                <p>AV Plastics Trade SAS</p>
              </Col>
              <Col md={6}>
                <p>"Shipply es una opción excelente para empresas que buscan crecer y optimizar sus procesos logísticos."</p>
                <h5>Nury Cuarán</h5>
                <p>Transporte Carga Libre</p>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Testimonials;
