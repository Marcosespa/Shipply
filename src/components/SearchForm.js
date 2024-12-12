import React from 'react';

const SearchForm = () => {
  return (
    <div className="search-form bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Busca el mejor servicio de transporte</h2>
        <form className="row g-3">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Origen" />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Destino" />
          </div>
          <div className="col-md-12">
            <input type="text" className="form-control" placeholder="Detalles de la carga" />
          </div>
          <div className="col-md-12 text-center">
            <button type="submit" className="btn btn-primary btn-lg">Buscar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
