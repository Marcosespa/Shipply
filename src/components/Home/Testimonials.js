import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "../../styles/testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <Container>
        <Row>
          <Col className="text-center">
            <h2 className="text-warning">Testimonios</h2>
            <p className="text-light">¿Qué dicen nuestros clientes?</p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col md={8}>
            <Carousel controls={true} indicators={false} interval={5000}>
              <Carousel.Item>
                <div className="testimonial-card">
                  <p>
                    Son una empresa competente, responsable, dedicada y con ganas de crecer. Destaco la responsabilidad y atención que le brindan al cliente, ya que, al operar a distancia, es de vital importancia.
                  </p>
                  <h5 className="text-warning">Leoncia</h5>
                  <p className="text-light">Travel Blue</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="testimonial-card">
                  <p>
                    Shipply es excelente con los servicios de almacenamiento, alistamiento y distribución de mis productos. Lo hacen de una manera oportuna y eficaz, y lo mejor es que dan respuesta rápida a las necesidades.
                  </p>
                  <h5 className="text-warning">Francisca Vaca</h5>
                  <p className="text-light">AV Plastics Trade SAS</p>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
