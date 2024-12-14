import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../styles/Services/dataanalysissection.css";
import images from "../../assets/images/images";


const DataAnalysisSection = () => {
  return (
    <section className="data-analysis-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Imagen a la izquierda */}
          <Col md={6} className="text-center position-relative">
            <img
              src={images.dataAnalysisImage}
              alt="Análisis de datos"
              className="img-fluid main-image"
              loading="lazy"
            />
            <div className="decorator"></div>
          </Col>
          {/* Texto a la derecha */}
          <Col md={6}>
            <h2 className="text-warning">Análisis de datos con tecnología avanzada</h2>
            <p className="mb-4">
              Te presentamos un dashboard con los principales reportes y métricas de tu operación. Te enviamos alertas con las condiciones que quieras conocer en tiempo real.
            </p>
            <p>
              <strong>Dashboard ajustado a tu necesidad.</strong>
            </p>
            <div className="advantages">
              <h5 className="text-warning mb-3">Ventajas</h5>
              <ul>
                <li>Actualización 24/7</li>
              </ul>
            </div>
            <Button variant="dark" className="mt-3">
              <i className="bi bi-whatsapp me-2"></i>
              Cotizar ahora
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DataAnalysisSection;