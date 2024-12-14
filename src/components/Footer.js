import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/footer.css';
import images from '../assets/images/images';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          {/* Logo y social media */}
          <Col md={4} className="footer-col">
            <div className="footer-logo">
            <img src={images.logo1} alt="Logo" className="footer-logo" />
            </div>
            <div className="social-icons">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </Col>

          {/* Sección de menú */}
          <Col md={4} className="footer-col">
            <h5>Menú</h5>
            <ul className="footer-menu">
              <li><a href="#blog">Blog</a></li>
              <li><a href="#casos">Casos de éxito</a></li>
              <li><a href="#talento">Talento</a></li>
              <li><a href="#prensa">Prensa y medios</a></li>
            </ul>
          </Col>

          {/* Política de privacidad */}
          <Col md={4} className="footer-col">
            <h5>Privacidad</h5>
            <ul className="footer-menu">
              <li><a href="#privacidad">Política de privacidad</a></li>
              <li><a href="#datos">Protección de datos</a></li>
              <li><a href="#mexico">Aviso de privacidad México</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>
            <p>© 2025 Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
