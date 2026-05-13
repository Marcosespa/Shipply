import React from "react";
import { Container, Button } from "react-bootstrap";
import "../../styles/Services/integracionessection.css";
import "../../styles/marketing-futuristic.css";
import IntegracionesGrid from "../Marketing/IntegracionesGrid";

const IntegracionesSection = () => {
  return (
    <section id="integraciones" className="integraciones-section py-5">
      <Container>
        <IntegracionesGrid
          variant="light"
          title="Integraciones"
          subtitle="Los canales donde ya integramos o mostramos en el sitio — la conexión concreta depende del acuerdo comercial y alcance técnico."
        />
        <div className="advantages mt-4">
          <h5 className="advantages-title">Ventajas</h5>
          <ul className="advantages-list">
            <li>
              Realizamos una gestión ágil y eficiente de tus pedidos e inventario en tiempo real,
              con un WMS especializado que nos permite visualizar tu operación las 24/7.
            </li>
          </ul>
        </div>
        <Button
          href="https://wa.me/573184516959"
          target="_blank"
          variant="dark"
          className="cta-button mt-3"
        >
          <i className="bi bi-whatsapp me-2"></i>
          Cotizar ahora
        </Button>
      </Container>
    </section>
  );
};

export default IntegracionesSection;
