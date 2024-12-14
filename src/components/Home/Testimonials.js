import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "../../styles/Home/testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Son una empresa competente, responsable, dedicada y con ganas de crecer. Destaco la responsabilidad y atención que le brindan al cliente, ya que, al operar a distancia, es de vital importancia.",
      name: "Leoncia",
      company: "Travel Blue",
    },
    {
      quote:
        "Shipply es excelente con los servicios de almacenamiento, alistamiento y distribución de mis productos. Lo hacen de una manera oportuna y eficaz, y lo mejor es que dan respuesta rápida a las necesidades.",
      name: "Francisca Vaca",
      company: "AV Plastics Trade SAS",
    },
  ];

  return (
    <div className="testimonials-section">
      <Container>
        <Row>
          <Col className="text-center">
            <h2 className="section-title">Testimonios</h2>
            <p className="section-description">¿Qué dicen nuestros clientes?</p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col md={8}>
            <Carousel controls={true} indicators={false} interval={5000}>
              {testimonials.map((testimonial, index) => (
                <Carousel.Item key={index}>
                  <div className="testimonial-card">
                    <p>{testimonial.quote}</p>
                    <h5>{testimonial.name}</h5>
                    <p className="company-name">{testimonial.company}</p>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
