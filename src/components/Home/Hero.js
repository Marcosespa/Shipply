import React, { useEffect, useState, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import "../../styles/Home/hero.css";
import { Player } from "@lottiefiles/react-lottie-player";
import images from "../../assets/images/images";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

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
    <main ref={sectionRef} className={`hero-section ${isVisible ? "visible" : ""}`}>
      <Helmet>
        <title>Shipply</title>
        <meta
          name="description"
          content="Centraliza tu inventario, automatiza el proceso de pedidos y garantiza entregas rápidas y seguras."
        />
        <meta
          name="keywords"
          content="logística, ecommerce, inventario, automatización, entregas rápidas"
        />
        <meta property="og:title" content="Shipply - Simplifica tu logística" />
        <meta
          property="og:description"
          content="Centraliza tu inventario, automatiza el proceso de pedidos y garantiza entregas rápidas y seguras."
        />
        <meta property="og:url" content="https://shipply.com.co" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shipply - Simplifica tu logística" />
        <meta
          name="twitter:description"
          content="Centraliza tu inventario, automatiza el proceso de pedidos y garantiza entregas rápidas y seguras."
        />
        <link rel="canonical" href="https://shipply.com.co" />
        <meta name="language" content="es" />
      </Helmet>

      <div className="hero-container">
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <header>
              <h5 className="hero-subtitle">Simplifica tu logística y acelera el crecimiento de tu E-commerce</h5>
              <h1 className="hero-title">
                Centraliza tu inventario, automatiza el proceso de pedidos y garantiza entregas rápidas y seguras.
              </h1>
            </header>

            <Link to="/contacto" className="button">
              <span className="text">Contáctanos</span>
              <span className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="20"
                  viewBox="0 0 38 15"
                  fill="none"
                >
                  <path
                    fill="white"
                    d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192z..."
                  ></path>
                </svg>
              </span>
            </Link>
            <p className="hero-text mt-3">La mudanza corre por cuenta nuestra</p>
          </Col>

          <Col xs={12} md={6}>
            <div className="player-container">
              <Player src={images.logo3} className="player" loop autoplay aria-label="Animación del logo de Shipply" />
            </div>
          </Col>
        </Row>
      </div>
    </main>
  );
};

export default Hero;
