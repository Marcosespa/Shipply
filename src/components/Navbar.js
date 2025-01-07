import React from "react";
import images from "../assets/images/images";
import { Navbar, Nav, Button, Container, NavDropdown } from "react-bootstrap";
import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUsers, FaPhoneAlt } from "react-icons/fa";

const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="light" expand="lg" className="navbar-custom">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={images.ShipplyPNG}
            alt="Logo"
            className="img-fluid"
            loading="lazy"
          />
        </Navbar.Brand>

        {/* Toggle para pantallas pequeñas */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Elementos del Navbar */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Servicios" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/servicios#integraciones">
                Integraciones
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/servicios#almacenamiento">
                Almacenamiento
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/servicios#picking">
                Picking / Packing
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/servicios#envios">
                Envío
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link
              href="https://cargalibre.com.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Carga Libre
            </Nav.Link>
          </Nav>

          {/* Botones */}
          <div className="d-flex flex-column flex-lg-row align-items-center mt-3 mt-lg-0 gap-3">
            <Button
              variant="warning"
              className="btn-custom"
              href="https://control.logystix.co/site/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaUsers className="me-2" /> Portal Clientes
            </Button>
            <Button
              variant="warning"
              className="btn-custom"
              as={Link}
              to="/contacto"
            >
              <FaPhoneAlt className="me-2" /> Contactar
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
