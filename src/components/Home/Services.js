import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../styles/Home/services.css";

const Services = () => {
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate"); // Opcional: para repetir animaciones
          }
        });
      },
      {
        threshold: 0.1, // Porcentaje visible para activar la animación
      }
    );

    const elements = servicesRef.current.querySelectorAll(".service-card");
    elements.forEach((el) => observer.observe(el));

    // Limpieza al desmontar el componente
    return () => observer.disconnect();
  }, []);

  return (
    <div className="services-section" ref={servicesRef}>
      <Container>
        <h2 className="text-center section-title">Nuestros Servicios</h2>
        <p className="text-center section-description">
          En Shipply encontrarás una serie de servicios que facilitarán el
          crecimiento de tu E-commerce.
        </p>
        <Row className="mt-4 justify-content-center align-items-stretch">
          <Col md={2} sm={6} className="service-card d-flex flex-column">
            <i className="bi bi-box-seam icon-service"></i>
            <h4>Almacenamiento</h4>
            <p>
              Recolectamos, clasificamos y almacenamos tus productos de acuerdo
              a su naturaleza y especificaciones, en nuestras bodegas
              especializadas.
            </p>
          </Col>
          <Col md={2} sm={6} className="service-card d-flex flex-column">
            <i className="bi bi-arrow-left-right icon-service"></i>
            <h4>Cross-docking</h4>
            <p>
              Recibimos tus órdenes, recepcionamos tus productos, armamos,
              etiquetamos y empacamos tus pedidos sin almacenar.
            </p>
          </Col>
          <Col md={2} sm={6} className="service-card d-flex flex-column">
            <i className="bi bi-box2-heart icon-service"></i>
            <h4>Picking / Packing</h4>
            <p>
              Seleccionamos tus productos, realizamos el alistamiento de tus
              órdenes de pedido, etiquetamos y empacamos a tu medida.
            </p>
          </Col>
          <Col md={2} sm={6} className="service-card d-flex flex-column">
            <i className="bi bi-truck icon-service"></i>
            <h4>Envío</h4>
            <p>
              Te ofrecemos diversas alternativas de transporte de acuerdo a tu
              necesidad.
            </p>
          </Col>
        </Row>
        <div className="text-center mt-5">
          <Button variant="warning" size="lg" className="cta-button">
            Conoce nuestros servicios
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Services;
