// src/components/Clients.js
import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

const Clients = () => {
  return (
    <Container className="my-5 text-center">
      <h2>Nuestros clientes</h2>
      <Carousel>
        <Carousel.Item>
          <img src="https://via.placeholder.com/500x300" alt="Placeholder" />
          <img src="https://via.placeholder.com/500x300" alt="Placeholder" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://via.placeholder.com/500x300" alt="Placeholder" />
          <img src="https://via.placeholder.com/500x300" alt="Placeholder" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Clients;
