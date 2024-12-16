import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Blog/warehouseautomation.css";

const WarehouseAutomationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="warehouse-page">
      {/* Título principal */}
      <header className="warehouse-header">
        <h1>Automatización en Almacenes</h1>
        <p>
          Descubre cómo la automatización está revolucionando las operaciones
          de almacenamiento y ayudando a las empresas a optimizar sus procesos.
        </p>
      </header>

      {/* Sección: Beneficios de la Automatización */}
      <section className="warehouse-section">
        <h2>Beneficios de la Automatización</h2>
        <ul>
          <li>Aumenta la eficiencia operativa.</li>
          <li>
            Reduce los errores humanos y mejora la precisión en el manejo del
            inventario.
          </li>
          <li>Minimiza los costos laborales a largo plazo.</li>
        </ul>
      </section>

      {/* Sección: Tipos de Tecnología */}
      <section className="warehouse-section">
        <h2>Tipos de Tecnología</h2>
        <ul>
          <li>
            <strong>Sistemas AS/RS (Almacenamiento y Recuperación Automatizada):</strong>{" "}
            Ideales para grandes almacenes con alta rotación de inventario.
            Estas soluciones automatizan la recuperación de productos,
            incrementando la velocidad y eficiencia.
          </li>
          <li>
            <strong>Robots móviles autónomos (AMRs):</strong> Facilitan la
            clasificación y transporte interno, reduciendo el tiempo de
            desplazamiento en el almacén.
          </li>
          <li>
            <strong>Pick-to-Light:</strong> Guiando visualmente a los operarios,
            esta tecnología ayuda a reducir errores en la selección de
            productos.
          </li>
        </ul>
      </section>

      {/* Sección: Inversiones Iniciales vs. Retorno de Inversión */}
      <section className="warehouse-section">
        <h2>Inversiones Iniciales vs. Retorno de Inversión</h2>
        <p>
          Implementar tecnologías avanzadas puede tener altos costos iniciales,
          pero los beneficios a largo plazo son significativos. Ejemplos
          incluyen:
        </p>
        <ul>
          <li>
            Una empresa minorista implementó robots móviles autónomos y redujo
            los tiempos de preparación de pedidos en un 40%.
          </li>
          <li>
            Un almacén de logística recuperó su inversión en sistemas AS/RS en
            menos de 3 años debido a la eficiencia operativa alcanzada.
          </li>
        </ul>
      </section>

      {/* Sección: Desafíos de Implementar Automatización */}
      <section className="warehouse-section">
        <h2>Desafíos de Implementar Automatización</h2>
        <ul>
          <li>Altos costos iniciales de implementación.</li>
          <li>
            Necesidad de personal capacitado para operar y mantener los sistemas
            automatizados.
          </li>
          <li>
            Tiempo requerido para integrar las nuevas tecnologías con los
            sistemas existentes.
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

export default WarehouseAutomationPage;
