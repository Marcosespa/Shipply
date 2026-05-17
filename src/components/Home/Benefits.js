import React, { useState, useEffect, useRef } from "react";
import "../../styles/Home/benefits.css";
import Button from "../ui/Button";

const Benefits = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  const steps = [
    {
      id: 1,
      title: "Nos integramos",
      description: "Conectamos tu tienda online con nuestras herramientas de gestión.",
      icon: "bi-gear-fill",
      cta: "Explora Integraciones",
      link: "/servicios#integraciones",
    },
    {
      id: 2,
      title: "Recogemos tu inventario",
      description: "Recogemos tus productos y los trasladamos a nuestro almacén.",
      icon: "bi-box-seam-fill",
      cta: "Agenda una Recogida",
      link: "/contacto",
    },
    {
      id: 3,
      title: "Almacenamos",
      description: "Guardamos tu inventario de manera segura y organizada.",
      icon: "bi-houses-fill",
      cta: "Conoce Nuestros Almacenes",
      link: "/servicios#almacenamiento",
    },
    {
      id: 4,
      title: "Alistamos tus pedidos",
      description: "Preparamos cada pedido para su envío con precisión.",
      icon: "bi-clipboard2-check-fill",
      cta: "Descubre el Proceso",
      link: "/servicios#picking",
    },
    {
      id: 5,
      title: "Despachamos",
      description: "Realizamos entregas puntuales a tus clientes.",
      icon: "bi-truck",
      cta: "Conoce las Opciones de Envío",
      link: "/servicios#envios",
    },
    {
      id: 6,
      title: "Realizamos seguimiento",
      description: "Monitoreamos cada entrega para garantizar la satisfacción del cliente.",
      icon: "bi-map-fill",
      cta: "Consulta el Seguimiento",
      link: "/servicios#DataAnalysis",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current.querySelectorAll(".process-step");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section className="logistics-process" ref={sectionRef}>
      <header className="logistics-header">
        <h2>Despreocúpate de tu logística</h2>
        <p>Shipply maneja cada paso hasta el momento de la entrega</p>
      </header>

      <div className="process-steps">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`process-step ${
              visibleCards.includes(index.toString()) ? "visible" : ""
            }`}
            data-index={index}
          >
            <div className="icon-container">
              <i className={`bi ${step.icon}`} aria-hidden="true" />
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <Button to={step.link} variant="primary" size="md" className="cta-button">
              {step.cta}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
