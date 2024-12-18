import React from "react";
import "../../styles/Services/processsection.css";
import images from "../../assets/images/images";

const ProcessSection = () => {
  return (
    <section className="process-section text-center py-5">
      <div className="custom-container">
        <h2 className="section-title-Servicios">Conoce Nuestro Proceso Integral</h2>
        <p className="section-description-Servicios">
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
      </div>
    </section>
  );
};

export default ProcessSection;

