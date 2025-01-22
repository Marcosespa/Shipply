import React, { useState } from "react";
import images from "../assets/images/images";
import { Navbar, Nav, Button, Container, NavDropdown } from "react-bootstrap";
import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUsers, FaPhoneAlt } from "react-icons/fa";

const NavigationBar = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded(!isExpanded);
  const closeNavbar = () => setIsExpanded(false);

  return (
    <Navbar
      bg="light"
      expand="lg"
      expanded={isExpanded}
      className="navbar-custom"
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
        <img src="./static/media/Shipply-SinFondo.ee3aae52d82a4811dc5c.webp" alt="Logo" class="img-fluid" width="200" height="100"></img>
        </Navbar.Brand>

        {/* Toggle para pantallas pequeñas */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />

        {/* Elementos del Navbar */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" onClick={closeNavbar}>
            <NavDropdown title="Servicios" id="basic-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                to="/servicios#integraciones"
                onClick={closeNavbar}
              >
                Integraciones
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/servicios#almacenamiento"
                onClick={closeNavbar}
              >
                Almacenamiento
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/servicios#picking"
                onClick={closeNavbar}
              >
                Picking / Packing
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/servicios#envios"
                onClick={closeNavbar}
              >
                Envío
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contacto" onClick={closeNavbar}>
              {/* Contacto
            </Nav.Link>
            <Nav.Link as={Link} to="/blog" onClick={closeNavbar}> */}
              Blog
            </Nav.Link>
            <Nav.Link
              href="https://cargalibre.com.co/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeNavbar}
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
              onClick={closeNavbar}
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
