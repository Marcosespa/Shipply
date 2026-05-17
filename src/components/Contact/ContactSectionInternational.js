import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import "../../styles/Contact/contactsection.css";
import images from "../../assets/images/images";
import { pushLeadSubmitAndContinue } from "../../utils/leadTracking";
import { usePageMeta } from "../../utils/usePageMeta";
import Button from "../ui/Button";
import {
  captureAndStoreUtms,
  getStoredUtms,
  formatUtmsForLabel,
} from "../../utils/utm";
/** Paste your Typeform embed URL (Share → embed) if you use Typeform instead of the HTML form. */
const TYPEFORM_EMBED_URL = process.env.REACT_APP_TYPEFORM_EMBED_URL;

const ContactSectionInternational = () => {
  const location = useLocation();
  const formRef = useRef(null);
  const [utms, setUtms] = useState(() => getStoredUtms());

  usePageMeta({
    title: "Contact us — Shipply | Colombia market entry",
    lang: "en",
    description:
      "Reach Shipply for international market entry: warehousing, fulfillment, and local billing in Colombia.",
    canonical: "https://www.shipply.com.co/contacto?lang=en",
    alternates: [
      { hrefLang: "es", href: "https://www.shipply.com.co/contacto" },
      { hrefLang: "en", href: "https://www.shipply.com.co/contacto?lang=en" },
      { hrefLang: "x-default", href: "https://www.shipply.com.co/contacto" },
    ],
  });

  useEffect(() => {
    captureAndStoreUtms(location.search);
    setUtms(getStoredUtms());
    ReactGA.event({
      category: "International",
      action: "Contact Page View",
      label: formatUtmsForLabel(getStoredUtms()),
    });
  }, [location.search]);

  if (TYPEFORM_EMBED_URL) {
    return (
      <div lang="en">
        <Helmet>
          <html lang="en" />
          <title>Contact us — Shipply | Colombia market entry</title>
          <meta
            name="description"
            content="Reach Shipply for international market entry: warehousing, fulfillment, and local billing in Colombia."
          />
          <link rel="canonical" href="https://www.shipply.com.co/contacto?lang=en" />
          <link rel="alternate" hrefLang="es" href="https://www.shipply.com.co/contacto" />
          <link rel="alternate" hrefLang="en" href="https://www.shipply.com.co/contacto?lang=en" />
          <link rel="alternate" hrefLang="x-default" href="https://www.shipply.com.co/contacto" />
        </Helmet>
        <section className="contact-section py-5">
          <Container>
            <h3 className="form-title mb-3">Get in touch</h3>
            <p className="form-description mb-4">
              Complete the short form below. Our team replies in English.
            </p>
            <iframe
              title="Shipply international contact"
              src={TYPEFORM_EMBED_URL}
              width="100%"
              height="600"
              style={{ border: 0 }}
              loading="lazy"
              allow="microphone; camera; geolocation"
            />
          </Container>
        </section>
      </div>
    );
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formRef.current?.reportValidity()) return;

    pushLeadSubmitAndContinue(
      {
        form_type: "contact",
        lang: "en",
        utms: getStoredUtms(),
      },
      () => formRef.current?.submit()
    );
  };

  return (
    <div lang="en">
      <Helmet>
        <html lang="en" />
        <title>Contact us — Shipply | Colombia market entry</title>
        <meta
          name="description"
          content="Reach Shipply for international market entry: warehousing, fulfillment, and local billing in Colombia."
        />
        <link rel="canonical" href="https://www.shipply.com.co/contacto?lang=en" />
        <link rel="alternate" hrefLang="es" href="https://www.shipply.com.co/contacto" />
        <link rel="alternate" hrefLang="en" href="https://www.shipply.com.co/contacto?lang=en" />
        <link rel="alternate" hrefLang="x-default" href="https://www.shipply.com.co/contacto" />
      </Helmet>
      <section className="contact-section py-5">
        <Row className="align-items-center gx-1">
          <Col md={6} className="info-section pe-2">
            <img
              src={images.logo7}
              alt="Shipply illustration"
              className="illustration-Shipply"
              loading="lazy"
            />
          </Col>

          <Col md={5} className="form-section ps-2">
            <h3 className="form-title">Get in touch</h3>
            <p className="form-description">
              Our team will reply as soon as possible. English correspondence available.
            </p>
            <form
              ref={formRef}
              action="https://formspree.io/f/xdkaoyaa"
              method="POST"
              onSubmit={handleFormSubmit}
            >
              <input type="hidden" name="lead_source" value="international_en" />
              <input
                type="hidden"
                name="_subject"
                value="[Shipply] International lead — English form"
              />
              {Object.entries(utms).map(([k, v]) => (
                <input key={k} type="hidden" name={k} value={v} />
              ))}
              <Row>
                <Col md={6}>
                  <label className="field-label" htmlFor="intl-contact-name">
                    Full name
                  </label>
                  <input
                    id="intl-contact-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="form-control mb-3"
                    required
                  />
                </Col>
                <Col md={6}>
                  <label className="field-label" htmlFor="intl-contact-email">
                    Work email
                  </label>
                  <input
                    id="intl-contact-email"
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    className="form-control mb-3"
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <label className="field-label" htmlFor="intl-contact-product-type">
                    Product category
                  </label>
                  <input
                    id="intl-contact-product-type"
                    type="text"
                    name="productType"
                    placeholder="Beauty, apparel, electronics..."
                    className="form-control mb-3"
                  />
                </Col>
                <Col md={6}>
                  <label className="field-label" htmlFor="intl-contact-orders">
                    Estimated orders per month
                  </label>
                  <input
                    id="intl-contact-orders"
                    type="text"
                    name="ordersPerMonth"
                    placeholder="Example: 500"
                    className="form-control mb-3"
                  />
                </Col>
              </Row>
              <label className="field-label" htmlFor="intl-contact-company-country">
                Company / country of origin
              </label>
              <input
                id="intl-contact-company-country"
                type="text"
                name="companyCountry"
                placeholder="Company, country"
                className="form-control mb-3"
              />
              <label className="field-label" htmlFor="intl-contact-phone">
                Phone
              </label>
              <input
                id="intl-contact-phone"
                type="tel"
                name="phone"
                placeholder="+1 555 000 0000"
                className="form-control mb-3"
                required
              />
              <label className="field-label" htmlFor="intl-contact-message">
                How can we help?
              </label>
              <textarea
                id="intl-contact-message"
                name="message"
                rows="4"
                placeholder="Channels, volumes, timeline, and launch constraints"
                className="form-control mb-3"
              ></textarea>
              <Button
                type="submit"
                variant="secondary"
                fullWidth
              >
                Send
              </Button>
            </form>
            <p className="social-text mt-4">Follow us</p>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/shipply.col/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shipply on Instagram"
              >
                <i className="bi bi-instagram" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61550521441472"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shipply on Facebook"
              >
                <i className="bi bi-facebook" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/shipply-sas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shipply on LinkedIn"
              >
                <i className="bi bi-linkedin" aria-hidden="true"></i>
              </a>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default ContactSectionInternational;
