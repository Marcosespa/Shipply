import React, { useState, useEffect } from "react";
import "../styles/whatsappButton.css";

const WhatsappButton = () => {
  const [position, setPosition] = useState(700); // Posición inicial desde arriba

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY + window.innerHeight - 100); // Ajusta la posición
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/573184516959"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-button"
      style={{ top: `${position}px`, right: "20px" }}
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
};

export default WhatsappButton;
