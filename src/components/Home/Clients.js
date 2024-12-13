import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "../../styles/clients.css";

const Clients = () => {
  return (
    <div className="clients-section py-5">
      <Container>
        <h2 className="text-center mb-4">Nuestros clientes</h2>
        <Carousel indicators={false} controls={true} interval={3000}>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Cliente 1"
                className="mx-3 client-logo"
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Cliente 2"
                className="mx-3 client-logo"
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Cliente 3"
                className="mx-3 client-logo"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Cliente 4"
                className="mx-3 client-logo"
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Cliente 5"
                className="mx-3 client-logo"
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Cliente 6"
                className="mx-3 client-logo"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Clients;
