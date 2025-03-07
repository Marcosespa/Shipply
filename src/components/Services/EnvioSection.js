import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../styles/Services/enviosection.css";
import images from "../../assets/images/images";

const EnvioSection = () => {
  return (
    <section id="envios" className="envio-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Imagen con movimiento */}
          <Col md={6} className="position-relative text-center">
            <div className="player-container">
              <img
                src={images.EnviosImg}
                className="player floating-image"
                alt="Envios"
              />
            </div>
          </Col>
          {/* Texto y ventajas */}
          <Col md={6}>
            <h2 className="section-title-Envio">Envío</h2>
            <p className="section-description mb-4">
              Contamos con una flota de transporte propia, y sostenemos alianzas
              con las principales empresas paqueteras para brindarte la solución
              de transporte que más se adapte a tu necesidad.
            </p>
            <p className="highlighted-text">
              <strong>
                Entrega same day o next day en las principales ciudades del
                país. Contamos con motorizados y vehículos propios para nunca
                fallar tu entrega importante.
              </strong>
            </p>
            <div className="advantages">
              <h5 className="advantages-title mb-3">Ventajas</h5>
              <ul className="advantages-list">
                <li>Precios competitivos</li>
                <li>Mayor cobertura geográfica</li>
                <li>Menor lead time</li>
                <li>Recibimos pago contraentrega</li>
              </ul>
            </div>
            <Button
              href="https://wa.me/573184516959"
              target="_blank"
              variant="dark"
              className="cta-button mt-3"
            >
              <i className="bi bi-whatsapp me-2"></i>
              Cotizar ahora
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EnvioSection;
