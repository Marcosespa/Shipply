import React from "react";
import "../styles/whatsappButton.css";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/573184516959"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-button"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
};

export default WhatsappButton;
