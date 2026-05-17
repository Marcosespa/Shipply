import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import "../../styles/Contact/contactsection.css";
import images from "../../assets/images/images";
import { Helmet } from "react-helmet";
import ContactSectionInternational from "./ContactSectionInternational";
import { pushLeadSubmitAndContinue } from "../../utils/leadTracking";
import { usePageMeta } from "../../utils/usePageMeta";
import Button from "../ui/Button";

/**
 * Spanish form (default). For international funnel use ?lang=en on the same /contacto path
 * (works reliably on static hosts like Hostinger where subpaths may resolve incorrectly).
 */
const ContactSectionEs = () => {
  const formRef = React.useRef(null);

  usePageMeta({
    title: "Contáctanos - Shipply",
    lang: "es",
    description:
      "Ponte en contacto con nuestro equipo para resolver tus dudas y empezar a optimizar tu logística.",
    canonical: "https://www.shipply.com.co/contacto",
    alternates: [
      { hrefLang: "es", href: "https://www.shipply.com.co/contacto" },
      { hrefLang: "en", href: "https://www.shipply.com.co/contacto?lang=en" },
      { hrefLang: "x-default", href: "https://www.shipply.com.co/contacto" },
    ],
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formRef.current?.reportValidity()) return;

    pushLeadSubmitAndContinue(
      {
        form_type: "contact",
        lang: "es",
      },
      () => formRef.current?.submit()
    );
  };

  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>Contáctanos - Shipply</title>
        <meta
          name="description"
          content="Ponte en contacto con nuestro equipo para resolver tus dudas y empezar a optimizar tu logística."
        />
        <link rel="canonical" href="https://www.shipply.com.co/contacto" />
        <link rel="alternate" hrefLang="es" href="https://www.shipply.com.co/contacto" />
        <link rel="alternate" hrefLang="en" href="https://www.shipply.com.co/contacto?lang=en" />
        <link rel="alternate" hrefLang="x-default" href="https://www.shipply.com.co/contacto" />
      </Helmet>
      <section className="contact-section py-5">
        <Row className="align-items-center gx-1">
          <Col md={6} className="info-section pe-2">
            <img
              src={images.logo7}
              alt="Ilustración Shipply"
              className="illustration-Shipply"
              loading="lazy"
            />
          </Col>

          <Col md={5} className="form-section ps-2">
            <h3 className="form-title">Déjanos un mensaje</h3>
            <p className="form-description">
              Y un asesor se contactará contigo lo antes posible
            </p>
            <form
              ref={formRef}
              action="https://formspree.io/f/xdkaoyaa"
              method="POST"
              onSubmit={handleFormSubmit}
            >
              <Row>
                <Col md={6}>
                  <label className="field-label" htmlFor="contact-name">
                    Nombre completo
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    className="form-control mb-3"
                    required
                  />
                </Col>
                <Col md={6}>
                  <label className="field-label" htmlFor="contact-company">
                    Empresa
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    placeholder="Nombre de tu marca"
                    className="form-control mb-3"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <label className="field-label" htmlFor="contact-email">
                    Correo electrónico
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="correo@empresa.com"
                    className="form-control mb-3"
                    required
                  />
                </Col>
                <Col md={6}>
                  <label className="field-label" htmlFor="contact-phone">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="+57 300 000 0000"
                    className="form-control mb-3"
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <label className="field-label" htmlFor="contact-city">
                    Ciudad
                  </label>
                  <input
                    id="contact-city"
                    type="text"
                    name="city"
                    placeholder="Bogotá, Medellín, Cali..."
                    className="form-control mb-3"
                  />
                </Col>
                <Col md={6}>
                  <label className="field-label" htmlFor="contact-product-type">
                    Tipo de producto
                  </label>
                  <input
                    id="contact-product-type"
                    type="text"
                    name="productType"
                    placeholder="Moda, belleza, hogar..."
                    className="form-control mb-3"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <label className="field-label" htmlFor="contact-orders">
                    Órdenes por mes
                  </label>
                  <input
                    id="contact-orders"
                    type="text"
                    name="ordersPerMonth"
                    placeholder="Ej. 300"
                    className="form-control mb-3"
                  />
                </Col>
                <Col md={6}>
                  <label className="field-label" htmlFor="contact-channels">
                    Canales de venta
                  </label>
                  <input
                    id="contact-channels"
                    type="text"
                    name="salesChannels"
                    placeholder="Shopify, Mercado Libre..."
                    className="form-control mb-3"
                  />
                </Col>
              </Row>
              <label className="field-label" htmlFor="contact-need">
                ¿Qué necesitas resolver?
              </label>
              <input
                id="contact-need"
                type="text"
                name="needToSolve"
                placeholder="Almacenamiento, fulfillment, última milla..."
                className="form-control mb-3"
              />
              <label className="field-label" htmlFor="contact-message">
                Mensaje
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                placeholder="Cuéntanos brevemente sobre tu operación"
                className="form-control mb-3"
              ></textarea>
              <Button
                type="submit"
                variant="secondary"
                fullWidth
              >
                Enviar
              </Button>
            </form>
            <p className="social-text mt-4">Síguenos en nuestras redes sociales</p>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/shipply.col/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shipply en Instagram"
              >
                <i className="bi bi-instagram" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61550521441472"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shipply en Facebook"
              >
                <i className="bi bi-facebook" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/shipply-sas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shipply en LinkedIn"
              >
                <i className="bi bi-linkedin" aria-hidden="true"></i>
              </a>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

const ContactSection = () => {
  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang");

  if (lang === "en") {
    return <ContactSectionInternational />;
  }

  return <ContactSectionEs />;
};

export default ContactSection;
