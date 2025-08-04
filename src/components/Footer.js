import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importa Link
import "../styles/footer.css";
import images from "../assets/images/images";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          {/* Logo */}
          <Col xs={12} md={3} className="mb-4 mb-md-0">
            <div className="footer-logo-container">
              <img src={images.ShipplyPNG} alt="Logo" className="footer-logo" loading="lazy" />
            </div>
          </Col>

          {/* SHIPPLY Section */}
          <Col xs={12} sm={6} md={3} className="mb-4 mb-md-0">
            <h5 className="footer-title">SHIPPLY</h5>
            <ul className="footer-menu">
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/talento">Talento</Link></li>
              <li><Link to="/contacto">Asesoría Colombia</Link></li>
            </ul>
          </Col>

          {/* PRODUCTO Section */}
          <Col xs={12} sm={6} md={3} className="mb-4 mb-md-0">
            <h5 className="footer-title">PRODUCTO</h5>
            <ul className="footer-menu">
              <li><Link to="/servicios">Servicios</Link></li>
              <li><Link to="/servicios#integraciones">Integraciones</Link></li>
              <li><Link to="/faq">Preguntas frecuentes (FAQ)</Link></li>
            </ul>
          </Col>

          {/* PRIVACIDAD Section */}
          <Col xs={12} md={3} className="mb-4 mb-md-0">
            <h5 className="footer-title">PRIVACIDAD</h5>
            <ul className="footer-menu">
              <li><Link to="/politica-de-privacidad">Política de privacidad</Link></li>
            </ul>
          </Col>
        </Row>

        {/* Redes sociales */}
        <Row className="justify-content-center mt-4">
          <Col xs={12} className="text-center">
            <div className="social-icons">
              <a href="https://www.linkedin.com/company/shipply-sas" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/shipply.col/" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61550521441472" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </Col>
        </Row>

        {/* Derechos reservados */}
        <Row className="text-center mt-4">
          <Col>
            <p className="footer-rights">© 2025 Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>

    </footer>
  );
};

export default Footer;
