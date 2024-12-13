import React from "react";
import images from "../assets/images/images";
import { Navbar, Nav, Button, Container, NavDropdown } from "react-bootstrap";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={images.logo1}
            alt="Logo 1"
            className="img-fluid"
            loading="lazy"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Servicios" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/servicios#almacenamiento">
                Almacenamiento
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/servicios#crossdocking">
                Cross-docking
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/servicios#envios">
                Envíos
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contacto">
              Contacto
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/carga-libre">
              Carga Libre
            </Nav.Link>
          </Nav>
          <Button variant="warning" className="btn-custom ms-2"
            href="https://control.logystix.co/site/login"
            target="_blank" // Abre el enlace en una nueva pestaña
            rel="noopener noreferrer" // Mejora la seguridad para enlaces externos
          >

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
