// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <p>© {new Date().getFullYear()} Shipply. Todos los derechos reservados.</p>
        <p>
          <a href="https://shipply.com.co" target="_blank" rel="noopener noreferrer" className="text-white">
            Visita nuestra página oficial
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
