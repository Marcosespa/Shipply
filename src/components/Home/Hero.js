import React, { useEffect, useState, useRef } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import "../../styles/Home/hero.css";
import { Player } from "@lottiefiles/react-lottie-player";
import images from "../../assets/images/images";
import { Link } from "react-router-dom";

const wrapText = (text) => {
  return text.split(" ").map((word, index) => (
    <span
      key={index}
      style={{
        display: "inline-block",
        opacity: 0,
        transform: "translateY(20px)",
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
      }}
    >
      {word}&nbsp;
    </span>
  ));
};

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
    <div ref={sectionRef} className={`py-5 bg-light`}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center text-md-start">
            <h5 className="text-warning fw-bold mb-3">
              Simplifica tu logística y acelera el crecimiento de tu E-commerce
            </h5>
            <h1 className="display-4 fw-bold mb-4">
              Centraliza tu inventario, automatiza el proceso de pedidos y
              garantiza entregas rápidas y seguras.
            </h1>
            <Link to="/contacto">
              <Button variant="warning" size="lg" className="fw-bold">
                Contáctanos
              </Button>
            </Link>
            <p className="text-muted mt-3">La mudanza corre por cuenta nuestra</p>
          </Col>
          <Col xs={12} md={6} className="text-center">
            <Player src={images.logo3} loop autoplay className="w-100" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
