import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Blog/urbanlogistics.css";

const UrbanLogisticsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="urban-logistics-page">
      {/* Título principal */}
      <header className="urban-logistics-header">
        <h1>Transporte de Carga en Colombia</h1>
        <p>Tipos y Soluciones Estratégicas</p>
      </header>

      {/* Sección: Introducción */}
      <section className="urban-section">
        <h2>Introducción</h2>
        <p>
          El transporte de carga en Colombia es un pilar fundamental para la economía del país. Desde la distribución de productos hasta el abastecimiento de negocios, contar con una logística eficiente es clave para garantizar la competitividad en el mercado. En este artículo, exploraremos los principales tipos de transporte de carga en Colombia y cómo <strong>Carga Libre</strong> y <strong>Shipply</strong> pueden ser tu aliado estratégico en la optimización de tu cadena de suministro.
        </p>
      </section>

      {/* Sección: Tipos de Transporte de Carga */}
      <section className="urban-section">
        <h2>Tipos de Transporte de Carga en Colombia</h2>
        <ul>
          <li>
            <strong>Transporte Terrestre 🚛:</strong> Es el método más utilizado en Colombia debido a la extensión de la red vial y la flexibilidad que ofrece. Se subdivide en:
            <ul>
              <li><strong>Carga completa (FTL - Full Truck Load):</strong> Ideal para grandes volúmenes de mercancía que requieren un vehículo exclusivo.</li>
              <li><strong>Carga consolidada (LTL - Less Than Truck Load):</strong> Opción eficiente para envíos más pequeños, compartiendo espacio con otros envíos para reducir costos.</li>
              <li><strong>Última milla:</strong> Fundamental en el e-commerce y retail, garantizando entregas rápidas y efectivas al consumidor final.</li>
            </ul>
          </li>
          <li>
            <strong>Transporte Aéreo ✈️:</strong> Utilizado principalmente para envíos urgentes o de alto valor. Aunque su costo es más elevado, es la mejor opción cuando el tiempo es un factor crítico.
          </li>
          <li>
            <strong>Transporte Marítimo 🚢:</strong> Esencial para importaciones y exportaciones, permitiendo el traslado de grandes volúmenes de mercancía a nivel internacional a costos más bajos en comparación con el transporte aéreo.
          </li>
          <li>
            <strong>Transporte Ferroviario 🚂:</strong> Aunque menos desarrollado en Colombia, es una opción en crecimiento, especialmente para el traslado de materias primas y mercancías pesadas a largas distancias.
          </li>
          <li>
            <strong>Transporte Multimodal 🔄:</strong> Combina dos o más tipos de transporte para optimizar costos y tiempos de entrega, permitiendo una mayor eficiencia en la cadena logística.
          </li>
        </ul>
      </section>

      {/* Sección: ¿Por Qué Carga Libre y Shipply? */}
      <section className="urban-section">
        <h2>¿Por Qué Carga Libre y Shipply Son Tu Mejor Opción?</h2>
        <p>
          En <strong>Carga Libre</strong> y <strong>Shipply</strong>, ofrecemos soluciones integrales para el transporte de carga en Colombia:
        </p>
        <ul>
          <li><strong>Red Nacional de Transporte:</strong> Con cobertura en todo el país para garantizar entregas seguras y eficientes.</li>
          <li><strong>Plataformas Tecnológicas Avanzadas:</strong> Rastreo en tiempo real, optimización de rutas y gestión de envíos desde una sola plataforma.</li>
          <li><strong>Optimización de Costos:</strong> Modelos de transporte flexibles que reducen costos sin comprometer la calidad.</li>
          <li><strong>Experiencia y Soporte Personalizado:</strong> Nuestro equipo de expertos está listo para asesorarte en cada etapa de tu operación logística.</li>
          <li><strong>Soluciones B2B y B2C:</strong> Facilitamos entregas masivas para empresas (B2B) y fulfillment para consumidores finales (B2C), asegurando un servicio eficiente y confiable.</li>
        </ul>
      </section>

      {/* Sección: Contáctanos */}
      <section className="urban-section">
        <h2>Contáctanos y Mejora tu Logística</h2>
        <p>
          En <strong>Carga Libre</strong> y <strong>Shipply</strong>, estamos listos para ser tu aliado estratégico en transporte de carga.
        </p>
        <ul>
          <li>
            🔹 Visita nuestra página web para conocer más sobre nuestros servicios: <a href="https://www.cargalibre.com/" target="_blank" rel="noopener noreferrer">www.cargalibre.com</a>
          </li>
          <li>
            🔹 Contáctanos y agenda una consulta con nuestros expertos: <a href="https://www.cargalibre.com/contacto" target="_blank" rel="noopener noreferrer">Contacto</a>
          </li>
          <li>
            🔹 Síguenos en redes sociales para estar al tanto de las últimas innovaciones logísticas.
          </li>
        </ul>
        <p>
          Optimiza tu transporte de carga con <strong>Carga Libre</strong> y <strong>Shipply</strong>. ¡No dejes que la logística sea un obstáculo, conviértela en tu ventaja competitiva! 🚛📦
        </p>
      </section>

      {/* Botón de Retorno */}
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate("/blog")}>
          Volver al Blog
        </button>
      </div>
    </div>
  );
};

export default UrbanLogisticsPage;