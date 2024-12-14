import React from "react";
import { Container } from "react-bootstrap";
import "../../styles/Services/processsection.css";
import images from "../../assets/images/images";

const ProcessSection = () => {
  return (
    <section className="process-section text-center py-5">
      <Container>
        <h2 className="text-warning">Conoce Nuestro Proceso Integral</h2>
        <p className="mb-5">
          Operamos desde la primera milla para BigCommerce hasta la entrega final para tus clientes
        </p>
        <div className="process-image">
          <img
            src={images.logo4}
            alt="Proceso integral"
            className="img-fluid"
            loading="lazy"
          />
        </div>
      </Container>
    </section>
  );
};

export default ProcessSection;
