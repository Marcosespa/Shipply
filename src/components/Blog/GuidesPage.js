import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Blog/guidespage.css";

const GuidesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="guides-page">
      {/* Título principal */}
      <header className="guides-header">
        <h1>Guías Prácticas para Logística y Transporte</h1>
        <p>
          Aprende cómo optimizar tu cadena de suministro, seleccionar servicios
          de envío y calcular costos logísticos con nuestras guías detalladas.
        </p>
      </header>

      {/* Sección: Optimización de la Cadena de Suministro */}
      <section className="guide-section">
        <h2>Optimización de la Cadena de Suministro</h2>
        <p>
          Un proceso eficiente en la cadena de suministro es esencial para
          identificar cuellos de botella y mejorar las operaciones.
        </p>
        <ul>
          <li>Identifica los cuellos de botella en tu cadena de suministro.</li>
          <li>
            Usa herramientas digitales como sistemas de gestión de inventario
            (WMS) y sistemas ERP.
          </li>
          <li>
            Estudia casos reales donde empresas lograron mejoras logísticas.
          </li>
        </ul>
      </section>

      {/* Sección: Selección de Servicios de Envío */}
      <section className="guide-section">
        <h2>Selección de Servicios de Envío</h2>
        <p>
          Elige el método de envío más adecuado según las necesidades de tu
          negocio.
        </p>
        <table className="shipping-table">
          <thead>
            <tr>
              <th>Tipo de Envío</th>
              <th>Costo</th>
              <th>Tiempo de Entrega</th>
              <th>Capacidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Terrestre</td>
              <td>Bajo</td>
              <td>3-7 días</td>
              <td>Mediana</td>
            </tr>
            <tr>
              <td>Marítimo</td>
              <td>Moderado</td>
              <td>2-6 semanas</td>
              <td>Alta</td>
            </tr>
            <tr>
              <td>Aéreo</td>
              <td>Alto</td>
              <td>1-3 días</td>
              <td>Baja</td>
            </tr>
          </tbody>
        </table>
        <p>
          Recomendaciones: Opta por envíos aéreos para productos urgentes y
          marítimos para grandes volúmenes de carga.
        </p>
      </section>

      {/* Sección: Cálculo de Costos Logísticos */}
      <section className="guide-section">
        <h2>Cálculo de Costos Logísticos</h2>
        <p>
          Aprende a calcular los costos fijos y variables de tus operaciones
          logísticas.
        </p>
        <ul>
          <li>Costos Fijos: Almacenamiento, infraestructura y salarios.</li>
          <li>
            Costos Variables: Transporte, empaque y manejo de inventario.
          </li>
          <li>
            Utiliza simulaciones prácticas para calcular el impacto en tus
            márgenes.
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

export default GuidesPage;
