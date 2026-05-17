import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "../styles/Navbar.css";
import "../styles/navbar-shipply-v2.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import images from "../assets/images/images";
import { useEnglishMarketingShell } from "../utils/useEnglishMarketingShell";
import Button from "./ui/Button";

const NavigationBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const en = useEnglishMarketingShell();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dropActive = (prefix) =>
    pathname === prefix || pathname.startsWith(`${prefix}/`);

  const handleToggle = () => setIsExpanded(!isExpanded);
  const closeNavbar = () => setIsExpanded(false);

  return (
    <Navbar
      bg="light"
      expand="lg"
      expanded={isExpanded}
      className={`navbar-custom ${!en ? "navbar-shipply-v2" : ""} ${
        scrolled ? "is-scrolled" : ""
      }`}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to={en ? "/international" : "/"}
          className="d-flex align-items-center navbar-brand-shipply"
        >
          <img
            src={images.ShipplyPNG}
            alt={en ? "Shipply logo" : "Logo Shipply"}
            className="navbar-logo-shipply"
            width={210}
            height={56}
            loading="eager"
            decoding="async"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />

        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-shipply flex-lg-grow-1">
          <Nav
            className="navbar-nav-main flex-wrap align-items-lg-center gap-lg-1 flex-lg-grow-1 justify-content-lg-center ms-lg-0"
            onClick={closeNavbar}
          >
            {!en && (
              <NavDropdown
                title="Sitio"
                id="site-overview-dropdown"
                className={pathname === "/" ? "nav-dd--active" : ""}
              >
                <NavDropdown.Item as={HashLink} smooth to="/#inicio" onClick={closeNavbar}>
                  Inicio
                </NavDropdown.Item>
                <NavDropdown.Item as={HashLink} smooth to="/#que-hacemos" onClick={closeNavbar}>
                  Qué hacemos
                </NavDropdown.Item>
                <NavDropdown.Item as={HashLink} smooth to="/#como-funciona" onClick={closeNavbar}>
                  Cómo funciona
                </NavDropdown.Item>
                <NavDropdown.Item as={HashLink} smooth to="/#servicios" onClick={closeNavbar}>
                  Resumen de servicios (inicio)
                </NavDropdown.Item>
                <NavDropdown.Item as={HashLink} smooth to="/#casos" onClick={closeNavbar}>
                  Casos
                </NavDropdown.Item>
                <NavDropdown.Item as={HashLink} smooth to="/#faq" onClick={closeNavbar}>
                  FAQ en inicio
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/faq" onClick={closeNavbar}>
                  Preguntas frecuentes (página)
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/value-added-services" onClick={closeNavbar}>
                  Soluciones de valor agregado
                </NavDropdown.Item>
              </NavDropdown>
            )}
            <NavDropdown
              title={en ? "Overview" : "Servicios"}
              id="basic-nav-dropdown"
              className={
                en
                  ? dropActive("/international") || pathname === "/contacto"
                    ? "nav-dd--active"
                    : ""
                  : dropActive("/servicios") || dropActive("/soluciones")
                    ? "nav-dd--active"
                    : ""
              }
            >
              {!en && (
                <>
                  <NavDropdown.Header>Oferta Shipply</NavDropdown.Header>
                  <NavDropdown.Item
                    as={Link}
                    to="/soluciones/marca-digital-colombiana"
                    onClick={closeNavbar}
                  >
                    Marca digital · Fulfillment e‑commerce
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/soluciones/b2b-y-ecommerce"
                    onClick={closeNavbar}
                  >
                    B2B · e‑commerce y mayoreo
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/soluciones/internacional-colombia"
                    onClick={closeNavbar}
                  >
                    Internacional (IR · factura · recaudo)
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/servicios" onClick={closeNavbar}>
                    Ficha técnica de servicios
                  </NavDropdown.Item>
                </>
              )}
              {en && (
                <>
                  <NavDropdown.Header>International funnel</NavDropdown.Header>
                  <NavDropdown.Item
                    as={HashLink}
                    smooth
                    to="/international#platform"
                    onClick={closeNavbar}
                  >
                    Platform
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={HashLink}
                    smooth
                    to="/international#how-it-works"
                    onClick={closeNavbar}
                  >
                    Process
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={HashLink}
                    smooth
                    to="/international#who-we-serve"
                    onClick={closeNavbar}
                  >
                    Who we serve
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={HashLink}
                    smooth
                    to="/international#why-shipply"
                    onClick={closeNavbar}
                  >
                    Why Shipply
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={HashLink}
                    smooth
                    to="/international#coverage"
                    onClick={closeNavbar}
                  >
                    Coverage
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={HashLink}
                    smooth
                    to="/international#included"
                    onClick={closeNavbar}
                  >
                    Included
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>
            {!en && (
              <NavDropdown
                title="Más"
                id="more-nav-dropdown"
                className={dropActive("/blog") || dropActive("/talento") ? "nav-dd--active" : ""}
              >
                <NavDropdown.Item as={NavLink} to="/blog" onClick={closeNavbar}>
                  Recursos / Blog
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/international" onClick={closeNavbar}>
                  International (EN)
                </NavDropdown.Item>
                <NavDropdown.Item
                  as="a"
                  href="https://cargalibre.com.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNavbar}
                >
                  Envíos masivos (Carga Libre)
                </NavDropdown.Item>
              </NavDropdown>
            )}
            {en ? (
              <Nav.Link as={HashLink} smooth to="/international#faq" onClick={closeNavbar}>
                FAQ
              </Nav.Link>
            ) : null}
            {en ? (
              <Nav.Link as={Link} to="/" onClick={closeNavbar}>
                Español
              </Nav.Link>
            ) : null}
            {en ? (
              <Nav.Link
                href="https://cargalibre.com.co/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeNavbar}
              >
                Bulk shipping
              </Nav.Link>
            ) : null}
          </Nav>

          <div className="d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center mt-3 mt-lg-0 gap-2 navbar-actions-shipply ms-lg-auto flex-shrink-0">
            <Button
              variant="primary"
              size="sm"
              className="btn-custom btn-navbar-compact"
              href="https://control.logystix.co/site/login"
              target="_blank"
            >
              <i className="bi bi-people-fill me-lg-2" aria-hidden="true" />{" "}
              <span className="navbar-btn-label">{en ? "Client portal" : "Portal"}</span>
            </Button>
            <Button
              variant="primary"
              size="sm"
              className="btn-custom btn-navbar-compact"
              to={en ? "/contacto?lang=en" : "/contacto"}
              onClick={closeNavbar}
            >
              <i className="bi bi-telephone-fill me-lg-2" aria-hidden="true" />{" "}
              <span className="navbar-btn-label">{en ? "Contact us" : "Contactar"}</span>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
