import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importa Link
import "../styles/footer.css";
import images from "../assets/images/images";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="align-items-center">
          {/* Logo */}
          <Col md={3} className="footer-col text-center text-md-start">
            <div className="footer-logo-container">
              <img src={images.ShipplyPNG} alt="Logo" className="footer-logo" />
            </div>
          </Col>

          {/* Sección de menú */}
          <Col md={3} className="footer-col">
            <h5 className="footer-title">SHIPPLY</h5>
            <ul className="footer-menu">
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <a href="#casos">Casos de éxito</a> {/* Sigue siendo un hash */}
              </li>
              <li>
                <Link to="/talento">Talento</Link>
              </li>
              <li>
                <Link to="/contacto">Asesoría Colombia</Link>
              </li>
            </ul>
          </Col>

          {/* Sección de producto */}
          <Col md={3} className="footer-col">
            <h5 className="footer-title">PRODUCTO</h5>
            <ul className="footer-menu">
              <li>
                <Link to="/servicios">Servicios</Link>
              </li>
              <li>
                <Link to="/servicios#integraciones">Integraciones</Link>
              </li>
              <li>
              <Link to="/faq">Preguntas frecuentes (FAQ)</Link>
              </li>
            </ul>
          </Col>

          {/* Sección de privacidad */}
          <Col md={3} className="footer-col">
            <h5 className="footer-title">PRIVACIDAD</h5>
            <ul className="footer-menu">
              <li>
                <Link to="/politica-de-privacidad">Política de privacidad</Link>
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
