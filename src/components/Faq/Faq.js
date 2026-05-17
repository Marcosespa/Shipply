import React, { useState } from "react";
import "../../styles/Faq/faq.css";
import { FAQ_PAGE_ITEMS } from "../../data/faqs";

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div id="faq" className="faq-section">
      <p className="faq-eyebrow">Soporte comercial</p>
      <h2>Preguntas frecuentes</h2>
      <p className="faq-intro">
        Respuestas claras para entender si Shipply encaja con tu operación antes de cotizar.
      </p>
      <div className="faq-list">
        {FAQ_PAGE_ITEMS.map((faq, index) => (
          <div
            key={faq.q}
            className={`faq-item ${openQuestion === index ? "open" : ""}`}
          >
            <button
              className="faq-question"
              type="button"
              aria-expanded={openQuestion === index}
              aria-controls={`faq-answer-${index}`}
              onClick={() => toggleQuestion(index)}
            >
              {faq.q}
              <span className="toggle-icon" aria-hidden="true">
                {openQuestion === index ? "-" : "+"}
              </span>
            </button>
            {openQuestion === index && (
              <div className="faq-answer" id={`faq-answer-${index}`}>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
