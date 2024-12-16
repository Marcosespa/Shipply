import React from "react";
import { Container } from "react-bootstrap";
import "../../styles/Home/integrations.css";
import images from "../../assets/images/images";

const Integrations = () => {
  const logos = [
    { src: images.shopify, alt: "Shopify" },
    { src: images.vtex, alt: "Vtex" },
    { src: images.mercadoLibre, alt: "Mercado Libre" },
    { src: images.magento, alt: "Magento" },
    { src: images.woocomerce, alt: "Woo Commerce" },
    { src: images.rappi, alt: "Rappi" },
    { src: images.linio, alt: "Linio" },
  ];

  return (
    <div className="integrations-section py-5">
      <Container>
        <h2 className="integrations-title text-center">Nos integramos a tu Ecommerce</h2>
        <div className="carousel-container">
          <div className="carousel-track">
            {/* Duplica los logos para crear el efecto continuo */}
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="integration-logo"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Integrations;
