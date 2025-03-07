import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Services/valueaddedservices.css";
import images from "../../assets/images/images";

// Datos de las secciones en un array para reutilización
const services = [
  {
    title: "Personalización de Pedidos",
    description:
      "Agregamos un toque especial a cada envío con opciones como <strong>empaques personalizados</strong>, <strong>notas de regalo</strong> y <strong>material promocional</strong> para reforzar tu marca.",
    image: images.Personalizacion,
    alt: "Personalización de Pedidos",
    imagePosition: "right",
  },
  {
    title: "Maquila y Ensamblaje",
    description:
      "Simplificamos la preparación de pedidos combinando productos en <strong>paquetes personalizados</strong> o ensamblando <strong>kits listos para su distribución</strong>.",
    image: images.Maquila,
    alt: "Maquila y Ensamblaje",
    imagePosition: "left",
  },
  {
    title: "Control de Calidad",
    description:
      "Verificamos cada producto antes del despacho para garantizar que llegue en <strong>perfectas condiciones</strong> y evitar <strong>devoluciones innecesarias</strong>.",
    image: images.Control,
    alt: "Control de Calidad",
    imagePosition: "right",
  },
  {
    title: "Gestión de Devoluciones",
    description:
      "Facilitamos el proceso de retornos con una solución eficiente que mejora la <strong>experiencia del cliente</strong> y optimiza la <strong>reposición de inventario</strong>.",
    image: images.GestionDevolucion,
    alt: "Gestión de Devoluciones",
    imagePosition: "left",
  },
  {
    title: "Etiquetado y Reetiketado",
    description:
      "Adaptamos el etiquetado de los productos según los <strong>requisitos del mercado</strong> o de los <strong>canales de distribución</strong>.",
    image: images.Etiquetado,
    alt: "Etiquetado y Reetiquetado",
    imagePosition: "right",
  },
];

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

      {/* Secciones dinámicas */}
      {services.map((service, index) => (
        <section
          key={index}
          className={`value-added-section image-${service.imagePosition}`}
        >
          <div className="content-wrapper">
            {service.imagePosition === "left" && (
              <img
                src={service.image}
                alt={service.alt}
                className="section-image"
                loading="lazy" // Optimización de carga
              />
            )}
            <div className="text-content">
              <h2>{service.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: service.description }} />
            </div>
            {service.imagePosition === "right" && (
              <img
                src={service.image}
                alt={service.alt}
                className="section-image"
                loading="lazy" // Optimización de carga
              />
            )}
          </div>
        </section>
      ))}

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