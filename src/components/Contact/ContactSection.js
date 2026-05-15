import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import "../../styles/Contact/contactsection.css";
import images from "../../assets/images/images";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";
import ContactSectionInternational from "./ContactSectionInternational";

/**
 * Spanish form (default). For international funnel use ?lang=en on the same /contacto path
 * (works reliably on static hosts like Hostinger where subpaths may resolve incorrectly).
 */
const ContactSectionEs = () => {
  const formRef = React.useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    ReactGA.event({
      category: "Contact",
      action: "Submit Form",
      label: "Contact Form",
    });
    const adsId = process.env.REACT_APP_GADS_SEND_TO_ES;
    if (typeof window !== "undefined" && typeof window.gtag === "function" && adsId) {
      window.gtag("event", "conversion", { send_to: adsId });
    }

    if (formRef.current) {
      formRef.current.submit();
    }
  };

  return (
    <>
      <Helmet>
        <title>Contáctanos - Shipply</title>
        <meta
          name="description"
          content="Ponte en contacto con nuestro equipo para resolver tus dudas y empezar a optimizar tu logística."
        />
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
            >
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
                    type="text"
                    name="company"
                    placeholder="Empresa"
                    className="form-control mb-3"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    className="form-control mb-3"
                    required
                  />
                </Col>
                <Col md={6}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono / WhatsApp"
                    className="form-control mb-3"
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <input
                    type="text"
                    name="city"
                    placeholder="Ciudad"
                    className="form-control mb-3"
                  />
                </Col>
                <Col md={6}>
                  <input
                    type="text"
                    name="productType"
                    placeholder="Tipo de producto"
                    className="form-control mb-3"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <input
                    type="text"
                    name="ordersPerMonth"
                    placeholder="Órdenes aproximadas por mes"
                    className="form-control mb-3"
                  />
                </Col>
                <Col md={6}>
                  <input
                    type="text"
                    name="salesChannels"
                    placeholder="Canales de venta (ej. Shopify, ML)"
                    className="form-control mb-3"
                  />
                </Col>
              </Row>
              <input
                type="text"
                name="needToSolve"
                placeholder="¿Qué necesitas resolver?"
                className="form-control mb-3"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Mensaje"
                className="form-control mb-3"
              ></textarea>
              <button
                type="submit"
                className="btn btn-dark w-100"
                onClick={handleFormSubmit}
              >
                Enviar
              </button>
            </form>
            <p className="social-text mt-4">Síguenos en nuestras redes sociales</p>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/shipply.col/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61550521441472"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/shipply-sas"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin"></i>
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
