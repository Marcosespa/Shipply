import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Blog/servicecomparison.css";

const ServiceComparisonPage = () => {
  const navigate = useNavigate();

  return (
    <div className="comparison-page">
      {/* Título principal */}
      <header className="comparison-header">
        <h1>Comparativas de Servicios</h1>
        <p>
          Conoce las diferencias entre diversas soluciones logísticas para tomar
          decisiones informadas que beneficien a tu negocio.
        </p>
      </header>

      {/* Sección: Envío Nacional vs. Internacional */}
      <section className="comparison-section">
        <h2>Servicios de Envío Nacional vs. Internacional</h2>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Criterio</th>
              <th>Envío Nacional</th>
              <th>Envío Internacional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tiempo de Entrega</td>
              <td>1-3 días</td>
              <td>5-15 días</td>
            </tr>
            <tr>
              <td>Costo</td>
              <td>Bajo</td>
              <td>Alto</td>
            </tr>
            <tr>
              <td>Confiabilidad</td>
              <td>Alta</td>
              <td>Moderada</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Recomendación:</strong> Opta por envíos nacionales para
          entregas rápidas y económicas dentro del país. Usa envíos
          internacionales para productos de mayor valor o mercados globales.
        </p>
      </section>

      {/* Sección: Flotas Propias vs. Tercerizadas */}
      <section className="comparison-section">
        <h2>Flotas Propias vs. Tercerizadas</h2>
        <div className="comparison-content">
          <ul>
            <li>
              <strong>Flotas Propias:</strong> Ofrecen control total sobre
              operaciones y personalización, pero conllevan altos costos fijos.
            </li>
            <li>
              <strong>Flotas Tercerizadas:</strong> Brindan flexibilidad y
              menores costos, pero dependen de la disponibilidad y calidad del
              proveedor.
            </li>
          </ul>
        </div>
        <p>
          Ejemplo: Compañías como Amazon combinan flotas propias para áreas
          clave y servicios tercerizados para temporadas de alta demanda.
        </p>
      </section>

      {/* Sección: Sistemas de Gestión Logística */}
      <section className="comparison-section">
        <h2>Sistemas de Gestión Logística</h2>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Software</th>
              <th>Puntos Fuertes</th>
              <th>Limitaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SAP</td>
              <td>Escalabilidad, integración empresarial</td>
              <td>Alto costo inicial</td>
            </tr>
            <tr>
              <td>Oracle SCM</td>
              <td>Gestión en tiempo real</td>
              <td>Curva de aprendizaje</td>
            </tr>
            <tr>
              <td>Software Económico</td>
              <td>Accesible para PYMES</td>
              <td>Funcionalidades limitadas</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Sección: Opciones de Transporte */}
      <section className="comparison-section">
        <h2>Opciones de Transporte</h2>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Opción</th>
              <th>Costos</th>
              <th>Tiempos</th>
              <th>Adaptabilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Terrestre</td>
              <td>Bajo</td>
              <td>Lento</td>
              <td>Alta</td>
            </tr>
            <tr>
              <td>Marítimo</td>
              <td>Moderado</td>
              <td>Muy lento</td>
              <td>Alta</td>
            </tr>
            <tr>
              <td>Aéreo</td>
              <td>Alto</td>
              <td>Rápido</td>
              <td>Baja</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Consejo:</strong> Usa transporte terrestre para distancias
          cortas, marítimo para grandes volúmenes y aéreo para entregas urgentes
          de menor tamaño.
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

export default ServiceComparisonPage;
