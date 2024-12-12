import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/footer.css';
import images from '../assets/images/images';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="align-items-center">
          {/* Logo */}
          <Col md={4} className="text-center">
            <img src={images.logo1} alt="Logo" className="footer-logo" />
            <div className="social-icon">
              <a
                href="https://www.instagram.com/shipply.col/"
                target="_blank"
                rel="noreferrer"
                className="instagram-icon"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </Col>

          {/* Menú */}
          <Col md={4}>
            <h5 className="text-warning">Menú</h5>
            <ul className="footer-menu">
              <li>
                <a href="#inicio">Inicio</a>
              </li>
              <li>
                <a href="#servicios">Servicios</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
              <li>
                <a href="#privacidad">Política de privacidad</a>
              </li>
            </ul>
          </Col>

          {/* Contacto */}
          <Col md={4}>
            <h5 className="text-warning">Contacto</h5>
            <ul className="footer-contact">
              <li>
                <i className="bi bi-telephone"></i> +57 3184516959
              </li>
              <li>
                <i className="bi bi-envelope"></i> alejandrareina@shipply.com.co
              </li>
              <li>
                <i className="bi bi-geo-alt"></i> Carrera 36 # 11A-32, Bogotá,
                Colombia
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
