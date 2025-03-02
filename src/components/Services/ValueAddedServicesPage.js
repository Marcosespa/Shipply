import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Services/valueaddedservices.css";


const ValueAddedServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="value-added-page">
      {/* Título principal */}
      <header className="value-added-header">
        <h1>Servicios de Valor Agregado</h1>
        <p>
          En Shipply, sabemos que la logística va más allá de solo entregar paquetes. Por eso, ofrecemos una gama de servicios de valor agregado para optimizar la experiencia de tu e-commerce y sorprender a tus clientes.
        </p>
      </header>

      {/* Sección: Personalización de Pedidos (Imagen a la derecha) */}
      <section className="value-added-section image-right">
        <div className="content-wrapper">
          <div className="text-content">
            <h2>Personalización de Pedidos</h2>
            <p>
              Agregamos un toque especial a cada envío con opciones como <strong>empaques personalizados</strong>, <strong>notas de regalo</strong> y <strong>material promocional</strong> para reforzar tu marca.
            </p>
          </div>
          <img src="https://via.placeholder.com/300x200?text=Personalización" alt="Personalización de Pedidos" className="section-image" />
        </div>
      </section>

      {/* Sección: Maquila y Ensamblaje (Imagen a la izquierda) */}
      <section className="value-added-section image-left">
        <div className="content-wrapper">
          <img src="https://via.placeholder.com/300x200?text=Maquila" alt="Maquila y Ensamblaje" className="section-image" />
          <div className="text-content">
            <h2>Maquila y Ensamblaje</h2>
            <p>
              Simplificamos la preparación de pedidos combinando productos en <strong>paquetes personalizados</strong> o ensamblando <strong>kits listos para su distribución</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Sección: Control de Calidad (Imagen a la derecha) */}
      <section className="value-added-section image-right">
        <div className="content-wrapper">
          <div className="text-content">
            <h2>Control de Calidad</h2>
            <p>
              Verificamos cada producto antes del despacho para garantizar que llegue en <strong>perfectas condiciones</strong> y evitar <strong>devoluciones innecesarias</strong>.
            </p>
          </div>
          <img src="https://via.placeholder.com/300x200?text=Calidad" alt="Control de Calidad" className="section-image" />
        </div>
      </section>

      {/* Sección: Gestión de Devoluciones (Imagen a la izquierda) */}
      <section className="value-added-section image-left">
        <div className="content-wrapper">
          <img src="https://via.placeholder.com/300x200?text=Devoluciones" alt="Gestión de Devoluciones" className="section-image" />
          <div className="text-content">
            <h2>Gestión de Devoluciones</h2>
            <p>
              Facilitamos el proceso de retornos con una solución eficiente que mejora la <strong>experiencia del cliente</strong> y optimiza la <strong>reposición de inventario</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Sección: Etiquetado y Reetiquetado (Imagen a la derecha) */}
      <section className="value-added-section image-right">
        <div className="content-wrapper">
          <div className="text-content">
            <h2>Etiquetado y Reetiquetado</h2>
            <p>
              Adaptamos el etiquetado de los productos según los <strong>requisitos del mercado</strong> o de los <strong>canales de distribución</strong>.
            </p>
          </div>
          <img src="https://via.placeholder.com/300x200?text=Etiquetado" alt="Etiquetado y Reetiquetado" className="section-image" />
        </div>
      </section>

      {/* Botón de Retorno */}
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate("/")}>
          Volver 
        </button>
      </div>
    </div>
  );
};

export default ValueAddedServicesPage;