import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../styles/Contact/contactsection.css";
import images from "../../assets/images/images";

const ContactSection = () => {
  return (
    <section className="contact-section py-5">
      <Row className="align-items-center">
        {/* Ilustración e información */}
        <Col md={6} className="text-center">
          <img
            src={images.logo7}
            alt="Logo 7"
            className="img-fluid"
            loading="lazy"
          />
        </Col>

        {/* Formulario de contacto */}
        <Col md={6}>
          <h3 className="form-title">Déjanos un mensaje</h3>
          <p>Y un asesor se contactará contigo lo antes posible</p>
          <form action="https://formspree.io/f/myzyqebw" method="POST">
            <Row>
              <Col md={6}>
                <div className="form-group mb-3">
                  <label htmlFor="name">Nombre completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nombre completo"
                    required
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group mb-3">
                  <label htmlFor="email">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Correo electrónico"
                    required
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="form-group mb-3">
                  <label htmlFor="productType">Tipo de producto</label>
                  <input
                    type="text"
                    id="productType"
                    name="productType"
                    placeholder="Tipo de producto"
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group mb-3">
                  <label htmlFor="ordersPerMonth">
                    Número de pedidos por mes
                  </label>
                  <input
                    type="text"
                    id="ordersPerMonth"
                    name="ordersPerMonth"
                    placeholder="Pedidos por mes"
                  />
                </div>
              </Col>
            </Row>
            <div className="form-group mb-3">
              <label htmlFor="city">Ciudad</label>
              <input type="text" id="city" name="city" placeholder="Ciudad" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Escribe tu mensaje aquí"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-dark w-100">
              Enviar
            </button>
          </form>
          <p className="social-text mt-3">
            Síguenos en nuestras redes sociales
          </p>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/shipply.col/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61550521441472"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/shipply-sas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default ContactSection;
