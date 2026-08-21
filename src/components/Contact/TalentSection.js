import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../styles/Contact/talentsection.css";
import images from "../../assets/images/images";
import Button from "../ui/Button";

const TalentSection = () => {
  return (
    <section className="talent-section py-5">
      <Row className="align-items-center gx-1">
        {/* Columna de la imagen */}
        <Col md={6} className="info-section pe-2">
          <img
            src={images.logo7}
            alt="Ilustración Talento Shipply"
            className="illustration-Shipply"
            loading="lazy"
          />
        </Col>

        {/* Formulario */}
        <Col md={5} className="form-section ps-2">
          <h3 className="form-title">Únete a nuestro equipo</h3>
          <p className="form-description">
            Estamos en busca de personas apasionadas que quieran construir el
            futuro de la logística con Shipply.
          </p>
          <form action="https://formspree.io/f/mnqwerty" method="POST" encType="multipart/form-data">
            <input type="hidden" name="_subject" value="[Shipply] Nueva aplicación de talento" />
            <Row>
              <Col md={6}>
                <label className="field-label" htmlFor="talent-name">
                  Nombre completo
                </label>
                <input
                  id="talent-name"
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  className="form-control mb-3"
                  required
                />
              </Col>
              <Col md={6}>
                <label className="field-label" htmlFor="talent-email">
                  Correo electrónico
                </label>
                <input
                  id="talent-email"
                  type="email"
                  name="email"
                  placeholder="correo@dominio.com"
                  className="form-control mb-3"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <label className="field-label" htmlFor="talent-position">
                  Puesto deseado
                </label>
                <input
                  id="talent-position"
                  type="text"
                  name="position"
                  placeholder="Ej. Operaciones"
                  className="form-control mb-3"
                  required
                />
              </Col>
              <Col md={6}>
                <label className="field-label" htmlFor="talent-experience">
                  Años de experiencia
                </label>
                <input
                  id="talent-experience"
                  type="text"
                  name="experience"
                  placeholder="Ej. 3 años"
                  className="form-control mb-3"
                />
              </Col>
            </Row>
            <label className="field-label" htmlFor="talent-message">
              Cuéntanos sobre ti
            </label>
            <textarea
              id="talent-message"
              name="message"
              rows="4"
              placeholder="Experiencia, habilidades y por qué quieres unirte"
              className="form-control mb-3"
              required
            ></textarea>
            <label className="field-label" htmlFor="cv">
              Adjunta tu CV (PDF):
            </label>
            <input
              type="file"
              id="cv"
              name="cv"
              accept=".pdf"
              className="form-control mb-3"
            />
            <Button type="submit" variant="secondary" fullWidth>
              Enviar
            </Button>
          </form>
          <p className="social-text mt-4">
            Síguenos en nuestras redes sociales
          </p>
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
  );
};

export default TalentSection;
