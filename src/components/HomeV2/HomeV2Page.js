import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Accordion,
} from "react-bootstrap";
import FadeIn from "../motion/FadeIn";
import HeroLines from "../motion/HeroLines";
import MotionLink from "../motion/MotionLink";
import StaggerSection from "../motion/StaggerSection";
import AnimatedCounter from "../Marketing/AnimatedCounter";
import LiveOpsTicker from "./LiveOpsTicker";
import { OPERATIONS_METRICS } from "../../data/operationsMetrics";
import { HOME_FAQS } from "../../data/faqs";
import images from "../../assets/images/images";
import { usePageMeta } from "../../utils/usePageMeta";
import "../../styles/home-v2.css";
import "../../styles/marketing-futuristic.css";

const HERO_PARTICLES = Array.from({ length: 12 }, (_, i) => i + 1);

const waHref =
  "https://wa.me/573147516693?text=" +
  encodeURIComponent(
    "Hola, soy de una marca interesada en fulfillment con Shipply. Me gustaría hablar con un asesor."
  );

function SectionHead({ eyebrow, title, subtitle, center, light }) {
  return (
    <div
      className={`home-v2-section-head ${center ? "center" : ""} ${light ? "home-v2-section-head--light" : ""}`}
    >
      {eyebrow ? (
        <p className={`home-v2-eyebrow ${light ? "home-v2-eyebrow--on-dark" : ""}`}>{eyebrow}</p>
      ) : null}
      <h2 className={`home-v2-h2 ${light ? "home-v2-h2--light" : ""}`}>{title}</h2>
      {subtitle ? (
        <p className={`home-v2-sub ${light ? "home-v2-sub--light" : ""}`}>{subtitle}</p>
      ) : null}
      <div className={`home-v2-rule ${light ? "home-v2-rule--light" : ""}`} />
    </div>
  );
}

