import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Blog/urbanlogistics.css";

const UrbanLogisticsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="urban-logistics-page">
      {/* Título principal */}
      <header className="urban-logistics-header">
        <h1>Logística Urbana</h1>
        <p>
          Descubre cómo enfrentar los retos del crecimiento del comercio
          electrónico en las ciudades, optimizando la última milla y adoptando
          prácticas sostenibles.
        </p>
      </header>

      {/* Sección: Retos de las Ciudades Congestionadas */}
      <section className="urban-section">
        <h2>Retos de las Ciudades Congestionadas</h2>
        <p>
          Las ciudades congestionadas presentan desafíos únicos para la
          logística. Algunos problemas comunes incluyen:
        </p>
        <ul>
          <li>Tráfico intenso que retrasa las entregas.</li>
          <li>
            Regulaciones estrictas para vehículos de carga en zonas urbanas.
          </li>
          <li>
            Zonas de acceso restringido que dificultan la entrega en ciertas
            áreas.
          </li>
        </ul>
        <p>
          <strong>Soluciones:</strong> Implementar microhubs (centros de
          distribución locales) y usar bicicletas eléctricas para entregas
          rápidas y sostenibles.
        </p>
      </section>

      {/* Sección: Estrategias de Última Milla */}
      <section className="urban-section">
        <h2>Estrategias de Última Milla</h2>
        <p>
          La última milla es uno de los aspectos más críticos de la logística
          urbana. Aquí algunas estrategias para optimizarla:
        </p>
        <ul>
          <li>
            Uso de <strong>lockers inteligentes</strong> para que los clientes
            recojan paquetes en ubicaciones convenientes.
          </li>
          <li>
            Entregas en horarios flexibles para adaptarse a la disponibilidad de
            los clientes.
          </li>
          <li>
            Empresas como Amazon y FedEx están probando <strong>drones</strong>{" "}
            y <strong>robots autónomos</strong> para mejorar la eficiencia.
          </li>
        </ul>
      </section>

      {/* Sección: Distribución Sostenible */}
      <section className="urban-section">
        <h2>Distribución Sostenible</h2>
        <p>
          Con la presión para reducir las emisiones, muchas ciudades están
          adoptando prácticas sostenibles:
        </p>
        <ul>
          <li>
            Implementación de zonas de bajas emisiones para restringir vehículos
            contaminantes.
          </li>
          <li>
            Uso de <strong>vehículos eléctricos</strong> para las entregas
            urbanas.
          </li>
          <li>
            Ejemplo: En Ámsterdam, la mayoría de las entregas urbanas se realizan
            con bicicletas eléctricas, mientras que Bogotá ha adoptado
            vehículos eléctricos para zonas específicas.
          </li>
        </ul>
      </section>

      {/* Sección: Tecnología en Logística Urbana */}
      <section className="urban-section">
        <h2>Tecnología en Logística Urbana</h2>
        <p>
          La tecnología está transformando la forma en que las empresas manejan
          la logística urbana:
        </p>
        <ul>
          <li>
            Herramientas de <strong>geolocalización</strong> para rastrear
            entregas en tiempo real.
          </li>
          <li>
            Sistemas de <strong>enrutamiento dinámico</strong> para evitar
            congestiones de tráfico y optimizar rutas.
          </li>
          <li>
            Plataformas de análisis predictivo para anticipar demandas y
            planificar mejor las operaciones.
          </li>
        </ul>
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
