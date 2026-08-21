import React from "react";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import SolucionLandingLayout from "./SolucionLandingLayout";
import FutureCompareBlock from "./FutureCompareBlock";
import OperationsMetricsStrip from "../Marketing/OperationsMetricsStrip";
import IntegracionesGrid from "../Marketing/IntegracionesGrid";
import FadeIn from "../motion/FadeIn";
import MotionLink from "../motion/MotionLink";

const MarcaDigitalColombianaPage = () => {
  const waHref =
    "https://wa.me/573147516693?text=" +
    encodeURIComponent(
      "Hola, soy una marca nacional de e-commerce y quiero evaluar fulfillment con Shipply."
    );

  return (
    <SolucionLandingLayout
      helmet={{
        title:
          "Fulfillment para marca digital en Colombia | Shipply — e-commerce nacional",
        description:
          "Escala tu e-commerce nacional sin montar bodega: inventario, picking, packing con tu marca, integraciones con tus canales y última milla en Bogotá, Cali y Medellín con cobertura nacional.",
        canonicalPath: "/soluciones/marca-digital-colombiana",
      }}
      heroEyebrow="Solución · E-commerce nacional"
      heroTitle="Tu marca digital creció. La operación no tiene que frenarte."
      heroLead="Fulfillment pensado para marcas que venden en Colombia por tienda propia y marketplaces: recibimos inventario, lo operamos con trazabilidad, integramos canales cuando aplica y despachamos con estándares de presentación para tu cliente."
      contactSearch="?perfil=marca-digital"
      waHref={waHref}
    >
      <Container>
        <FutureCompareBlock
          title="¿Te suena esta realidad?"
          withoutList={[
            "En temporada alta el despacho se atrasa y el equipo vive ‘apagando incendios’.",
            "El inventario en la tienda no refleja lo que hay físicamente: sobreventas o stock muerto.",
            "Cada canal nuevo parece otro proyecto: más hojas, más errores.",
            "Un pedido mal empacado pasa de ser tema logístico a crisis de marca.",
          ]}
          withList={[
            "Flujo de órdenes e inventario pensado para e-commerce — con visibilidad y acuerdos claros.",
            "Picking y packing con protocolo para cuidar unboxing y consistencia.",
            "Integración de canales (Shopify, WooCommerce, marketplaces…) según alcance contratado.",
            "Última milla y seguimiento alineados a tu promesa comercial.",
          ]}
        />

        <div className="sol-future-section">
          <FadeIn className="sol-future-section-head">
            <h2>Para quién está hecha esta solución</h2>
            <p>
              Marcas nacionales con venta online estable o en rampa, omnicanal básico o marketplace
              + web.
            </p>
          </FadeIn>
          <Row className="g-3">
            <Col md={4}>
              <FadeIn className="sol-future-glass h-100" delay={0.04}>
                <h3 className="h6 fw-bold text-white">D2C estable</h3>
                <p className="small mb-0 text-white-50">
                  Marcas que ya facturan recurrente por web y quieren menos fricción operativa.
                </p>
              </FadeIn>
            </Col>
            <Col md={4}>
              <FadeIn className="sol-future-glass h-100" delay={0.1}>
                <h3 className="h6 fw-bold text-white">Marketplace-first</h3>
                <p className="small mb-0 text-white-50">
                  Cuando Mercado Libre, Rappi u otros canales mueven el volumen principal.
                </p>
              </FadeIn>
            </Col>
            <Col md={4}>
              <FadeIn className="sol-future-glass h-100" delay={0.16}>
                <h3 className="h6 fw-bold text-white">Listas para temporada</h3>
                <p className="small mb-0 text-white-50">
                  Picos de demanda donde el equipo interno ya no absorbe errores ni retrasos.
                </p>
              </FadeIn>
            </Col>
          </Row>
        </div>
      </Container>

      <OperationsMetricsStrip />

      <IntegracionesGrid
        variant="dark"
        title="Conectamos donde vendés hoy — y donde quieras vender después"
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
                  ¿Solo sirve si soy 100 % marketplace o también tienda propia?
                </Accordion.Header>
                <Accordion.Body>
                  Diseñamos el esquema según tus canales. Lo habitual es tienda Shopify/WooCommerce
                  y/o Mercado Libre, Rappi y similares: lo validamos en comercial para dejar alcance de
                  integración por escrito.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>¿Puedo usar mis cajas, stickers y notas?</Accordion.Header>
                <Accordion.Body>
                  Sí cuando el contrato contempla materiales propios de marca y protocolos de armado:
                  definimos versiones estándares y cómo ejecutarlas en temporada alta.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>¿Hay número mínimo de pedidos?</Accordion.Header>
                <Accordion.Body>
                  Hay un volumen donde el modelo de fulfillment tiene sentido económico. En la
                  reunión inicial hablamos de pedidos mensuales, ticket y SKUs para recomendar el
                  esquema adecuado.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </FadeIn>
        </div>

        <FadeIn className="sf-cta-banner mb-5" y={24}>
          <h2>Diagnóstico rápido</h2>
          <p>
            Contanos tus canales, volumen aproximado y ciudad objetivo — te orientamos sobre
            siguiente paso y modelo.
          </p>
          <div className="sol-future-cta-row justify-content-center">
            <MotionLink className="sol-future-btn-primary" to="/contacto?perfil=marca-digital">
              Solicitar reunión
            </MotionLink>
            <MotionLink className="sol-future-btn-ghost" to="/">
              Volver al inicio
            </MotionLink>
          </div>
        </FadeIn>
      </Container>
    </SolucionLandingLayout>
  );
};

export default MarcaDigitalColombianaPage;
