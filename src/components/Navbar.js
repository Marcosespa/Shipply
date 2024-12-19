import React from "react";
import images from "../assets/images/images";
import { Navbar, Nav, Button, Container, NavDropdown } from "react-bootstrap";
import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUsers, FaPhoneAlt } from "react-icons/fa";

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/servicios");
  };

  return (
    <Navbar bg="light" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={images.ShipplyPNG}
            alt="Logo 1"
            className="img-fluid"
            loading="lazy"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown
              title={<span style={{ cursor: "pointer" }}>Servicios</span>}
              id="basic-nav-dropdown"
            >
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
          <Button
            variant="warning"
            className="btn-custom ms-2 d-flex align-items-center"
            href="https://control.logystix.co/site/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaUsers className="me-2" /> Portal Clientes
          </Button>
          <Button
            variant="warning"
            className="btn-custom ms-2 d-flex align-items-center"
            as={Link}
            to="/contacto"
          >
            <FaPhoneAlt className="me-2" /> Contactar
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
