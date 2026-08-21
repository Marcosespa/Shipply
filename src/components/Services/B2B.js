import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/Services/logisticsection.css";
import images from "../../assets/images/images";
import { Player } from "@lottiefiles/react-lottie-player";
import Button from "../ui/Button";

const LogisticaCreceSection = () => {
  return (
    <section id="logistica-crece" className="logistica-crece-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <img
              src={images.LogisticSection}
              alt="Integraciones"
              className="img-fluid main-image"
              loading="lazy"
            />
          </Col>
          <Col md={6}>
            <h2 className="section-title-Logistic">
              Optimiza tu Logística B2B con Shipply
            </h2>
            <p className="section-description-Logistic">
              Agiliza, expande y potencia tus alianzas con retailers. 🚀
            </p>
            <Button
              variant="primary"
              size="md"
              className="btn-cta-logistic"
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
            <h2 className="section-title-Logistic">
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
              variant="primary"
              size="md"
              className="btn-cta-logistic"
              to="/contacto"
            >
              Iniciemos una conversación
            </Button>
          </Col>
          {/* Imagen a la derecha */}
          <Col md={6} className="text-center">
          <img
              src={images.InovacionSection}
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


const RetailersLideresSection = () => {
  return (
    <section id="logistica-crece" className="logistica-crece-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Imagen a la izquierda */}
          <Col md={6} className="text-center">
            <img
              src={images.RetailerSection}
              alt="Integraciones"
              className="img-fluid main-image"
              loading="lazy"
            />
          </Col>
          {/* Texto a la derecha */}
          <Col md={6}>
            <h2 className="section-title-Logistic">
            Entregamos a los retailers lideres en Colombia
            </h2>
            <p className="section-description-Logistic">
            En Shipply, contamos con el respaldo de CargaLibre, una empresa con amplia trayectoria en logística y distribución. Gracias a esta alianza, hemos perfeccionado nuestros procesos y adquirido una vasta experiencia en la entrega eficiente y segura a grandes superficies y clientes B2B.
            </p>
            <Button
              variant="primary"
              size="md"
              className="btn-cta-logistic"
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

const RespaldoSection = () => {
  return (
    <section className="devolution-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Texto a la izquierda */}
          <Col md={6}>
            <h2 className="section-title-devoluciones">
            El respaldo experto que necesitas
            </h2>
            <div className="Respaldo-services">
              <h3 className="Respaldo-advantages-title">Crossdocking y Almacenamiento</h3>
              <p className="Respaldo-description">
                En Shipply, conocemos a fondo los desafíos y singularidades que implica la entrega en cross-docking y el almacenamiento para retailers. Nos especializamos en optimizar cada fase del proceso logístico, asegurando eficiencia, cumplimiento y precisión en cada entrega.
              </p>

              <h3 className="Respaldo-advantages-title">Manejo de Órdenes de Compra</h3>
              <p className="Respaldo-description">
                Ordenamos tus pedidos y productos de acuerdo a las necesidades del retailer, incluyendo los rótulos requeridos para garantizar una entrega sin contratiempos.
              </p>

              <h3 className="Respaldo-advantages-title">Control de Calidad</h3>
              <p className="Respaldo-description">
                En el cumplimiento B2B, la conformidad lo es todo. En Shipply nos aseguramos de que tu marca cumpla constantemente con los estándares de presentación y empaque de los retailers.
              </p>

              {/* Lista de Beneficios */}
              <ul className="Respaldo-advantages-list">
                <li> Inspección de primera muestra y control de daños.</li>
                <li> Destrucción certificada y etiquetado de lotes.</li>
                <li> Códigos de barras y seguimiento de fechas de vencimiento.</li>
                <li> Minimización de costos por devoluciones y cargos adicionales.</li>
              </ul>
            </div>
            <Button
              variant="primary"
              size="md"
              className="btn-cta-logistic"
              to="/contacto"
            >
              Iniciemos una conversación
            </Button>
          </Col>
          {/* Imagen a la derecha */}
          <Col md={6} className="text-center">
          <div className="player-container">
              <Player src={images.RespaldoAnimation} className="player" loop autoplay aria-label="Animación del logo de Shipply" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export { LogisticaCreceSection, InovacionSection,RetailersLideresSection,RespaldoSection };
