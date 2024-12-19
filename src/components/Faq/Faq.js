import React, { useState } from "react";
import "../../styles/Faq/faq.css";

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Qué es el servicio de fulfillment?",
      answer:
        "El fulfillment incluye la gestión de inventarios, almacenamiento, procesamiento de pedidos, embalaje y envío de productos. Con nuestro servicio, puedes externalizar todas estas tareas e incluso gestiones adicionales como la recepción de importaciones, maquila de productos, entre otros, y enfocarte en hacer crecer tu negocio.",
    },
    {
      question: "¿Qué tipo de negocios pueden usar Shipply?",
      answer:
        "Shipply está diseñado para empresas de e-commerce de cualquier tamaño, desde pequeñas tiendas hasta grandes marcas que necesitan gestionar sus productos de manera eficiente y rentable. Sin embargo, tenemos restricciones para negocios que comercialicen mercancías peligrosas.",
    },
    {
      question: "¿Qué costos tiene el servicio de fulfillment?",
      answer:
        "Los costos dependen de varios factores, como el volumen de productos almacenados, la cantidad de pedidos mensuales, el tipo de embalaje y los destinos de envío. Te proporcionamos un presupuesto personalizado después de analizar tus necesidades.",
    },
    {
      question: "¿Cómo manejo el inventario de mis productos?",
      answer:
        "A través de nuestra plataforma, podrás consultar en tiempo real la cantidad de productos en stock, gestionar devoluciones, y hacer ajustes cuando lo necesites. Te notificamos cuando tus niveles de inventario son bajos.",
    },
    {
      question: "¿Puedo hacer seguimiento a mis pedidos en tiempo real?",
      answer:
        "Sí, ofrecemos un sistema de gestión de pedidos en línea donde puedes ver el estado de tus envíos, el inventario disponible, las guías de envío de tus pedidos nacionales, el reporte de novedades de tus pedidos y otros detalles importantes sobre tu negocio.",
    },
    {
      question: "¿Puedo integrar Shipply con mi tienda online?",
      answer:
        "Sí, ofrecemos integraciones con las principales plataformas de e-commerce, como Shopify, WooCommerce, Mercado Libre, Magento, Falabella, entre otras. Esto facilita la sincronización automática de pedidos y el seguimiento de envíos.",
    },
    {
      question: "¿Shipply tiene un mínimo de pedidos mensuales requerido?",
      answer:
        "No, nuestro propósito es ayudar a las empresas e-commerce a crecer, por lo cual no exigimos una cantidad mínima de pedidos mensuales para trabajar con nosotros.",
    },
    {
      question: "¿Qué opciones de envío ofrecen?",
      answer:
        "Ofrecemos envíos Same Day – Next Day en Cali y Bogotá con opción de recaudo contra-entrega. Envíos nacionales al 98% del país, con opción de recaudo contra-entrega.",
    },
    {
      question: "¿Shipply tiene servicio al cliente disponible?",
      answer:
        "Sí, nuestro equipo de atención al cliente está disponible para resolver tus dudas y apoyarte en todo lo relacionado con el proceso de fulfillment. Puedes contactarnos a través de chat de WhatsApp.",
    },
  ];

  return (
    <div id="faq" className="faq-section">
      <h2>Preguntas Frecuentes</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openQuestion === index ? "open" : ""}`}
            onClick={() => toggleQuestion(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="toggle-icon">
                {openQuestion === index ? "-" : "+"}
              </span>
            </div>
            {openQuestion === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
