import React from "react";
import "../../styles/Blog/blogsection.css";
import images from "../../assets/images/images";

import { useNavigate } from "react-router-dom";

// GuiasPracticas: require('./Guiaspracticas.jpg.webp'),
// AnalisisNoticias: require('./Guiaspracticas.jpg.webp'),
// ComparativaServicios: require('./ComparativaServicios.jpg.webp'),
// LogisticaUrbana: require('./LogisticaUrbana.avif'),
// AutomatizacionAlmacenes: require('./Automatizacion.avif'),



const BlogSection = () => {
  const navigate = useNavigate();

  const blogCategories = [
    {
      id: 1,
      title: "Logistica para grandes superficies",
      description:
      "Explora procesos y particularidades de entregas en grandes superficies en Colombia, con claves para optimizar la logística.",      image: images.GuiasPracticas, // Ruta de la imagen desde el archivo importado
      route: "/blog/logistica-grandes-superficies",
    },
    {
      id: 2,
      title: "Análisis de Noticias Recientes",
      description:
        "Mantente al día con los cambios regulatorios, disrupciones en la cadena global y las últimas tendencias de la industria.",
      image: images.AnalisisNoticias, // Ruta de la imagen desde el archivo importado
      route: "/blog/analisis-noticias",
    },
    {
      id: 3,
      title: "Apertura Logística en Colombia: Claves para un Inicio Exitoso",
      description:
      "Guía para iniciar operaciones logísticas en Colombia con estrategias, tecnología y aliados clave para optimizar tu cadena de suministro.",      image: images.ComparativaServicios, // Ruta de la imagen desde el archivo importado
      route: "/blog/apertura-logistica",
    },
    {
      id: 4,
      title: "Transporte de Carga en Colombia",
      description:
    "Explora los tipos de transporte de carga en Colombia y soluciones estratégicas para optimizar tu logística.",
      image: images.LogisticaUrbana, // Ruta de la imagen desde el archivo importado
      route: "/blog/transporte-carga-colombia",
    },
    {
      id: 5,
      title: "Automatización en Almacenes",
      description:
        "Explora tecnologías innovadoras como robots autónomos, sistemas AS/RS y sus beneficios para la eficiencia.",
      image: images.AutomatizacionAlmacenes, 
      route: "/blog/automatizacion-almacenes",
    },
    {
      id: 6,
      title: "Mejora del Control de Inventarios en Fulfillment",
      description:
        "Estrategias y tecnologías para optimizar la gestión de inventarios en Colombia con soluciones efectivas.",
      image: images.InventoryControlPage,
      route: "/blog/control-inventarios",
    },
  ];

  return (
    <section className="blog-section">
      <div className="full-width-container">
        <h2 className="blog-title">Explora Nuestro Blog</h2>
        <div className="blog-grid">
          {blogCategories.map((category) => (
            <div
              key={category.id}
              className="blog-card"
              onClick={() => navigate(category.route)}
            >
              <img
                src={category.image}
                alt={category.title}
                className="blog-image"
                loading="lazy"
              />
              <div className="blog-content">
                <h3 className="blog-card-title">{category.title}</h3>
                <p className="blog-description">{category.description}</p>
                <button className="blog-button">Leer más</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
