import React from "react";
import "../../styles/Blog/blogsection.css";
import { useNavigate } from "react-router-dom";
const BlogSection = () => {
  const navigate = useNavigate();

  const blogCategories = [
    {
      id: 1,
      title: "Guías Prácticas",
      description:
        "Educación y ayuda para resolver problemas específicos en logística y transporte, como optimización y cálculos de costos.",
      image: "https://via.placeholder.com/500x300?text=Guías+Prácticas", // Reemplaza con una imagen de guías
      route: "/blog/guias-practicas",
    },
    {
      id: 2,
      title: "Análisis de Noticias Recientes",
      description:
        "Mantente al día con los cambios regulatorios, disrupciones en la cadena global y las últimas tendencias de la industria.",
      image: "https://via.placeholder.com/500x300?text=Noticias+Recientes", // Noticias logísticas
      route: "/blog/analisis-noticias",
    },
    {
      id: 3,
      title: "Comparativas de Servicios",
      description:
        "Comparación de servicios logísticos, flotas, sistemas de gestión y opciones de transporte para una toma de decisiones informada.",
      image:
        "https://via.placeholder.com/500x300?text=Comparativas+de+Servicios", // Comparaciones gráficas
      route: "/blog/comparativas-servicios",
    },
    {
      id: 4,
      title: "Logística Urbana",
      description:
        "Soluciones y estrategias para enfrentar los retos de las ciudades congestionadas y la optimización de la última milla.",
      image: "https://via.placeholder.com/500x300?text=Logística+Urbana", // Imagen de transporte urbano
      route: "/blog/logistica-urbana",
    },
    {
      id: 5,
      title: "Automatización en Almacenes",
      description:
        "Explora tecnologías innovadoras como robots autónomos, sistemas AS/RS y sus beneficios para la eficiencia.",
      image:
        "https://via.placeholder.com/500x300?text=Automatización+en+Almacenes", // Robots o almacenes automatizados
      route: "/blog/automatizacion-almacenes",
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
