// src/components/Integrations.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/integrations.css';

const Integrations = () => {
  return (
    <div className="integrations-section py-5">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center">Nos integramos a tu Ecommerce</h2>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <div className="integration-carousel">
              <div className="carousel-track">
                <img src="/path/to/vtex-logo.png" alt="VTEX" className="integration-logo" />
                <img src="/path/to/shopify-logo.png" alt="Shopify" className="integration-logo" />
                <img src="/path/to/linio-logo.png" alt="Linio" className="integration-logo" />
                <img src="/path/to/rappi-logo.png" alt="Rappi" className="integration-logo" />
                <img src="/path/to/woocommerce-logo.png" alt="WooCommerce" className="integration-logo" />
                <img src="/path/to/mercadolibre-logo.png" alt="Mercado Libre" className="integration-logo" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Integrations;
