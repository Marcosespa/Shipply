import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/Home/benefits2.css';
import images from "../../assets/images/images";

const Benefits2 = () => {
  const benefits = [
    { icon: "bi bi-shield-check", title: "Seguridad y soporte 24/7" },
    { icon: "bi bi-lightning-fill", title: "Velocidad de respuesta" },
    { icon: "bi bi-gear-fill", title: "Tecnología especializada" },
  ];

  return (
    <div className="benefits-section">
      <Container>
        <Row className="align-items-center">
          {/* Columna del logo */}
          <Col md={6} className="text-center logo-container">
            <img
              src={images.logo2}
              alt="Logo 2"
              className="img-fluid logo-image"
            />
          </Col>
          {/* Columna de beneficios */}
          <Col md={6}>
            <h2 className="section-title text-warning">Beneficios</h2>
            <p className="section-description">
              Nos enfocamos en ofrecer servicios de calidad para que hagas crecer tu negocio.
            </p>
            <Row className="mt-4 justify-content-center">
              {benefits.map((benefit, index) => (
                <Col key={index} md={4} sm={6} xs={12} className="benefit-card">
                  <i className={`${benefit.icon} icon-benefit`}></i>
                  <h4>{benefit.title}</h4>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Benefits2;
