import React, { useState } from "react";
import { Navbar, Nav, Button, Container, NavDropdown } from "react-bootstrap";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { FaUsers, FaPhoneAlt } from "react-icons/fa";
import images from "../assets/images/images";
import { useEnglishMarketingShell } from "../utils/useEnglishMarketingShell";

const NavigationBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const en = useEnglishMarketingShell();

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
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={images.ShipplyPNG}
            alt={en ? "Shipply logo" : "Logo"}
            className="img-fluid"
            width="200"
            height="100"
            loading="lazy"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" onClick={closeNavbar}>
            <NavDropdown title={en ? "Services" : "Servicios"} id="basic-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                to="/servicios#integraciones"
                onClick={closeNavbar}
              >
                {en ? "E‑commerce fulfillment" : "Fullfilment ecommerce"}
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/bussinesToBussines"
                onClick={closeNavbar}
              >
                B2B
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/valueaddedsservices"
                onClick={closeNavbar}
              >
                {en ? "Value‑added services" : "Soluciones de Valor agregado"}
              </NavDropdown.Item>
            </NavDropdown>
            {en ? (
              <Nav.Link as={Link} to="/">
                Español
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/international">
                International
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/blog" onClick={closeNavbar}>
              {en ? "Resources" : "Recursos"}
            </Nav.Link>
            <Nav.Link
              href="https://cargalibre.com.co/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeNavbar}
            >
              {en ? "Bulk shipping" : "Envios masivos"}
            </Nav.Link>
          </Nav>

          <div className="d-flex flex-column flex-lg-row align-items-center mt-3 mt-lg-0 gap-3">
            <Button
              variant="warning"
              className="btn-custom"
              href="https://control.logystix.co/site/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaUsers className="me-2" /> {en ? "Client portal" : "Portal Clientes"}
            </Button>
            <Button
              variant="warning"
              className="btn-custom"
              as={Link}
              to={en ? "/contacto?lang=en" : "/contacto"}
              onClick={closeNavbar}
            >
              <FaPhoneAlt className="me-2" /> {en ? "Contact us" : "Contactar"}
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
