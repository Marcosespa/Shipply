import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../styles/Contact/contactsection.css";
import images from "../../assets/images/images";

const ContactSection = () => {
  return (
    <section className="contact-section py-5">
      <Row className="align-items-center gx-1">
        {/* Columna de la imagen */}
        <Col md={6} className="info-section pe-2">
          <img
            src={images.logo7}
            alt="Ilustración Shipply"
            className="illustration-Shipply"
            loading="lazy"
          />
        </Col>

        {/* Formulario */}
        <Col md={5} className="form-section ps-2">
        <h3 className="form-title">Déjanos un mensaje</h3>
          <p className="form-description">
            Y un asesor se contactará contigo lo antes posible
          </p>
          <form action="https://formspree.io/f/myzyqebw" method="POST">
            <Row>
              <Col md={6}>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre completo"
                  className="form-control mb-3"
                  required
                />
              </Col>
              <Col md={6}>
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  className="form-control mb-3"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <input
                  type="text"
                  name="productType"
                  placeholder="Tipo de producto"
                  className="form-control mb-3"
                />
              </Col>
              <Col md={6}>
                <input
                  type="text"
                  name="ordersPerMonth"
                  placeholder="Número de pedidos por mes"
                  className="form-control mb-3"
                />
              </Col>
            </Row>
            <input
              type="text"
              name="city"
              placeholder="Ciudad"
              className="form-control mb-3"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Mensaje"
              className="form-control mb-3"
            ></textarea>
            <button type="submit" className="btn btn-dark w-100">
              Enviar
            </button>
          </form>
          <p className="social-text mt-4">Síguenos en nuestras redes sociales</p>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default ContactSection;
