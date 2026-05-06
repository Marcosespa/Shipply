import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import images from "../assets/images/images";
import { useEnglishMarketingShell } from "../utils/useEnglishMarketingShell";

const Footer = () => {
  const en = useEnglishMarketingShell();

  return (
    <footer className="footer-section">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col xs={12} md={3} className="mb-4 mb-md-0">
            <div className="footer-logo-container">
              <img src={images.ShipplyPNG} alt={en ? "Shipply logo" : "Logo"} className="footer-logo" loading="lazy" />
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="mb-4 mb-md-0">
            <h5 className="footer-title">{en ? "SHIPPLY" : "SHIPPLY"}</h5>
            <ul className="footer-menu">
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/talento">{en ? "Careers" : "Talento"}</Link></li>
              {en ? (
                <li><Link to="/">Spanish site</Link></li>
              ) : (
                <li><Link to="/international">International — EN</Link></li>
              )}
              <li>
                <Link to={en ? "/contacto?lang=en" : "/contacto"}>
                  {en ? "Contact us" : "Asesoría Colombia"}
                </Link>
              </li>
            </ul>
          </Col>

          <Col xs={12} sm={6} md={3} className="mb-4 mb-md-0">
            <h5 className="footer-title">{en ? "PRODUCT" : "PRODUCTO"}</h5>
            <ul className="footer-menu">
              <li><Link to="/servicios">{en ? "Services" : "Servicios"}</Link></li>
              <li><Link to="/servicios#integraciones">{en ? "Integrations" : "Integraciones"}</Link></li>
              <li><Link to="/faq">{en ? "FAQ" : "Preguntas frecuentes (FAQ)"}</Link></li>
            </ul>
          </Col>

          <Col xs={12} md={3} className="mb-4 mb-md-0">
            <h5 className="footer-title">{en ? "LEGAL" : "PRIVACIDAD"}</h5>
            <ul className="footer-menu">
              <li>
                <Link to="/politica-de-privacidad">
                  {en ? "Privacy policy" : "Política de privacidad"}
                </Link>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
          <Col xs={12} className="text-center">
            <div className="social-icons">
              <a href="https://www.linkedin.com/company/shipply-sas" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/shipply.col/" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61550521441472" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook" aria-hidden="true"></i>
              </a>
            </div>
          </Col>
        </Row>

        <Row className="text-center mt-4">
          <Col>
            <p className="footer-rights">
              {en
                ? "© 2025 Shipply. All rights reserved."
                : "© 2025 Todos los derechos reservados."}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
