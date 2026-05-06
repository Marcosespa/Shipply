import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import "../../styles/Contact/contactsection.css";
import images from "../../assets/images/images";
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
          <title>Contact us — Shipply | Colombia market entry</title>
          <meta
            name="description"
            content="Reach Shipply for international market entry: warehousing, fulfillment, and local billing in Colombia."
          />
          <link rel="canonical" href="https://www.shipply.com.co/contacto?lang=en" />
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
    ReactGA.event({
      category: "Contact",
      action: "Submit Form",
      label: "International EN",
    });
    ReactGA.event({
      category: "International",
      action: "Lead Submit",
      label: formatUtmsForLabel(getStoredUtms()),
    });
    if (formRef.current) {
      formRef.current.submit();
    }
  };

  return (
    <div lang="en">
      <Helmet>
        <title>Contact us — Shipply | Colombia market entry</title>
        <meta
          name="description"
          content="Reach Shipply for international market entry: warehousing, fulfillment, and local billing in Colombia."
        />
        <link rel="canonical" href="https://www.shipply.com.co/contacto?lang=en" />
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
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    className="form-control mb-3"
                    required
                  />
                </Col>
                <Col md={6}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Work email"
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
                    placeholder="Product category"
                    className="form-control mb-3"
                  />
                </Col>
                <Col md={6}>
                  <input
                    type="text"
                    name="ordersPerMonth"
                    placeholder="Estimated orders per month"
                    className="form-control mb-3"
                  />
                </Col>
              </Row>
              <input
                type="text"
                name="companyCountry"
                placeholder="Company / country of origin"
                className="form-control mb-3"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone (incl. country code)"
                className="form-control mb-3"
                required
              />
              <textarea
                name="message"
                rows="4"
                placeholder="How can we help? (channels, volumes, timeline)"
                className="form-control mb-3"
              ></textarea>
              <button
                type="submit"
                className="btn btn-dark w-100"
                onClick={handleFormSubmit}
              >
                Send
              </button>
            </form>
            <p className="social-text mt-4">Follow us</p>
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
    </div>
  );
};

export default ContactSectionInternational;
