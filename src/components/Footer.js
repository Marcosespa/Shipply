import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/footer.css";
import images from "../assets/images/images";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          {/* Logo */}
          <Col md={3} className="footer-col text-center text-md-start">
            <img src={images.ShipplyPNG} alt="Logo" className="footer-logo" />
          </Col>

          {/* Sección de menú */}
          <Col md={3} className="footer-col">
            <h5 className="footer-title">SHIPPLY</h5>
            <ul className="footer-menu">
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#casos">Casos de éxito</a>
              </li>
              <li>
                <a href="#talento">Talento</a>
              </li>
              <li>
                <a href="#prensa">Prensa y Medios</a>
              </li>
              <li>
                <a href="#asesoria-colombia">Asesoría Colombia</a>
              </li>
            </ul>
          </Col>

          {/* Sección de producto */}
          <Col md={3} className="footer-col">
            <h5 className="footer-title">PRODUCTO</h5>
            <ul className="footer-menu">
              <li>
                <a href="#fulfillment">Fulfillment</a>
              </li>
              <li>
                <a href="#centros">Centros de fulfillment</a>
              </li>
              <li>
                <a href="#integraciones">Integraciones</a>
              </li>
              <li>
                <a href="#faq">Preguntas frecuentes (FAQ)</a>
              </li>
            </ul>
          </Col>

          {/* Sección de privacidad */}
          <Col md={3} className="footer-col">
            <h5 className="footer-title">PRIVACIDAD</h5>
            <ul className="footer-menu">
              <li>
                <a href="#politica-privacidad">Política de privacidad</a>
              </li>
              <li>
                <a href="#proteccion-datos">
                  Política de protección de datos Colombia
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        {/* Redes sociales */}
        <Row className="mt-4 justify-content-center text-center">
          <Col md={12}>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/company/shipply-sas"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/shipply.col/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61550521441472"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </Col>
        </Row>
        {/* Derechos reservados */}
        <Row className="text-center mt-4">
          <Col>
            <p className="footer-rights">
              © 2025 Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
