import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/services.css';

const Services = () => {
  return (
    <div className="services-section">
      <Container>
        <h2 className="text-center text-warning">Servicios</h2>
        <p className="text-center text-light">
          En Shipply encontrarás una serie de servicios que facilitarán el crecimiento de tu E-commerce.
        </p>
        <Row className="mt-4">
          <Col md={3} className="text-center service-card">
            <i className="bi bi-box-seam icon-service"></i>
            <h4>Almacenamiento</h4>
            <p>
              Recolectamos, clasificamos y almacenamos tus productos de acuerdo a su naturaleza y especificaciones, en nuestras bodegas especializadas.
            </p>
          </Col>
          <Col md={3} className="text-center service-card">
            <i className="bi bi-arrow-left-right icon-service"></i>
            <h4>Cross-docking</h4>
            <p>
              Recibimos tus órdenes, recepcionamos tus productos, armamos, etiquetamos y empacamos tus pedidos sin almacenar.
            </p>
          </Col>
          <Col md={3} className="text-center service-card">
            <i className="bi bi-box2-heart icon-service"></i>
            <h4>Picking / Packing</h4>
            <p>
              Seleccionamos tus productos, realizamos el alistamiento de tus órdenes de pedido, etiquetamos y empacamos a tu medida.
            </p>
          </Col>
          <Col md={3} className="text-center service-card">
            <i className="bi bi-truck icon-service"></i>
            <h4>Envío</h4>
            <p>
              Te ofrecemos diversas alternativas de transporte de acuerdo a tu necesidad.
            </p>
          </Col>
        </Row>
        <div className="text-center mt-4">
          <Button variant="warning" size="lg">Conoce nuestros servicios</Button>
        </div>
      </Container>
    </div>
  );
};

export default Services;
