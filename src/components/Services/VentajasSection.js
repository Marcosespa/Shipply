import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../styles/Services/ventajassection.css";
import images from "../../assets/images/images";
import { Player } from "@lottiefiles/react-lottie-player";

const VentajasSection = () => {
  return (
    <section className="ventajas-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Imagen a la izquierda */}
          <Col md={6} className="text-center">
          <div className="container">
              <Player
                src={images.logo6}
                className="player"
                loop
                autoplay
                style={{ height: "400px", width: "500px" }}
              />
            </div>
          </Col>
          {/* Texto a la derecha */}
          <Col md={6}>
            <h2 className="text-warning">Almacenamiento</h2>
            <p className="mb-4">
              Recolectamos, clasificamos y almacenamos tus productos de acuerdo a su naturaleza.
            </p>
            <p>
              <strong>
                Contamos con bodegas especializadas en las principales ciudades
                de Colombia, las cuales funcionan con un modelo de almacenamiento optimizado
                para minimizar tus costos y mejorar la efectividad de tus entregas.
              </strong>
            </p>
            <div className="advantages">
              <h5 className="text-warning mb-3">Ventajas</h5>
              <ul>
                <li>Costos bajos</li>
                <li>Seguridad de tu inventario las 24/7</li>
                <li>
                  Acceso online en tiempo real a la gestión de tu operación
                  (stock, movimientos de mercancía, etc.)
                </li>
              </ul>
            </div>
            <Button variant="dark" className="mt-3">
              <i className="bi bi-whatsapp me-2"></i>
              Cotizar ahora
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VentajasSection;
