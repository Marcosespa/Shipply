import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../styles/Services/logisticsection.css";
import images from "../../assets/images/images";
import { Link } from "react-router-dom";

const LogisticaCreceSection = () => {
  return (
    <section id="logistica-crece" className="logistica-crece-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Imagen a la izquierda */}
          <Col md={6} className="text-center">
            <img
              src={images.LogisticSection}
              alt="Integraciones"
              className="img-fluid main-image"
              loading="lazy"
            />
          </Col>
          {/* Texto a la derecha */}
          <Col md={6}>
            <h2 className="section-title-Logistic">
              Optimiza tu Logística B2B con Shipply
            </h2>
            <p className="section-description-Logistic">
              Agiliza, expande y potencia tus alianzas con retailers. 🚀
            </p>
            <Button
              // id="btn-cta-logistic"
              className="btn-cta-logistic"
              as={Link}
              to="/contacto"
            >
              Iniciemos una conversación
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const InovacionSection = () => {
  return (
    <section className="devolution-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Texto a la izquierda */}
          <Col md={6}>
            <h2 className="section-title-devoluciones">
            Experiencia, Innovación y Soporte
            </h2>
            <p className="section-description-devolution mb-4">
              Facilitamos tu proceso de devoluciones con una automatización
              integrada a nuestro WMS.
            </p>
            <p className="highlighted-text">
              <strong>
              Con más de 20 años de experiencia en soluciones de cumplimiento B2B, optimizamos cada etapa de la cadena de suministro, desde la gestión de inventarios y el cumplimiento de EDI hasta el control de calidad, envíos y devoluciones.
              </strong>
            </p>
            <div className="advantages">
              <ul className="advantages-list-devolution">
                <li>Invertimos continuamente en talento, tecnología y alianzas estratégicas con minoristas para ofrecer soluciones escalables y adaptadas a las necesidades de cada negocio. Más que un proveedor, somos un socio comprometido con el crecimiento y la eficiencia operativa de tu empresa.</li>
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
          <img
              src={images.LogisticSection}
              alt="Integraciones"
              className="img-fluid integration-image"
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};


export { LogisticaCreceSection, InovacionSection };
