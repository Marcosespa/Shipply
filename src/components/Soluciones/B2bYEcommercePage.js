import React from "react";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import SolucionLandingLayout from "./SolucionLandingLayout";
import FutureCompareBlock from "./FutureCompareBlock";
import OperationsMetricsStrip from "../Marketing/OperationsMetricsStrip";
import IntegracionesGrid from "../Marketing/IntegracionesGrid";
import FadeIn from "../motion/FadeIn";
import MotionLink from "../motion/MotionLink";

const B2bYEcommercePage = () => {
  const waHref =
    "https://wa.me/573147516693?text=" +
    encodeURIComponent(
      "Hola, integramos B2B contenedores y e-commerce — quiero conocer cómo Shipply puede operar inventario combinado."
    );

  return (
    <SolucionLandingLayout
      helmet={{
        title: "B2B + e-commerce: un mismo inventario operado | Shipply",
        description:
          "Contenedores, abastecimiento a retail y tiempo e-commerce: definimos pools B2B y B2C, operación desde un centro y visible para tus canales.",
        canonicalPath: "/soluciones/b2b-y-ecommerce",
      }}
      heroEyebrow="Solución · Multicanal B2B y B2C"
      heroTitle="Un inventario, dos velocidades — sin dos realidades paralelas."
      heroLead="Si importas por contenedor, abasteces cadenas o distribuidores y además vendes al cliente final, necesitás límites claros de stock, flujos de picking distintos y visibilidad en tiempo casi real. Eso es esta solución."
      contactSearch="?perfil=b2b-ecommerce"
      waHref={waHref}
    >
      <Container>
        <FutureCompareBlock
          title="Las señales de que el B2B y el digital compiten mal"
          withoutList={[
            "El canal digital usa stock que ya estaba comprometido para un pedido grande B2B.",
            "Dos bodegas o dos sistemas crean ‘inventario fantasma’ y nadie tiene la foto completa.",
            "Coordinaciones B2B por WhatsApp sin trazabilidad; el e-commerce pide SLA distinto.",
            "Pedir al mismo equipo que arme pallets y pedidos unitarios multiplica errores.",
          ]}
          withList={[
            "Reglas y segmentación operativa entre pool B2B y B2C (según modelo acordado).",
            "Misma infraestructura física cuando el alcance contractual lo permite — menos duplicar costos fijos.",
            "Integración del canal digital (Shopify, VTEX, marketplaces…) hacia órdenes operables.",
            "Flujos B2B con documentación y empaque conforme a tus destinatarios.",
          ]}
        />

        <div className="sol-future-section">
          <FadeIn className="sol-future-section-head">
            <h2>Qué coordinamos contigo desde el día uno</h2>
            <p>
              Inventario inicial, clase de SKU, políticas de asignación, cortes para despacho y
              formato de comunicación con tu equipo comercial.
            </p>
          </FadeIn>
          <Row className="g-3">
            <Col md={4}>
              <FadeIn className="sol-future-glass h-100" delay={0.04}>
                <h3 className="h6 fw-bold text-white">Ingreso y clasificación</h3>
                <p className="small mb-0 text-white-50">
                  Contenedores y recepciones con conteo conforme lo acordado; SKUs disponibles para
                  operación según modelo.
                </p>
              </FadeIn>
            </Col>
            <Col md={4}>
              <FadeIn className="sol-future-glass h-100" delay={0.1}>
                <h3 className="h6 fw-bold text-white">Canales conectados</h3>
                <p className="small mb-0 text-white-50">
                  El pedido digital entra sistematizado donde la integración esté disponible —
                  menos traspaso manual.
                </p>
              </FadeIn>
            </Col>
            <Col md={4}>
              <FadeIn className="sol-future-glass h-100" delay={0.16}>
                <h3 className="h6 fw-bold text-white">Despacho B2C y B2B</h3>
                <p className="small mb-0 text-white-50">
                  Unitario con imagen de marca cuando aplique; B2B con reglas de empaque y
                  documentos del destinatario.
                </p>
              </FadeIn>
            </Col>
          </Row>
        </div>
      </Container>

      <OperationsMetricsStrip />

      <IntegracionesGrid
        variant="dark"
        title="Integraciones para el canal digital"
        subtitle="El stack B2B puede venir de tu ERP o pedidos estructurados — el digital se conecta con los canales que ya listamos en el sitio."
      />

      <Container>
        <div className="sol-future-section sf-faq">
          <FadeIn className="sol-future-section-head">
            <h2>Preguntas frecuentes</h2>
          </FadeIn>
          <FadeIn y={18}>
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>¿Pueden separar 100 % el stock B2B del B2C?</Accordion.Header>
                <Accordion.Body>
                  Lo definimos por acuerdo: segregación lógica, física o mixta según rotación, riesgo y
                  volumen. Lo importante es que las reglas queden contractuales y auditables.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>¿Atienden requisitos de grandes superficies o retail?</Accordion.Header>
                <Accordion.Body>
                  Depende del destinatario y del estándar. En diagnóstico revisamos checklist de
                  etiquetado, ventanas y documentación — y te decimos si encaja con nuestra operación
                  actual o requiere fase adicional.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>¿Qué pasa con mis importaciones y contenedores?</Accordion.Header>
                <Accordion.Body>
                  Coordinamos la recepción según ventanas y documentos que nos compartas. Detalle
                  aduanero y transporte internacional los define tu cadena de importación; nosotros
                  nos alineamos al plan de ingreso a bodega operativa.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </FadeIn>
        </div>

        <FadeIn className="sf-cta-banner mb-5" y={24}>
          <h2>Ver si encajamos con tu operación mixta</h2>
          <p>Agenda conversación con volumen B2B vs B2C y canales — te proponemos alcance claro.</p>
          <div className="sol-future-cta-row justify-content-center">
            <MotionLink className="sol-future-btn-primary" to="/contacto?perfil=b2b-ecommerce">
              Solicitar diagnóstico
            </MotionLink>
            <MotionLink className="sol-future-btn-ghost" to="/servicios">
              Ver servicios detallados
            </MotionLink>
          </div>
        </FadeIn>
      </Container>
    </SolucionLandingLayout>
  );
};

export default B2bYEcommercePage;
