import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "../../styles/Home/clients.css";

const Clients = () => {
  const clientLogos = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  const groupedLogos = clientLogos.reduce((acc, curr, index) => {
    const groupIndex = Math.floor(index / 3);
    acc[groupIndex] = acc[groupIndex] || [];
    acc[groupIndex].push(curr);
    return acc;
  }, []);

  return (
    <div className="clients-section py-5">
      <Container>
        <h2 className="text-center mb-4">Nuestros Clientes</h2>
        <Carousel indicators={false} controls={true} interval={3000}>
          {groupedLogos.map((group, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-center align-items-center flex-wrap">
                {group.map((logo, idx) => (
                  <img
                    key={idx}
                    src={logo}
                    alt={`Cliente ${idx + 1}`}
                    className="mx-3 client-logo"
                  />
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
