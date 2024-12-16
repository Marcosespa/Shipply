import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "../../styles/Home/testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Shipply es una opción excelente para empresas que buscan crecer y optimizar sus procesos logísticos. Su combinación de profesionalismo, tecnología y atención al cliente los sitúa como un socio confiable y valioso para cualquier negocio.",
      name: "Nury Cuarán",
      company: "Transporte Carga Libre",
      logo: "logo1.png", // Reemplaza con la ruta correcta del logo
    },
    {
      quote:
        "Son una empresa competente, responsable, dedicada y con ganas de crecer. Destaco la responsabilidad y atención que le brindan al cliente, ya que, al operar a distancia, es de vital importancia.",
      name: "Leonela",
      company: "Travel Blue",
      logo: "logo2.png", // Reemplaza con la ruta correcta del logo
    },
  ];

  return (
    <div className="testimonials-section">
      <Container>
        <Row className="text-center">
          <Col>
            <h2 className="section-title">Testimonios</h2>
            <p className="section-description">¿Qué dicen nuestros clientes?</p>
          </Col>
        </Row>
        <Carousel controls={true} indicators={true} interval={5000}>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <div className="testimonial-card mx-auto">
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-info">
                  <img
                    src={testimonial.logo}
                    alt={testimonial.company}
                    className="testimonial-logo"
                  />
                  <div>
                    <h5 className="testimonial-name">{testimonial.name}</h5>
                    <p className="testimonial-company">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default Testimonials;
