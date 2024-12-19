import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "../../styles/Home/clients.css";
import images from "../../assets/images/images";

const Clients = () => {
  const clientLogos = [
    <img src={images.proimpo} alt="Proimpo" key="proimpo" className="client-logo" />,
    <img src={images.travelBlue} alt="Travel Blue" key="travelBlue" className="client-logo" />,
    <img src={images.dia11} alt="Dia 11" key="dia11" className="client-logo" />,
    <img src={images.alohaBaby} alt="Aloha Baby" key="alohababy" className="client-logo" />,
    <img src={images.anasac} alt="Ana Sac" key="anasac" className="client-logo" />,
    <img src={images.santaAnita} alt="Santa Anita" key="santaanita" className="client-logo" />,
  ];

  const groupedLogos = clientLogos.reduce((acc, curr, index) => {
    const groupIndex = Math.floor(index / 3); // Agrupa logos de 3 en 3
    acc[groupIndex] = acc[groupIndex] || [];
    acc[groupIndex].push(curr);
    return acc;
  }, []);

  return (
    <div className="clients-section py-5">
      <Container>
        <h2 className="text-center mb-4">Nuestros Clientes</h2>
        <Carousel
          indicators={false}
          controls={true}
          interval={2500} // Intervalo más rápido para mejorar la fluidez
          fade={true} // Transición de desvanecimiento suave
          wrap={true} // Activar el loop infinito
          nextIcon={<span aria-hidden="true" className="carousel-control-next-icon-custom" />}
          prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon-custom" />}
        >
          {groupedLogos.map((group, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-center align-items-center flex-wrap">
                {group.map((logo, idx) => (
                  <div
                    key={idx}
                    className="d-flex justify-content-center align-items-center mx-3 client-logo-container"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default Clients;
