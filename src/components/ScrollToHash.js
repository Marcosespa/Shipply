import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Seleccionar el elemento basado en el hash de la URL
      const element = document.querySelector(hash);
      if (element) {
        // Desplazarse automáticamente al elemento
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]); // Ejecutar cada vez que el hash cambie

  return null; // Este componente no renderiza nada en pantalla
};

export default ScrollToHash;
