import React from "react";
import images from "../assets/images/images";
import { Navbar, Nav, Button, Container, NavDropdown } from "react-bootstrap";
import "../styles/Navbar.css";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src={images.logo1}
            alt="Logo 1"
            className="img-fluid"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Servicios" id="basic-nav-dropdown">
              <NavDropdown.Item href="#almacenamiento">
                Almacenamiento
              </NavDropdown.Item>
              <NavDropdown.Item href="#crossdocking">
                Cross-docking
              </NavDropdown.Item>
              <NavDropdown.Item href="#envios">Envíos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#carga-libre">Carga Libre</Nav.Link>
          </Nav>
          <Button variant="warning" className="btn-custom ms-2">
            Portal Clientes
          </Button>
          <Button variant="warning" className="btn-custom ms-2">
            Contactar
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
