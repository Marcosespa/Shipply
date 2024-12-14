import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../../styles/Home/integrations.css";

const Integrations = () => {
  const integrations = [
    { src: "/path/to/vtex-logo.png", alt: "VTEX" },
    { src: "/path/to/shopify-logo.png", alt: "Shopify" },
    { src: "/path/to/linio-logo.png", alt: "Linio" },
    { src: "/path/to/rappi-logo.png", alt: "Rappi" },
    { src: "/path/to/woocommerce-logo.png", alt: "WooCommerce" },
    { src: "/path/to/mercadolibre-logo.png", alt: "Mercado Libre" },
  ];

  return (
    <div className="integrations-section py-5">
      <Container>
        <Row>
          <Col>
            <h2 className="integrations-title text-center">Nos integramos a tu Ecommerce</h2>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <div className="integration-carousel">
              <div className="carousel-track">
                {integrations.map((integration, index) => (
                  <img
                    key={index}
                    src={integration.src}
                    alt={integration.alt}
                    className="integration-logo"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Integrations;