const HomeV2Page = () => {
  usePageMeta({
    title: "Shipply | Fulfillment y logística para e‑commerce en Colombia",
    lang: "es",
    description:
      "Fulfillment, almacenamiento, integraciones y última milla en Colombia. Aliado operativo para marcas que venden online y empresas internacionales. Cotiza tu operación con Shipply.",
    keywords:
      "fulfillment Colombia, fulfillment Bogotá Cali Medellín, logística para e-commerce, almacenamiento e-commerce, operador logístico e-commerce Colombia, picking packing Colombia, fulfillment Shopify Colombia, distribución e-commerce Colombia, fulfillment marcas internacionales Colombia",
    canonical: "https://www.shipply.com.co/",
    alternates: [
      { hrefLang: "es", href: "https://www.shipply.com.co/" },
      { hrefLang: "en", href: "https://www.shipply.com.co/international" },
      { hrefLang: "x-default", href: "https://www.shipply.com.co/" },
    ],
    openGraph: {
      "og:title": "Shipply — Fulfillment y logística para tu marca en Colombia",
      "og:description":
        "Centraliza inventario, pedidos y entregas. Enfócate en vender; nosotros operamos la logística.",
      "og:type": "website",
      "og:url": "https://www.shipply.com.co/",
      "og:image": "https://www.shipply.com.co/assets/images/ImagenShipply.webp",
    },
  });

  const services = [
    {
      icon: "bi-box-seam",
      title: "Fulfillment e‑commerce",
      desc: "Recepción, almacenamiento, inventario, picking, packing, despacho y gestión de devoluciones con trazabilidad de cada pedido.",
      benefit: "Pedidos salen bien y tus clientes tienen claridad del estado.",
    },
    {
      icon: "bi-building",
      title: "Almacenamiento",
      desc: "Espacio para tu inventario con control por SKU, entradas y salidas organizadas.",
      benefit: "Inventario en tiempo real y menos errores operativos.",
    },
    {
      icon: "bi-hand-index",
      title: "Picking y packing",
      desc: "Preparación de pedidos con estándares de calidad que cuidan tu marca.",
      benefit: "Menos reprocesos y mejor experiencia de unboxing.",
    },
    {
      icon: "bi-plug",
      title: "Integraciones",
      desc: "Podemos integrar tus canales (Shopify, WooCommerce, marketplaces y otros) para automatizar el flujo de órdenes y mejorar la trazabilidad.",
      benefit: "Órdenes centralizadas sin trabajo manual innecesario.",
    },
    {
      icon: "bi-truck",
      title: "Última milla",
      desc: "Entregas en Bogotá, Cali y Medellín y coordinación con aliados para distribución nacional y seguimiento del pedido.",
      benefit: "Estados claros: picking, asignado, en camino, entregado o devolución.",
    },
    {
      icon: "bi-pin-map",
      title: "Distribución nacional",
      desc: "Coordinamos despachos hacia distintas ciudades según tu red comercial.",
      benefit: "Un solo aliado para planear salidas y seguimiento.",
    },
    {
      icon: "bi-arrow-return-left",
      title: "Gestión de devoluciones",
      desc: "Flujos para recibir, registrar y disponer mercancía devuelta según tu política.",
      benefit: "Menos fricción cuando el cliente devuelve.",
    },
    {
      icon: "bi-globe2",
      title: "Marcas internacionales",
      desc: "Apoyo para operar en Colombia sin montar bodega propia: recepción, fulfillment, facturación local según acuerdo y distribución.",
      benefit: "Entrada al mercado con menor inversión inicial en operación.",
    },
  ];

  const stepsHow = [
    "Recibimos tu inventario.",
    "Lo almacenamos y controlamos por SKU.",
    "Integramos tus canales de venta.",
    "Las órdenes llegan automáticamente a nuestra operación.",
    "Hacemos picking y packing.",
    "Despachamos el pedido.",
    "Hacemos seguimiento hasta la entrega.",
  ];

  const audience = [
    "Marcas de e‑commerce que quieren escalar",
    "Tiendas en Shopify, WooCommerce, Tienda Nube o marketplaces",
    "Negocios que ya superaron su operación interna",
    "Empresas B2B con almacenamiento y distribución",
    "Marcas internacionales que quieren vender en Colombia",
    "Equipos con errores de inventario o poca trazabilidad",
  ];

  const benefits = [
    "Menos carga operativa en tu equipo",
    "Más control sobre inventario y pedidos",
    "Mayor trazabilidad en la cadena",
    "Menos errores de despacho",
    "Operación escalable sin montar bodega",
    "Integración con tus canales de venta",
    "Equipo logístico en Colombia",
    "Acompañamiento cercano",
    "Bogotá, Cali, Medellín y distribución nacional",
    "Plataforma para ver inventario y órdenes",
  ];

  const onboarding = [
    "Reunión comercial",
    "Revisión de necesidades y tarifas",
    "Firma de contrato",
    "Creación del cliente en la plataforma",
    "Carga de SKUs y productos",
    "Recepción de inventario",
    "Integración con canales de venta",
    "Inicio de operación",
  ];

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.info(
        "%c Shipply: HomeV2 montada (localhost correcto) ",
        "background:#fbb900;color:#0f172a;font-weight:bold;padding:6px 10px;"
      );
    }
  }, []);

  const heroLines = [
    "Fulfillment y logística",
    "para marcas que crecen",
  ];

  const clientLogos = [
    { src: images.travelBlue, alt: "Travel Blue" },
    { src: images.dia11, alt: "Día 11" },
    { src: images.alohaBaby, alt: "Aloha Baby" },
    { src: images.santaAnita, alt: "Santa Anita" },
    { src: images.scribe, alt: "Scribe" },
    { src: images.casaLuker, alt: "Casa Luker" },
    { src: images.maestriEmocional, alt: "Maestría Emocional" },
    { src: images.cacaoHunter, alt: "Cacao Hunters" },
  ];

  const clientLogosLoop = [...clientLogos, ...clientLogos];

  return (
    <div className="home-v2">
      <Helmet>
        <html lang="es" />
        <title>Shipply | Fulfillment y logística para e‑commerce en Colombia</title>
        <meta
          name="description"
          content="Fulfillment, almacenamiento, integraciones y última milla en Colombia. Aliado operativo para marcas que venden online y empresas internacionales. Cotiza tu operación con Shipply."
        />
        <meta
          name="keywords"
          content="fulfillment Colombia, fulfillment Bogotá Cali Medellín, logística para e-commerce, almacenamiento e-commerce, operador logístico e-commerce Colombia, picking packing Colombia, fulfillment Shopify Colombia, distribución e-commerce Colombia, fulfillment marcas internacionales Colombia"
        />
        <link rel="canonical" href="https://www.shipply.com.co/" />
        <link rel="alternate" hrefLang="es" href="https://www.shipply.com.co/" />
        <link rel="alternate" hrefLang="en" href="https://www.shipply.com.co/international" />
        <link rel="alternate" hrefLang="x-default" href="https://www.shipply.com.co/" />
        <meta property="og:title" content="Shipply — Fulfillment y logística para tu marca en Colombia" />
        <meta
          property="og:description"
          content="Centraliza inventario, pedidos y entregas. Enfócate en vender; nosotros operamos la logística."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shipply.com.co/" />
        <meta property="og:image" content="https://www.shipply.com.co/assets/images/ImagenShipply.webp" />
      </Helmet>

      <header id="inicio" className="home-v2-hero">
        <div className="home-v2-hero-mesh" aria-hidden />
        <div className="home-v2-hero-ribbon" aria-hidden />
        <div className="home-v2-hero-aurora" aria-hidden />
        <div className="home-v2-hero-particles" aria-hidden="true">
          {HERO_PARTICLES.map((n) => (
            <span key={n} className={`particle particle-${n}`}>
              <img src={images.ShipplyBox} alt="" loading="lazy" decoding="async" />
            </span>
          ))}
        </div>
        <Container fluid="xxl" className="home-v2-hero-inner px-3 px-lg-5">
          <Row className="align-items-center gy-5 gx-lg-4 home-v2-hero-grid">
            <Col lg={5} xl={7} className="pe-xl-5">
              <FadeIn y={36} duration={0.5}>
                <span className="home-v2-badge-chip">
                  <span className="home-v2-badge-dot" aria-hidden />
                  Operación en Bogotá, Cali y Medellín · Cobertura nacional
                </span>
              </FadeIn>
              <FadeIn delay={0.06} y={26} duration={0.52}>
                <div className="home-v2-hero-pills" aria-hidden="true">
                  <span className="home-v2-hero-mini-pill home-v2-hero-mini-pill--cyan">
                    Última milla · Bogotá · Cali · Medellín
                  </span>
                </div>
              </FadeIn>
              <HeroLines className="home-v2-display-title" lines={heroLines} />
              <FadeIn delay={0.46} y={32} duration={0.55}>
                <p className="home-v2-hero-lead">
                  Almacenamos, preparamos y entregamos tus pedidos con trazabilidad clara — para que vendas
                  más sin inflar equipo ni montar bodega propia.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <MotionLink
                    className="home-v2-btn-primary home-v2-btn-primary--pulse"
                    to="/contacto"
                  >
                    Cotizar mi operación
                  </MotionLink>
                  <MotionLink className="home-v2-btn-ghost" hash smooth to="/#como-funciona">
                    Ver cómo funciona
                  </MotionLink>
                </div>
                <div className="mt-3">
                  <MotionLink
                    className="home-v2-hero-tertiary"
                    hash
                    smooth
                    to="/#servicios"
                    whileHover={{ x: 4 }}
                  >
                    Explorar capacidades →
                  </MotionLink>
                </div>
              </FadeIn>
            </Col>
            <Col lg={7} xl={5} className="ps-xl-4">
              <FadeIn className="home-v2-hero-panel-wrap" delay={0.22} y={40} duration={0.58}>
                <div className="home-v2-hero-panel">
                  <LiveOpsTicker />
                  <p className="home-v2-hero-panel-kicker">Aliado integral</p>
                  <ul className="home-v2-hero-checklist">
                    <li>Inventario y órdenes visibles</li>
                    <li>SLAs comerciales acordados</li>
                    <li>Onboarding con catálogo e integraciones</li>
                  </ul>
                  <div className="home-v2-hero-mini-metrics">
                    <div>
                      <strong>+300</strong>
                      <span>órdenes / mes · referencia</span>
                    </div>
                    <div>
                      <strong>360°</strong>
                      <span>del pedido al cliente</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </Col>
          </Row>
        </Container>
      </header>

      <StaggerSection id="ritmo-operativo" className="home-v2-metrics-rail" delayChildren={0.1}>
        <Container>
          <Row className="align-items-start g-4 gy-5">
            <Col lg={4}>
              <FadeIn y={40}>
                <SectionHead
                  eyebrow="Operación medible"
                  title="Ritmo y estándares que sostenemos contigo"
                  subtitle="Indicadores de referencia — el detalle fino se ajusta en diagnóstico y propuesta comercial."
                />
              </FadeIn>
            </Col>
            <Col lg={8}>
              <div className="home-v2-metrics-grid">
                {OPERATIONS_METRICS.map((m, i) => (
                  <FadeIn
                    key={m.id}
                    className="home-v2-metric-tile"
                    delay={Math.min(i * 0.05, 0.2)}
                    y={36}
                  >
                    <div className="home-v2-metric-value">
                      <AnimatedCounter value={m.value} />
                    </div>
                    <div className="home-v2-metric-label">{m.label}</div>
                    {m.hint ? <p className="home-v2-metric-hint">{m.hint}</p> : null}
                  </FadeIn>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </StaggerSection>

      <StaggerSection id="perfil" className="home-v2-triage-future" delayChildren={0.12}>
        <Container>
          <FadeIn y={36}>
            <SectionHead
              center
              light
              eyebrow="Encuentra tu solución"
              title="¿Cuál te describe mejor?"
              subtitle="Tres rutas según cómo opera tu negocio hoy — mismo partner operativo en Colombia."
            />
          </FadeIn>
          <Row className="g-4 mt-2">
            <Col md={4}>
              <FadeIn className="h-100" delay={0.05} y={38}>
                <MotionLink className="home-v2-triage-card d-block h-100" to="/soluciones/marca-digital-colombiana">
                  <p className="eyebrow">E-commerce nacional</p>
                  <h3>Marca digital en Colombia</h3>
                  <p>
                    Vendés por web y/o marketplaces, necesitás escalar despachos sin montar tu propia
                    bodega clónica ni inflar equipo interno.
                  </p>
                  <span className="link-arrow">Ver solución →</span>
                </MotionLink>
              </FadeIn>
            </Col>
            <Col md={4}>
              <FadeIn className="h-100" delay={0.12} y={38}>
                <MotionLink className="home-v2-triage-card d-block h-100" to="/soluciones/b2b-y-ecommerce">
                  <p className="eyebrow">Multicanal B2B + B2C</p>
                  <h3>Mismo centro, inventario clasificado</h3>
                  <p>
                    Contenedores, reposición retail o mayoristas más canal digital — con pools claros de
                    qué stock es B2B y cuál atiende e-commerce.
                  </p>
                  <span className="link-arrow">Ver solución →</span>
                </MotionLink>
              </FadeIn>
            </Col>
            <Col md={4}>
              <FadeIn className="h-100" delay={0.18} y={38}>
                <MotionLink className="home-v2-triage-card d-block h-100" to="/soluciones/internacional-colombia">
                  <p className="eyebrow">International</p>
                  <h3>Más que fulfillment</h3>
                  <p>
                    Importador de registro donde aplique, facturación a cliente final, recaudo local y
                    envío — equipo en inglés disponible en la landing internacional.
                  </p>
                  <span className="link-arrow">Ver solución →</span>
                </MotionLink>
              </FadeIn>
            </Col>
          </Row>
        </Container>
      </StaggerSection>

      <StaggerSection id="que-hacemos" className="home-v2-section home-v2-section--cream" delayChildren={0.08}>
        <Container>
          <FadeIn y={40}>
            <SectionHead
              eyebrow="Qué hacemos"
              title="Tu operación física, en un solo lugar"
              subtitle="Conectamos venta y warehouse: cuando entra una orden, la preparamos, despachamos y damos seguimiento hasta la entrega — con gente y procesos en Colombia."
            />
          </FadeIn>
          <Row className="g-4 g-lg-5 align-items-stretch">
            <Col lg={5}>
              <FadeIn className="home-v2-editorial-quote h-100" delay={0.06} y={40}>
                <p className="home-v2-editorial-kicker">Todo el ciclo logístico</p>
                <h3 className="home-v2-editorial-title">Desde la recepción hasta la entrega</h3>
                <p className="home-v2-editorial-body">
                  Mercancía, inventario por SKU, preparación, carrier y devoluciones cuando aplica — sin
                  que fragmentes proveedores en cada paso.
                </p>
              </FadeIn>
            </Col>
            <Col lg={7}>
              <div className="home-v2-editorial-stack">
                <FadeIn className="home-v2-editorial-strip" delay={0.1} y={36}>
                  <i className="bi bi-shop home-v2-editorial-ico" aria-hidden />
                  <div>
                    <h3 className="home-v2-editorial-strip-title">Construido para marcas digitales</h3>
                    <p className="mb-0">
                      Shopify, WooCommerce, Tienda Nube, marketplaces: integramos lo que tenga sentido
                      para que las órdenes entren ordenadas y el stock refleje tu operación real.
                    </p>
                  </div>
                </FadeIn>
                <FadeIn className="home-v2-editorial-strip" delay={0.16} y={36}>
                  <i className="bi bi-diagram-3 home-v2-editorial-ico" aria-hidden />
                  <div>
                    <h3 className="home-v2-editorial-strip-title">Operación que puedes explicar</h3>
                    <p className="mb-0">
                      Estados legibles para tu equipo y tu cliente final — menos “caja negra”, más
                      conversaciones con datos.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </Col>
          </Row>
        </Container>
      </StaggerSection>

      <StaggerSection id="como-funciona" className="home-v2-section home-v2-section--deep-muted">
        <Container>
          <FadeIn y={40}>
            <SectionHead
              eyebrow="Proceso"
              title="Cómo funciona"
              subtitle="Un flujo claro para tu equipo, tus socios y tus proyecciones."
              light
            />
          </FadeIn>
          <Row>
            <Col lg={8}>
              {stepsHow.map((text, i) => (
                <FadeIn key={text} className="home-v2-step home-v2-step--on-dark" delay={Math.min(i * 0.04, 0.2)} y={32}>
                  <span className="home-v2-step-num">{i + 1}</span>
                  <p>{text}</p>
                </FadeIn>
              ))}
            </Col>
            <Col lg={4}>
              <FadeIn
                className="home-v2-card home-v2-card--accent home-v2-card--cta-compact home-v2-process-cta"
                delay={0.14}
                y={36}
              >
                <h3 className="home-v2-cta-card-title">¿Listo para ordenar la operación?</h3>
                <p className="home-v2-cta-card-copy mb-0">
                  Cuéntanos volumen, canales y ciudad principal — te proponemos esquema y tarifas según tu
                  caso.
                </p>
                <MotionLink className="home-v2-btn-primary mt-3 d-inline-flex" to="/contacto">
                  Hablar con un asesor
                </MotionLink>
              </FadeIn>
            </Col>
          </Row>
        </Container>
      </StaggerSection>

      <StaggerSection id="servicios" className="home-v2-section home-v2-section--white">
        <Container>
          <FadeIn y={40}>
            <SectionHead
              eyebrow="Servicios"
              title="Capacidades que escalamos contigo"
              subtitle="Un mapa completo — lo prioritario y el detalle se fijan en comercial según tu operación."
            />
          </FadeIn>
          <div className="home-v2-services-grid">
            {services.map((s, i) => (
              <FadeIn
                key={s.title}
                className="home-v2-card home-v2-services-grid-item"
                delay={Math.min(i * 0.04, 0.22)}
                y={38}
              >
                <div className="home-v2-card-icon">
                  <i className={`bi ${s.icon}`} aria-hidden />
                </div>
                <h3>{s.title}</h3>
                <p className="mb-2">{s.desc}</p>
                <p className="small fw-semibold mt-2 mb-0 home-v2-card-benefit">Beneficio: {s.benefit}</p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </StaggerSection>

      <StaggerSection
        id="para-quien"
        className="home-v2-section home-v2-section--slate-brand"
        delayChildren={0.06}
      >
        <Container>
          <Row>
            <Col xs={12}>
              <FadeIn y={40}>
                <SectionHead
                  center
                  eyebrow="Ideal customer"
                  title="¿Shipply es para tu marca?"
                  subtitle="Señales de que conviene centralizar — y qué ganás al hacerlo."
                  light
                />
              </FadeIn>
            </Col>
          </Row>
          <Row className="home-v2-ideal-grid gy-4 gy-lg-5 align-items-lg-stretch">
            <Col xs={12} lg={4} className="d-flex">
              <FadeIn className="home-v2-ideal-card w-100 d-flex flex-column" delay={0.04} y={36}>
                <p className="home-v2-ideal-lead">
                  Si reconocés estas señales en tu negocio, un operador integrado suele aliviar cuello de botella
                  sin inflar plantilla.
                </p>
                <div className="home-v2-audience-list home-v2-audience-list--ideal">
                  {audience.map((t, i) => (
                    <FadeIn
                      key={t}
                      as="div"
                      className="home-v2-audience-row"
                      delay={Math.min(i * 0.035, 0.18)}
                      y={28}
                    >
                      <span className="home-v2-audience-num">{String(i + 1).padStart(2, "0")}</span>
                      <p className="home-v2-audience-text">{t}</p>
                    </FadeIn>
                  ))}
                </div>
              </FadeIn>
            </Col>
            <Col xs={12} lg={4} className="d-flex">
              <FadeIn className="home-v2-ideal-card w-100 d-flex flex-column" delay={0.1} y={36}>
                <h3 className="home-v2-pain-title">Dolores que resolvemos</h3>
                <ul className="home-v2-pain-ul mb-0">
                  <li>No quieren montar bodega propia</li>
                  <li>Errores de inventario o despacho</li>
                  <li>Poca trazabilidad</li>
                  <li>Órdenes repartidas en muchos canales</li>
                  <li>Crecimiento que la operación actual no absorbe</li>
                </ul>
              </FadeIn>
            </Col>
            <Col xs={12} lg={4} className="d-flex">
              <FadeIn className="home-v2-ideal-card w-100 d-flex flex-column" delay={0.16} y={36}>
                <h3 className="home-v2-pain-title" id="beneficios">
                  Lo que desbloqueás
                </h3>
                <ul className="home-v2-benefit-grid home-v2-benefit-grid--ideal">
                  {benefits.map((b) => (
                    <li key={b} className="home-v2-benefit-item">
                      <i className="bi bi-check2-circle home-v2-benefit-ico" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </Col>
          </Row>
        </Container>
      </StaggerSection>

      <StaggerSection id="internacional" className="home-v2-section home-v2-section--white">
        <Container>
          <FadeIn className="home-v2-band" y={40}>
            <Row className="align-items-center gy-4">
              <Col lg={8}>
                <span className="home-v2-eyebrow">Marcas extranjeras</span>
                <h2 className="home-v2-h2 text-white mb-3">
                  Vender en Colombia sin montar infraestructura desde cero
                </h2>
                <p>
                  Si tu empresa quiere vender en Colombia, Shipply puede ser tu aliado operativo local:
                  recibimos tu mercancía, la almacenamos, gestionamos pedidos, coordinamos entrega al
                  cliente final y te ayudamos a operar el mercado con un esquema más simple — según modelo
                  y acuerdo comercial.
                </p>
                <ul className="small text-white-50 ps-3 mb-0">
                  <li>Entrada más ágil al mercado colombiano</li>
                  <li>Menor inversión inicial en operación propia</li>
                  <li>Fulfillment y distribución desde Colombia</li>
                  <li>Facturación local según estructura acordada</li>
                </ul>
              </Col>
              <Col lg={4} className="text-lg-end">
                <MotionLink className="home-v2-btn-primary mb-2 d-inline-flex" to="/international">
                  English — Market entry
                </MotionLink>
                <br />
                <MotionLink className="home-v2-btn-ghost d-inline-flex mt-2" to="/contacto">
                  Cotizar desde Colombia
                </MotionLink>
              </Col>
            </Row>
          </FadeIn>
        </Container>
      </StaggerSection>

      <section id="tecnologia" className="home-v2-section home-v2-section--cream">
        <Container>
          <SectionHead
            eyebrow="Plataforma"
            title="Tecnología e integraciones"
            subtitle="Administramos inventario y órdenes con visibilidad — integramos lo que tenga sentido para automatizar entradas y mejorar trazabilidad en tu caso."
          />
          <div className="home-v2-tech-bento">
            {[
              {
                icon: "bi-speedometer2",
                t: "Visibilidad",
                d: "Inventario y órdenes en un mismo lugar para decidir rápido.",
              },
              {
                icon: "bi-arrow-left-right",
                t: "Órdenes centralizadas",
                d: "Menos fricción entre canales cuando la integración está lista.",
              },
              {
                icon: "bi-activity",
                t: "Estados de pedido",
                d: "Seguimiento acorde a warehouse y transporte.",
              },
              {
                icon: "bi-file-earmark-bar-graph",
                t: "Reportes",
                d: "Información operativa para revisar performance.",
              },
            ].map((x, i) => (
              <FadeIn key={x.t} className="home-v2-tech-cell" delay={i * 0.05} y={34}>
                <div className="home-v2-tech-icon-wrap">
                  <i className={`bi ${x.icon}`} aria-hidden />
                </div>
                <h3 className="home-v2-tech-title">{x.t}</h3>
                <p className="home-v2-tech-desc">{x.d}</p>
              </FadeIn>
            ))}
          </div>
          <FadeIn as="div" className="small text-muted mt-4 mb-0" y={20}>
            ¿Necesitas más detalle técnico? Revisa también{" "}
            <Link to="/servicios">Servicios</Link> e{" "}
            <Link to="/servicios#integraciones">Integraciones</Link>.
          </FadeIn>
        </Container>
      </section>

      <section id="casos" className="home-v2-section home-v2-section--deep-muted">
        <Container>
          <FadeIn y={36}>
            <SectionHead
              center
              light
              title="Casos de uso"
              subtitle="Ejemplos concretos — no testimonios inventados."
            />
          </FadeIn>
          <Row className="g-4">
            <Col md={4}>
              <FadeIn className="home-v2-case home-v2-case--lift" delay={0.04} y={38}>
                <h3>Marca y comercio en crecimiento</h3>
                <p className="home-v2-case-client">Cliente: Maestría Emocional</p>
                <p className="small home-v2-case-text mb-0">
                  Marca digital en crecimiento con foco en experiencia de compra. Estandarizamos
                  preparación de pedidos, control de inventario y salida diaria para sostener picos
                  sin perder calidad operativa.
                </p>
              </FadeIn>
            </Col>
            <Col md={4}>
              <FadeIn className="home-v2-case home-v2-case--lift" delay={0.1} y={38}>
                <h3>Empresa internacional</h3>
                <p className="home-v2-case-client">Cliente: Travel Blue</p>
                <p className="small home-v2-case-text mb-0">
                  Marca internacional que requiere operación local en Colombia. Coordinamos
                  almacenamiento, fulfillment y distribución nacional para operar el mercado sin
                  montar infraestructura propia desde cero.
                </p>
              </FadeIn>
            </Col>
            <Col md={4}>
              <FadeIn className="home-v2-case home-v2-case--lift" delay={0.16} y={38}>
                <h3>Empresa B2B</h3>
                <p className="home-v2-case-client">Cliente: Cacao Hunters</p>
                <p className="small home-v2-case-text mb-0">
                  Operación B2B con requerimientos de abastecimiento y trazabilidad. Alineamos
                  inventario, preparación y despacho según reglas de salida y compromisos comerciales
                  del canal corporativo.
                </p>
              </FadeIn>
            </Col>
          </Row>
          <FadeIn className="home-v2-case-brands mt-4" delay={0.2} y={20}>
            <p className="home-v2-case-brands-title mb-2">Marcas con las que trabajamos</p>
            <div className="home-v2-case-brands-carousel" role="region" aria-label="Clientes Shipply">
              <div className="home-v2-case-brands-track" role="list">
                {clientLogosLoop.map((logo, i) => (
                  <div key={`${logo.alt}-${i}`} className="home-v2-case-brand-item" role="listitem">
                    <img src={logo.src} alt={logo.alt} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
            <p className="home-v2-case-brands-copy mb-0">
              Operamos con marcas de e-commerce, internacionales y B2B, adaptando el flujo logístico
              según el tipo de canal y su promesa comercial.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section id="onboarding" className="home-v2-section home-v2-section--white">
        <Container>
          <SectionHead
            title="Cómo empezamos"
            subtitle="Transparencia en el arranque: cada paso depende de tu catálogo y ventanas de recepción."
          />
          <Row>
            <Col lg={10}>
              {onboarding.map((text, i) => (
                <div key={text} className="home-v2-step">
                  <span className="home-v2-step-num">{i + 1}</span>
                  <p>{text}</p>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      <StaggerSection id="faq" className="home-v2-section home-v2-section--cream">
        <Container>
          <FadeIn y={36}>
            <SectionHead
              center
              title="Preguntas frecuentes"
              subtitle="Respuestas directas. Para detalle comercial, el canal correcto es una conversación con el equipo."
            />
          </FadeIn>
          <Row className="justify-content-center">
            <Col lg={9}>
              <FadeIn delay={0.08} y={34}>
                <Accordion defaultActiveKey="0" flush>
                  {HOME_FAQS.map((f, i) => (
                    <Accordion.Item eventKey={String(i)} key={f.q}>
                      <Accordion.Header>{f.q}</Accordion.Header>
                      <Accordion.Body className="text-muted">{f.a}</Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </FadeIn>
              <p className="text-center mt-4 mb-0">
                <Link to="/faq">Ver más preguntas en la sección FAQ</Link>
              </p>
            </Col>
          </Row>
        </Container>
      </StaggerSection>

      <StaggerSection id="cotizar" className="home-v2-section home-v2-section--slate-deep">
        <Container>
          <FadeIn className="home-v2-final" y={40}>
            <h2 className="home-v2-final-title">¿Listo para escalar tu operación logística?</h2>
            <p className="home-v2-sub mx-auto home-v2-final-sub">
              Cuéntanos cómo vendes hoy, cuántas órdenes manejás y qué querés resolver. Diseñamos una
              operación más ordenada, medible y escalable.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
              <MotionLink className="home-v2-btn-primary" to="/contacto">
                Solicitar cotización
              </MotionLink>
              <MotionLink className="home-v2-btn-outline-dark" href={waHref} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp me-2" aria-hidden />
                Hablar por WhatsApp
              </MotionLink>
            </div>
            <p className="small home-v2-final-note mt-4 mb-0">
              Formulario recomendado en contacto: nombre, empresa, correo, teléfono, ciudad, tipo de
              producto, órdenes mensuales aproximadas, canales de venta y qué necesitas resolver.
            </p>
          </FadeIn>
        </Container>
      </StaggerSection>
    </div>
  );
};

export default HomeV2Page;
