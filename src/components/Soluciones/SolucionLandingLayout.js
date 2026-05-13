import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import FadeIn from "../motion/FadeIn";
import MotionLink from "../motion/MotionLink";
import StaggerSection from "../motion/StaggerSection";
import "../../styles/marketing-futuristic.css";

const defaultWa =
  "https://wa.me/573147516693?text=" +
  encodeURIComponent(
    "Hola, quiero información sobre Shipply según la solución que estoy viendo en la web."
  );

/**
 * @param {{
 *   helmet: { title: string, description: string, canonicalPath?: string },
 *   heroEyebrow: string,
 *   heroTitle: string,
 *   heroLead: string,
 *   contactSearch?: string,
 *   waHref?: string,
 *   children: React.ReactNode,
 * }} props
 */
const SolucionLandingLayout = ({
  helmet,
  heroEyebrow,
  heroTitle,
  heroLead,
  contactSearch = "",
  waHref = defaultWa,
  children,
}) => {
  const contactTo = `/contacto${contactSearch || ""}`;

  return (
    <>
      <Helmet>
        <title>{helmet.title}</title>
        <meta name="description" content={helmet.description} />
        {helmet.canonicalPath ? (
          <link rel="canonical" href={`https://www.shipply.com.co${helmet.canonicalPath}`} />
        ) : null}
      </Helmet>
      <div className="soluciones-future">
        <StaggerSection as="header" className="sol-future-hero" delayChildren={0.08} staggerChildren={0.09}>
          <Container fluid="xxl" className="px-3 px-lg-4">
            <Row className="align-items-center gy-5 sol-future-hero-row">
              <Col lg={7}>
                <FadeIn y={32} duration={0.5}>
                  <span className="sol-future-badge" aria-hidden>
                    <span className="sol-future-badge-dot" />
                    Solución Shipply
                  </span>
                </FadeIn>
                <FadeIn y={26} duration={0.52} delay={0.07}>
                  <p className="sol-future-eyebrow">{heroEyebrow}</p>
                </FadeIn>
                <FadeIn y={34} duration={0.56} delay={0.13}>
                  <h1 className="sol-future-display-head">{heroTitle}</h1>
                </FadeIn>
                <FadeIn y={24} duration={0.52} delay={0.22}>
                  <p className="sol-future-lead">{heroLead}</p>
                </FadeIn>
                <FadeIn className="sol-future-cta-row" delay={0.34} y={26} duration={0.52}>
                  <MotionLink className="sol-future-btn-primary" to={contactTo}>
                    Hablar con un asesor
                  </MotionLink>
                  <MotionLink
                    className="sol-future-btn-ghost"
                    href={waHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </MotionLink>
                  <MotionLink className="sol-future-btn-ghost" to="/servicios#integraciones">
                    Ver integraciones
                  </MotionLink>
                </FadeIn>
              </Col>
              <Col lg={5} className="d-none d-lg-block">
                <FadeIn className="sol-future-hero-aside" delay={0.12} y={40}>
                  <p className="sol-future-aside-kicker">Qué consolidamos</p>
                  <ul className="sol-future-aside-list">
                    <li>Canal de venta → WMS y despacho</li>
                    <li>Última milla y estados compartibles</li>
                    <li>Equipo comercial y operativo local</li>
                  </ul>
                  <div className="sol-future-aside-meta">
                    <span>Bogotá · Cali · Medellín</span>
                    <span className="sol-future-aside-pipe">·</span>
                    <span>Nacional</span>
                  </div>
                </FadeIn>
              </Col>
            </Row>
          </Container>
        </StaggerSection>
        {children}
      </div>
    </>
  );
};

export default SolucionLandingLayout;
