import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/footer.css";
import "../styles/footer-shipply-v2.css";
import images from "../assets/images/images";
import { useEnglishMarketingShell } from "../utils/useEnglishMarketingShell";
import FadeIn from "./motion/FadeIn";
import StaggerSection from "./motion/StaggerSection";

const Footer = () => {
  const en = useEnglishMarketingShell();

  return (
    <StaggerSection as="footer" className={`footer-section ${!en ? "footer-shipply-v2" : ""}`}>
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col xs={12} md={!en ? 2 : 3} className="mb-4 mb-md-0">
            <FadeIn y={14}>
              <div className="footer-logo-container">
                <img src={images.ShipplyPNG} alt={en ? "Shipply logo" : "Logo"} className="footer-logo" loading="lazy" />
              </div>
              {!en && (
                <p className="footer-tagline small mt-2 mb-0">
                  Fulfillment y logística para marcas que venden en Colombia.
                </p>
              )}
            </FadeIn>
          </Col>

          <Col xs={12} sm={6} md={!en ? 2 : 3} className="mb-4 mb-md-0">
            <FadeIn delay={0.04} y={14}>
              <h5 className="footer-title">SHIPPLY</h5>
              <ul className="footer-menu">
                {en ? (
                  <>
                    <li><Link to="/international">International home</Link></li>
                    <li><Link to="/contacto?lang=en">Contact us</Link></li>
                    <li><Link to="/">Spanish site</Link></li>
                  </>
                ) : (
                  <>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/talento">Talento</Link></li>
                    <li><Link to="/international">International — EN</Link></li>
                  </>
                )}
                <li>
                  {en ? (
                    <HashLink smooth to="/international#faq">FAQ</HashLink>
                  ) : (
                    <Link to="/contacto">Contacto / cotización</Link>
                  )}
                </li>
              </ul>
            </FadeIn>
          </Col>

          {!en && (
            <Col xs={12} sm={6} md={4} className="mb-4 mb-md-0">
              <FadeIn delay={0.08} y={14}>
                <h5 className="footer-title">SOLUCIONES</h5>
                <ul className="footer-menu mb-4">
                  <li>
                    <Link to="/soluciones/marca-digital-colombiana">Marca digital</Link>
                  </li>
                  <li>
                    <Link to="/soluciones/b2b-y-ecommerce">B2B + e‑commerce</Link>
                  </li>
                  <li>
                    <Link to="/soluciones/internacional-colombia">Internacional</Link>
                  </li>
                </ul>
                <h5 className="footer-title">EXPLORAR</h5>
                <ul className="footer-menu">
                  <li><HashLink smooth to="/#que-hacemos">Qué hacemos</HashLink></li>
                  <li><HashLink smooth to="/#servicios">Servicios</HashLink></li>
                  <li><HashLink smooth to="/#casos">Casos de uso</HashLink></li>
                  <li><HashLink smooth to="/#faq">Preguntas</HashLink></li>
                </ul>
              </FadeIn>
            </Col>
          )}

          <Col xs={12} sm={6} md={!en ? 2 : 3} className="mb-4 mb-md-0">
            <FadeIn delay={0.12} y={14}>
              <h5 className="footer-title">{en ? "PRODUCT" : "PRODUCTO"}</h5>
              <ul className="footer-menu">
                {en ? (
                  <>
                    <li><HashLink smooth to="/international#platform">Platform</HashLink></li>
                    <li><HashLink smooth to="/international#how-it-works">Process</HashLink></li>
                    <li><HashLink smooth to="/international#included">Included</HashLink></li>
                  </>
                ) : (
                  <>
                    <li><Link to="/servicios">Servicios</Link></li>
                    <li><Link to="/servicios#integraciones">Integraciones</Link></li>
                    <li><Link to="/faq">Preguntas frecuentes (FAQ)</Link></li>
                  </>
                )}
              </ul>
            </FadeIn>
          </Col>

          <Col xs={12} md={!en ? 2 : 3} className="mb-4 mb-md-0">
            <FadeIn delay={0.16} y={14}>
              <h5 className="footer-title">{en ? "LEGAL" : "PRIVACIDAD"}</h5>
              <ul className="footer-menu">
                <li>
                  <Link to="/politica-de-privacidad">
                    {en ? "Privacy policy (Spanish)" : "Política de privacidad"}
                  </Link>
                </li>
              </ul>
            </FadeIn>
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
          <Col xs={12} className="text-center">
            <FadeIn className="social-icons" delay={0.12} y={12}>
              <a
                href="https://www.linkedin.com/company/shipply-sas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={en ? "Shipply on LinkedIn" : "Shipply en LinkedIn"}
              >
                <i className="bi bi-linkedin" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.instagram.com/shipply.col/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={en ? "Shipply on Instagram" : "Shipply en Instagram"}
              >
                <i className="bi bi-instagram" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61550521441472"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={en ? "Shipply on Facebook" : "Shipply en Facebook"}
              >
                <i className="bi bi-facebook" aria-hidden="true"></i>
              </a>
            </FadeIn>
          </Col>
        </Row>

        <Row className="text-center mt-4">
          <Col>
            <FadeIn as="div" delay={0.14} y={10}>
            <p className="footer-rights">
              {en
                ? "© 2026 Shipply. All rights reserved."
                : "© 2026 Shipply. Todos los derechos reservados."}
            </p>
            </FadeIn>
          </Col>
        </Row>
      </Container>
    </StaggerSection>
  );
};

export default Footer;
