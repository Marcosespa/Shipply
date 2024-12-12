// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <img src="https://via.placeholder.com/500x300" alt="Placeholder" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Servicios" id="basic-nav-dropdown">
              <NavDropdown.Item href="#almacenamiento">Almacenamiento</NavDropdown.Item>
              <NavDropdown.Item href="#crossdocking">Cross-docking</NavDropdown.Item>
              <NavDropdown.Item href="#envios">Envíos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#carga-libre">Carga Libre</Nav.Link>
          </Nav>
          <Button variant="warning" className="ms-2">Portal Clientes</Button>
          <Button variant="warning" className="ms-2">Contactar</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
