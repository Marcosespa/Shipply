import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../styles/Services/devolutionsection.css";
import images from "../../assets/images/images";
import { Player } from "@lottiefiles/react-lottie-player";

const DevolutionSection = () => {
  return (
    <section className="devolution-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Texto a la izquierda */}
          <Col md={6}>
            <h2 className="section-title-devoluciones">
              Gestión de devoluciones
            </h2>
            <p className="section-description-devolution mb-4">
              Facilitamos tu proceso de devoluciones con una automatización
              integrada a nuestro WMS.
            </p>
            <p className="highlighted-text">
              <strong>
                Te ofrecemos un análisis mensual de tus factores de
                devoluciones.
              </strong>
            </p>
            <div className="advantages">
              <h5 className="advantages-title mb-3">Ventajas</h5>
              <ul className="advantages-list-devolution">
                <li>Rapidez en el proceso</li>
                <li>Incremento del nivel de satisfacción de tus clientes</li>
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
          {/* Imagen a la derecha */}
          <Col md={6} className="text-center">
            <div className="image-container position-relative">
              <Player
                src={images.logo9}
                className="player"
                loop
                autoplay
                style={{ height: "400px", width: "500px" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DevolutionSection;
