import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../styles/Services/integracionessection.css";
import images from "../../assets/images/images";

const IntegracionesSection = () => {
  return (
    <section className="integraciones-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Imagen a la izquierda */}
          <Col md={6} className="text-center">
            <img
              src={images.logo5}
              alt="Integraciones"
              className="img-fluid integration-image"
              loading="lazy"
            />
          </Col>
          {/* Texto a la derecha */}
          <Col md={6}>
            <h2 className="section-title">Integraciones</h2>
            <p className="section-description">
              Nos integramos a tu canal de ventas e-commerce.
            </p>
            <div className="advantages">
              <h5 className="advantages-title">Ventajas</h5>
              <ul className="advantages-list">
                <li>
                  Realizamos una gestión ágil y eficiente de tus pedidos e
                  inventario en tiempo real, con un WMS especializado que nos
                  permite visualizar tu operación las 24/7.
                </li>
              </ul>
            </div>
            <Button variant="dark" className="cta-button mt-3">
              <i className="bi bi-whatsapp me-2"></i>
              Cotizar ahora
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IntegracionesSection;
