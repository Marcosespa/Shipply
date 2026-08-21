import React from "react";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import SolucionLandingLayout from "./SolucionLandingLayout";
import FutureCompareBlock from "./FutureCompareBlock";
import OperationsMetricsStrip from "../Marketing/OperationsMetricsStrip";
import IntegracionesGrid from "../Marketing/IntegracionesGrid";
import FadeIn from "../motion/FadeIn";
import MotionLink from "../motion/MotionLink";

const InternacionalColombiaPage = () => {
  const waHref =
    "https://wa.me/573147516693?text=" +
    encodeURIComponent(
      "Hola, somos marca internacional y necesitamos importador de registro, facturación y fulfillment en Colombia con Shipply."
    );

  return (
    <SolucionLandingLayout
      helmet={{
        title: "Marcas internacionales en Colombia | Importer of record, facturación y fulfillment",
        description:
          "Opera en Colombia con esquema extendido: importador de registro donde aplique, facturación al consumidor, recaudo y envío — además de fulfillment y canales.",
        canonicalPath: "/soluciones/internacional-colombia",
      }}
      heroEyebrow="Solución · Internacional"
      heroTitle="Vendé al mercado colombiano sin improvisar compliance ni cobranza."
      heroLead="Para marcas en el exterior que necesitan más que bodega: apoyamos esquemas con importador de registro y registros sanitarios cuando corresponde, facturación al cliente final, recaudo y última milla en Bogotá, Cali y Medellín — integrado con tu canal de venta cuando aplica."
      contactSearch="?perfil=internacional"
      waHref={waHref}
    >
      <Container>
        <div className="sol-future-section">
          <FadeIn className="sol-future-glass" y={18}>
            <p className="small text-white-50 mb-2">
              También tenemos material en inglés para equipos globales.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <MotionLink className="sol-future-btn-ghost py-2 px-3" to="/international">
                Ver landing internacional (EN)
              </MotionLink>
              <MotionLink className="sol-future-btn-ghost py-2 px-3" to="/contacto?lang=en">
                Contacto en inglés
              </MotionLink>
            </div>
          </FadeIn>
        </div>

        <FutureCompareBlock
          title="Por qué el ‘solo fulfillment’ no alcanza en tu caso"
          withoutList={[
            "Facturación y recaudo local mal resueltos generan fricción con el cliente y contabilidad duplicada.",
            "Importador de registro y registros no negociados a tiempo bloquean ingreso de stock.",
            "El HQ no tiene visibilidad homogénea de pedidos, inventario y estados de cobro.",
            "Varios proveedores fragmentados = más contratos y menos control de experiencia.",
          ]}
          withList={[
            "Diseño del esquema comercial y operativo con transparencia de alcance y responsables.",
            "Fulfillment y canales conectados cuando el stack lo permite (Shopify, marketplaces, etc.).",
            "Componentes de facturación y recaudo al consumidor según modelo acordado.",
            "Acompañamiento para alinear expectativas de tiempos y cumplimiento regulatorio en Colombia.",
          ]}
        />

        <div className="sol-future-section">
          <FadeIn className="sol-future-section-head">
            <h2>Capacidades que típicamente negociamos</h2>
            <p>Sujeto a viabilidad legal, volumen y due diligence.</p>
          </FadeIn>
          <Row className="g-3">
            <Col md={6} lg={3}>
              <FadeIn className="sol-future-glass h-100" delay={0.04}>
                <h3 className="h6 fw-bold text-white">Importer of record</h3>
                <p className="small mb-0 text-white-50">
                  Donde aplique junto con registro sanitario u otros permisos según categoría.
                </p>
              </FadeIn>
            </Col>
            <Col md={6} lg={3}>
              <FadeIn className="sol-future-glass h-100" delay={0.09}>
                <h3 className="h6 fw-bold text-white">Facturación cliente final</h3>
                <p className="small mb-0 text-white-50">
                  Emisión conforme modelo tributario acordado y canales que utilices.
                </p>
              </FadeIn>
            </Col>
            <Col md={6} lg={3}>
              <FadeIn className="sol-future-glass h-100" delay={0.14}>
                <h3 className="h6 fw-bold text-white">Recaudo</h3>
                <p className="small mb-0 text-white-50">
                  Flujos de cobro locales alineados a tu ecommerce o marketplace cuando el esquema
                  lo permite.
                </p>
              </FadeIn>
            </Col>
            <Col md={6} lg={3}>
              <FadeIn className="sol-future-glass h-100" delay={0.19}>
                <h3 className="h6 fw-bold text-white">Envío última milla</h3>
                <p className="small mb-0 text-white-50">
                  Coordinación de entrega en Bogotá, Cali y Medellín y nacional con aliados, con trazabilidad
                  hasta el comprador final.
                </p>
              </FadeIn>
            </Col>
          </Row>
        </div>
      </Container>

      <OperationsMetricsStrip />

      <IntegracionesGrid
        variant="dark"
        title="Tus canales de venta"
        subtitle="Mismos conectores que mostramos en el sitio: evaluamos contigo cuáles aplica tu modelo internacional."
      />

      <Container>
        <div className="sol-future-section sf-faq">
          <FadeIn className="sol-future-section-head">
            <h2>Preguntas frecuentes</h2>
          </FadeIn>
          <FadeIn y={18}>
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  ¿Esto sustituye a mi asesor legal o tributario local?
                </Accordion.Header>
                <Accordion.Body>
                  No. Te orientamos desde la operación y el modelo de servicio que podemos cargar en
                  Shipply. Las decisiones fiscales y legales finales son con tus asesores y bajo tus
                  contratos.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>¿Pueden operar solo algunas líneas SKU?</Accordion.Header>
                <Accordion.Body>
                  Sí. Es común iniciar por catálogo piloto para validar ingreso de mercancía,
                  niveles de servicio y canales antes de escalar volumen en Colombia.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>¿Cómo empezamos si el equipo está en otra zona horaria?</Accordion.Header>
                <Accordion.Body>
                  Usamos la landing en inglés y contacto bilingual; agendamos ventanas para legal,
                  cadena de suministro y marketing con un solo punto de cuenta en Shipply.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </FadeIn>
        </div>

        <FadeIn className="sf-cta-banner mb-5" y={24}>
          <h2>Hablemos de tu entrada a Colombia</h2>
          <p>
            Envíanos sitio web, país de origen del producto, categoría regulatoria sensible y canales 
            donde vendés hoy.
          </p>
          <div className="sol-future-cta-row justify-content-center">
            <MotionLink className="sol-future-btn-primary" to="/contacto?perfil=internacional">
              Contactar en español
            </MotionLink>
            <MotionLink className="sol-future-btn-primary" style={{ opacity: 0.95 }} to="/international">
              Overview in English
            </MotionLink>
          </div>
        </FadeIn>
      </Container>
    </SolucionLandingLayout>
  );
};

export default InternacionalColombiaPage;
