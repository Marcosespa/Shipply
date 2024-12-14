import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/Home/aboutus.css';

const AboutUs = () => {
  return (
    <div className="about-us-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-section">
            <h2 className="section-title text-warning">¿Quiénes somos?</h2>
            <p className="section-description">
              Somos una empresa de logística fulfillment especializada en diseñar soluciones adaptadas a las necesidades de las empresas E-commerce.
            </p>
            <Row className="info-cards">
              <Col md={3.3} className="info-card">
                <div className="card-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <p>Contamos con el soporte de Cargalibre, incluyendo una flota propia y warehouses en las principales ciudades de Colombia.</p>
              </Col>
              <Col md={3.3} className="info-card">
                <div className="card-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <p>Simplificamos y mejoramos la logística de tu E-commerce.</p>
              </Col>
              <Col md={3.3} className="info-card">
                <div className="card-icon">
                  <i className="fas fa-balance-scale"></i>
                </div>
                <p>Ofrecemos soluciones seguras, ajustadas a las necesidades de cada negocio con precios justos y competitivos.</p>
              </Col>
            </Row>
          </Col>
          <Col md={6} className="image-section">
            <img
              src="/path/to/about-image.png"
              alt="About Us"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
