import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../../styles/Contact/contactsection.css";
import images from "../../assets/images/images";

const ContactSection = () => {
  return (
    <section className="contact-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Ilustración e información */}
          <Col md={6} className="text-center">
            <h2 className="title">Descubre <span className="highlight">Shipply</span></h2>
            <img
              src={images.contactIllustration}
              alt="Descubre Shipply"
              className="img-fluid illustration"
              loading="lazy"
            />
          </Col>

          {/* Formulario de contacto */}
          <Col md={6}>
            <h3 className="form-title">Déjanos un mensaje</h3>
            <p>Y un asesor se contactará contigo lo antes posible</p>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="name" className="mb-3">
                    <Form.Label>Nombre completo</Form.Label>
                    <Form.Control type="text" placeholder="Nombre completo" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="email" className="mb-3">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Correo electrónico" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="productType" className="mb-3">
                    <Form.Label>Tipo de producto</Form.Label>
                    <Form.Control type="text" placeholder="Tipo de producto" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="ordersPerMonth" className="mb-3">
                    <Form.Label>Número de pedidos por mes</Form.Label>
                    <Form.Control type="text" placeholder="Pedidos por mes" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="city" className="mb-3">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control type="text" placeholder="Ciudad" />
              </Form.Group>
              <Form.Group controlId="message" className="mb-3">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Escribe tu mensaje aquí"
                />
              </Form.Group>
              <Button variant="dark" type="submit" className="w-100">
                Enviar
              </Button>
            </Form>
            <p className="social-text mt-3">Síguenos en nuestras redes sociales</p>
            <div className="social-icons">
              <i className="bi bi-instagram"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
