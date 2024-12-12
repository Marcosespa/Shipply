import React, { useEffect, useState, useRef } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import "../styles/hero.css";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`hero-section ${isVisible ? "visible" : ""}`}
      ref={sectionRef}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-container">
            <h5 className="hero-subtitle">
              Simplifica tu logística y acelera el crecimiento de tu E-commerce
            </h5>
            <h1 className="hero-title">
              Centraliza tu inventario, automatiza el proceso de pedidos y
              garantiza entregas rápidas y seguras.
            </h1>
            <Button variant="warning" size="lg" className="button-container">
              Contáctanos
            </Button>
            <p className="hero-text mt-3">La mudanza corre por cuenta nuestra</p>
          </Col>
          <Col md={6} className="image-container">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Placeholder"
              className="hero-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
