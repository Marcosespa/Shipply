import React, { useState, useEffect } from "react";
import "../styles/whatsappButton.css";

const WhatsappButton = () => {
  const [position, setPosition] = useState(700); // Posición inicial desde la parte superior

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY + 300); // Ajusta para moverse con el scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href="https://wa.me/573184516959"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-button"
      style={{ top: `${position}px` }} // Ahora usamos 'top' en lugar de 'bottom'
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
};

export default WhatsappButton;
