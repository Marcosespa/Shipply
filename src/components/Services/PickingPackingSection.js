import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../styles/Services/pickingpackingsection.css";
import images from "../../assets/images/images";


const PickingPackingSection = () => {
  return (
    <section className="picking-packing-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Texto a la izquierda */}
          <Col md={6}>
            <h2 className="text-warning">Picking / Packing</h2>
            <p className="mb-4">
              Seleccionamos tus productos, realizamos el alistamiento de tus órdenes de pedido, etiquetamos y empacamos a tu medida.
            </p>
            <p>
              <strong>
                Ofrecemos seguridad a tu inventario: verificamos la calidad de tus productos al llegar a nuestros centros logísticos, y realizamos un chequeo de tus pedidos antes de ser enviados a tu cliente final.
              </strong>
            </p>
            <div className="advantages">
              <h5 className="text-warning mb-3">Ventajas</h5>
              <ul>
                <li>
                  Contamos con diferentes soluciones de packaging de acuerdo a tus necesidades, manteniendo el branding de tu marca, para que tu cliente viva toda una experiencia de compra.
                </li>
              </ul>
            </div>
            <Button variant="dark" className="mt-3">
              <i className="bi bi-whatsapp me-2"></i>
              Cotizar ahora
            </Button>
          </Col>
          {/* Imagen a la derecha */}
          <Col md={6} className="text-center">
            <img
              src={images.pickingPackingImage}
              alt="Picking Packing"
              className="img-fluid"
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PickingPackingSection;