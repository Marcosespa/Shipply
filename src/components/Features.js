import React from 'react';

const Features = () => {
  return (
    <div className="features py-5 bg-white" id="features">
      <div className="container">
        <h2 className="text-center mb-4">Características principales</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <i className="bi bi-truck fs-1 text-primary"></i>
            <h4 className="mt-3">Transportadores Verificados</h4>
            <p>Garantizamos seguridad y confianza en cada envío.</p>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-cash-stack fs-1 text-primary"></i>
            <h4 className="mt-3">Compara Precios</h4>
            <p>Elige el servicio que mejor se ajuste a tus necesidades.</p>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-shield-lock fs-1 text-primary"></i>
            <h4 className="mt-3">Envíos Asegurados</h4>
            <p>Tu carga está protegida durante todo el viaje.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
