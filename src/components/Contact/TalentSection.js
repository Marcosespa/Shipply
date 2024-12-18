import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../styles/Talento/talentsection.css";
import images from "../../assets/images/images";

const TalentSection = () => {
  return (
    <section className="talent-section py-5">
      <Row className="align-items-center gx-1">
        {/* Columna de la imagen */}
        <Col md={6} className="info-section pe-2">
          <img
            src={images.talentIllustration}
            alt="Ilustración Talento Shipply"
            className="illustration"
            loading="lazy"
          />
        </Col>

        {/* Formulario */}
        <Col md={5} className="form-section ps-2">
          <h3 className="form-title">Únete a nuestro equipo</h3>
          <p className="form-description">
            Estamos en busca de personas apasionadas que quieran construir el futuro de la logística con Shipply.
          </p>
          <form action="https://formspree.io/f/mnqwerty" method="POST">
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
                  name="position"
                  placeholder="Puesto deseado"
                  className="form-control mb-3"
                  required
                />
              </Col>
              <Col md={6}>
                <input
                  type="text"
                  name="experience"
                  placeholder="Años de experiencia"
                  className="form-control mb-3"
                />
              </Col>
            </Row>
            <textarea
              name="message"
              rows="4"
              placeholder="Cuéntanos sobre ti y tus habilidades"
              className="form-control mb-3"
              required
            ></textarea>
            <label className="form-label" htmlFor="cv">
              Adjunta tu CV (PDF):
            </label>
            <input
              type="file"
              id="cv"
              name="cv"
              accept=".pdf"
              className="form-control mb-3"
            />
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

export default TalentSection;
