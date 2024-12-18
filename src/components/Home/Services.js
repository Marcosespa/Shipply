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
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = servicesRef.current.querySelectorAll(".service-card");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: "bi bi-box-seam",
      title: "Almacenamiento",
      description:
        "Recolectamos, clasificamos y almacenamos tus productos de acuerdo a su naturaleza y especificaciones, en nuestras bodegas especializadas.",
    },
    {
      icon: "bi bi-arrow-left-right",
      title: "Cross-docking",
      description:
        "Recibimos tus órdenes, recepcionamos tus productos, armamos, etiquetamos y empacamos tus pedidos sin almacenar.",
    },
    {
      icon: "bi bi-box2-heart",
      title: "Picking / Packing",
      description:
        "Seleccionamos tus productos, realizamos el alistamiento de tus órdenes de pedido, etiquetamos y empacamos a tu medida.",
    },
    {
      icon: "bi bi-truck",
      title: "Envío",
      description:
        "Te ofrecemos diversas alternativas de transporte de acuerdo a tu necesidad.",
    },
  ];

  return (
    <div className="services-section" ref={servicesRef}>
      <Container>
        <h2 className="text-center section-title-services">Nuestros Servicios</h2>
        <p className="text-center section-description-services">
          En Shipply encontrarás una serie de servicios que facilitarán el
          crecimiento de tu E-commerce.
        </p>
        <Row className="mt-4 justify-content-center align-items-stretch">
          {services.map((service, index) => (
            <Col
              key={index}
              md={2}
              sm={6}
              xs={12}
              className="service-card d-flex flex-column"
            >
              <i className={`${service.icon} icon-service`}></i>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-5">
          <Button
            variant="warning"
            size="lg"
            className="cta-button"
            href="/servicios" 
          >            Conoce nuestros servicios
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Services;
