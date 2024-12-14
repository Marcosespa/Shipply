import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../styles/Services/devolutionsection.css";
import images from "../../assets/images/images";



const DevolutionSection = () => {
  return (
    <section className="devolution-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Texto a la izquierda */}
          <Col md={6}>
            <h2 className="text-warning">Gestión de devoluciones</h2>
            <p className="mb-4">
              Facilitamos tu proceso de devoluciones con una automatización integrada a nuestro WMS.
            </p>
            <p>
              <strong>
                Te ofrecemos un análisis mensual de tus factores de devoluciones.
              </strong>
            </p>
            <div className="advantages">
              <h5 className="text-warning mb-3">Ventajas</h5>
              <ul>
                <li>Rapidez en el proceso</li>
                <li>Incremento del nivel de satisfacción de tus clientes</li>
              </ul>
            </div>
            <Button variant="dark" className="mt-3">
              <i className="bi bi-whatsapp me-2"></i>
              Cotizar ahora
            </Button>
          </Col>
          {/* Imagen a la derecha */}
          <Col md={6} className="text-center">
            <div className="image-container position-relative">
              <img
                src={images.packageHandImage}
                alt="Devoluciones"
                className="img-fluid main-image"
                loading="lazy"
              />
              <div className="decorator"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DevolutionSection;
