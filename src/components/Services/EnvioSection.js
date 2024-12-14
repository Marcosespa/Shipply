import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../styles/Services/enviosection.css";
import images from "../../assets/images/images";

const EnvioSection = () => {
  return (
    <section className="envio-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Imagen con íconos decorativos */}
          <Col md={6} className="position-relative text-center">
            <img
              src={images.truckImage}
              alt="Envío"
              className="img-fluid main-image"
              loading="lazy"
            />
            <div className="icon-decorator piggy-icon">
              <i className="bi bi-piggy-bank"></i>
            </div>
            <div className="icon-decorator clock-icon">
              <i className="bi bi-clock"></i>
            </div>
          </Col>
          {/* Texto y ventajas */}
          <Col md={6}>
            <h2 className="text-warning">Envío</h2>
            <p className="mb-4">
              Contamos con una flota de transporte propia, y sostenemos alianzas con las principales empresas paqueteras para brindarte la solución de transporte que más se adapte a tu necesidad.
            </p>
            <p>
              <strong>
                Entrega same day o next day en las principales ciudades del país. Contamos con motorizados y vehículos propios para nunca fallar tu entrega importante.
              </strong>
            </p>
            <div className="advantages">
              <h5 className="text-warning mb-3">Ventajas</h5>
              <ul>
                <li>Precios competitivos</li>
                <li>Mayor cobertura geográfica</li>
                <li>Menor lead time</li>
                <li>Recibimos pago contraentrega</li>
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

export default EnvioSection;
