import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/Home/benefits.css';

const Benefits = () => {
  const benefits = [
    { icon: "/path/to/icon1.png", title: "Recogemos tu inventario" },
    { icon: "/path/to/icon2.png", title: "Alistamos tus pedidos" },
    { icon: "/path/to/icon3.png", title: "Realizamos seguimiento" },
    { icon: "/path/to/icon4.png", title: "Nos integramos" },
    { icon: "/path/to/icon5.png", title: "Almacenamos" },
    { icon: "/path/to/icon6.png", title: "Despachamos" },
  ];

  return (
    <div className="benefits-section bg-light py-5">
      <Container>
        <Row className="text-center">
          <Col>
            <h5 className="benefits-subtitle">Despreocúpate de tu logística</h5>
            <h2 className="benefits-title">Shipply maneja cada paso hasta el momento de la entrega</h2>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          {benefits.map((benefit, index) => (
            <Col md={4} key={index} className="d-flex justify-content-center">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <img src={benefit.icon} alt={benefit.title} />
                </div>
                <h5 className="benefit-title mt-3">{benefit.title}</h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Benefits;
