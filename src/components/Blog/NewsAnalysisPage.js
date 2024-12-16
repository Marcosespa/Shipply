import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Blog/newsanalysis.css";

const NewsAnalysisPage = () => {
  const navigate = useNavigate();

  return (
    <div className="news-page">
      {/* Título principal */}
      <header className="news-header">
        <h1>Análisis de Noticias Recientes</h1>
        <p>
          Mantente informado sobre los cambios regulatorios, disrupciones en la
          cadena de suministro y las tendencias más recientes en sostenibilidad
          y tecnología logística.
        </p>
      </header>

      {/* Sección: Impacto de Cambios Regulatorios */}
      <section className="news-section">
        <h2>Impacto de Cambios Regulatorios</h2>
        <p>
          Las nuevas leyes y regulaciones pueden transformar el panorama
          logístico. Un ejemplo clave es:
        </p>
        <ul>
          <li>
            <strong>Restricciones a las emisiones de CO₂:</strong> Estas afectan
            el transporte por carretera al fomentar el uso de vehículos más
            eficientes o eléctricos.
          </li>
          <li>
            Adaptarse a estas regulaciones puede generar costos iniciales altos,
            pero también beneficios a largo plazo en sostenibilidad.
          </li>
        </ul>
      </section>

      {/* Sección: Disrupciones en la Cadena de Suministro Global */}
      <section className="news-section">
        <h2>Disrupciones en la Cadena de Suministro Global</h2>
        <p>
          Eventos como pandemias, conflictos internacionales o crisis económicas
          pueden alterar la disponibilidad de productos. Algunos enfoques para
          mitigar riesgos incluyen:
        </p>
        <ul>
          <li>
            Diversificar los proveedores para evitar dependencia excesiva de una
            región.
          </li>
          <li>
            Incrementar inventarios estratégicos en ubicaciones clave para
            evitar rupturas.
          </li>
          <li>
            Usar análisis predictivo para anticipar problemas en la cadena de
            suministro.
          </li>
        </ul>
      </section>

      {/* Sección: Tendencias en Sostenibilidad */}
      <section className="news-section">
        <h2>Tendencias en Sostenibilidad</h2>
        <p>
          La transición hacia prácticas sostenibles está redefiniendo la
          logística. Ejemplos incluyen:
        </p>
        <ul>
          <li>
            Adopción de <strong>flotas eléctricas</strong> para reducir las
            emisiones de carbono.
          </li>
          <li>
            Uso de <strong>combustibles alternativos</strong> como biodiésel o
            hidrógeno para camiones de larga distancia.
          </li>
          <li>
            Políticas de zonas de bajas emisiones en ciudades como Ámsterdam o
            Bogotá.
          </li>
        </ul>
      </section>

      {/* Sección: Adopción de Tecnología */}
      <section className="news-section">
        <h2>Adopción de Tecnología</h2>
        <p>
          La integración de nuevas tecnologías está revolucionando la industria
          logística:
        </p>
        <ul>
          <li>
            Uso de <strong>drones</strong> para entregas rápidas en áreas
            urbanas.
          </li>
          <li>
            Implementación de <strong>vehículos autónomos</strong> para transporte
            de larga distancia.
          </li>
          <li>
            Sistemas de enrutamiento dinámico basados en geolocalización para
            optimizar la última milla.
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

export default NewsAnalysisPage;
