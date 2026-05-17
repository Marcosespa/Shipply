import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";
import "../../styles/International/international.css";
import { INTERNATIONAL_FAQS } from "../../data/faqs";
import { usePageMeta } from "../../utils/usePageMeta";
import {
  captureAndStoreUtms,
  getStoredUtms,
  formatUtmsForLabel,
} from "../../utils/utm";

const trackCta = (label) => {
  const utmPart = formatUtmsForLabel(getStoredUtms());
  ReactGA.event({
    category: "International",
    action: "CTA Click",
    label: `${label} | ${utmPart}`,
  });
};

const anchorLinks = [
  { to: "/international#platform", label: "Platform" },
  { to: "/international#how-it-works", label: "Process" },
  { to: "/international#who-we-serve", label: "Who we serve" },
  { to: "/international#why-shipply", label: "Why Shipply" },
  { to: "/international#coverage", label: "Coverage" },
  { to: "/international#included", label: "Included" },
  { to: "/international#faq", label: "FAQ" },
];

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="intl-section-head mb-4 mb-lg-5">
      <p className="intl-section-eyebrow mb-0">{eyebrow}</p>
      <h2 className="intl-section-title">{title}</h2>
      {subtitle ? (
        <p className="intl-section-sub text-muted mb-0">{subtitle}</p>
      ) : null}
      <div className="intl-head-rule" />
    </div>
  );
}

const InternationalLanding = () => {
  const location = useLocation();

  usePageMeta({
    title: "Sell in Colombia without a local company | Shipply",
    lang: "en",
    description:
      "Infrastructure for European, Chinese, and global brands entering Colombia: free-zone warehousing, fulfillment, national last mile, and local billing — without operational complexity.",
    canonical: "https://www.shipply.com.co/international",
    alternates: [
      { hrefLang: "es", href: "https://www.shipply.com.co/" },
      { hrefLang: "en", href: "https://www.shipply.com.co/international" },
      { hrefLang: "x-default", href: "https://www.shipply.com.co/" },
    ],
    openGraph: {
      "og:title": "Shipply — Colombia market entry & fulfillment",
      "og:description":
        "We make Colombia your next market — without opening a local company. Partner for inbound, fulfillment, and delivery.",
      "og:type": "website",
      "og:url": "https://www.shipply.com.co/international",
      "og:image": "https://www.shipply.com.co/assets/images/ImagenShipply.webp",
    },
  });

  useEffect(() => {
    captureAndStoreUtms(location.search);
    ReactGA.event({
      category: "International",
      action: "Landing View",
      label: formatUtmsForLabel(getStoredUtms()),
    });
  }, [location.search]);

  const whatWeDo = [
    {
      icon: "bi-box-seam",
      title: "International inbound",
      body: "Seamless receipt of inventory from China, Europe, the Americas, or anywhere your stock originates — consolidated into one Colombian operating hub.",
    },
    {
      icon: "bi-building",
      title: "Free-zone warehousing",
      body: "Storage and inventory flows aligned with compliance-friendly regimes, without your team running day-to-day warehouse operations.",
    },
    {
      icon: "bi-grid-3x3-gap",
      title: "Fulfillment",
      body: "Picking, packing, and quality control at scale so your brand experience stays consistent for every order.",
    },
    {
      icon: "bi-truck",
      title: "Last mile",
      body: "Reliable, trackable delivery across Bogotá, Medellín, Cali, and national partners where needed — the service level international buyers expect.",
    },
    {
      icon: "bi-receipt-cutoff",
      title: "Local billing",
      body: "Local invoicing through the rails your customers and channels require for a complete in-market sale.",
    },
    {
      icon: "bi-diagram-3",
      title: "Returns & WMS",
      body: "Structured returns handling and warehouse systems visibility aligned with enterprise expectations.",
    },
  ];

  const steps = [
    {
      short: "Inbound",
      detail: "You ship inventory to our operation; we align on SKUs, SLAs, and channels.",
    },
    {
      short: "Storage",
      detail: "We receive, store, and synchronize stock with your sales channels.",
    },
    {
      short: "Sell",
      detail: "You sell through Shopify, Amazon, marketplaces, B2B, or wholesale — we do not replace your brand.",
    },
    {
      short: "Fulfill",
      detail: "We pick, pack, and hand off to last mile with tracking your customers can trust.",
    },
    {
      short: "Settle locally",
      detail: "Local billing closes the loop so revenue matches operational reality in Colombia.",
    },
  ];

  const audience = [
    "E‑commerce brands (DTC and retail partners)",
    "Amazon & marketplace sellers entering new geographies",
    "Manufacturers and distributors exploring LATAM from Europe or Asia",
    "Brands scaling into Latin America without incorporating locally first",
  ];

  const advantages = [
    {
      icon: "bi-briefcase",
      title: "Market entry without a local entity",
      body: "Test and scale Colombia using Shipply as your operating layer — reduce fixed cost and regulatory drag on day one.",
    },
    {
      icon: "bi-lightning-charge",
      title: "Faster path to revenue",
      body: "Shorten launch timelines: your catalog live while we handle the physical and billing motion.",
    },
    {
      icon: "bi-layers",
      title: "One operating partner",
      body: "Inbound, storage, outbound, delivery, and local invoicing under one accountable relationship.",
    },
    {
      icon: "bi-graph-up-arrow",
      title: "Scalable execution",
      body: "Processes, systems, and team depth that absorb growth without constant handoffs.",
    },
    {
      icon: "bi-geo-alt",
      title: "On-the-ground Colombia expertise",
      body: "Carrier realities, urban logistics, and customer expectations — operated by teams who live it daily.",
    },
  ];

  const servicesIncluded = [
    { text: "Free-zone operations", icon: "bi-shield-check" },
    { text: "Fulfillment & WMS", icon: "bi-cpu" },
    { text: "National last mile", icon: "bi-signpost-2" },
    { text: "Local invoicing support", icon: "bi-file-earmark-text" },
    { text: "Returns handling", icon: "bi-arrow-return-left" },
    { text: "SLA-driven operations", icon: "bi-speedometer2" },
  ];

  return (
    <div className="intl-landing" lang="en">
      <Helmet>
        <html lang="en" />
        <title>Sell in Colombia without a local company | Shipply</title>
        <meta
          name="description"
          content="Infrastructure for European, Chinese, and global brands entering Colombia: free-zone warehousing, fulfillment, national last mile, and local billing — without operational complexity."
        />
        <meta property="og:title" content="Shipply — Colombia market entry & fulfillment" />
        <meta
          property="og:description"
          content="We make Colombia your next market — without opening a local company. Partner for inbound, fulfillment, and delivery."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shipply.com.co/international" />
        <meta property="og:image" content="https://www.shipply.com.co/assets/images/ImagenShipply.webp" />
        <link rel="canonical" href="https://www.shipply.com.co/international" />
        <link rel="alternate" hrefLang="es" href="https://www.shipply.com.co/" />
        <link rel="alternate" hrefLang="en" href="https://www.shipply.com.co/international" />
        <link rel="alternate" hrefLang="x-default" href="https://www.shipply.com.co/" />
      </Helmet>

      <div className="intl-lang-bar">
        <Container className="d-flex flex-wrap align-items-center justify-content-between gap-2 py-1">
          <span>
            <strong>English</strong>
            <span className="text-white-50 ms-2">Market entry & fulfillment</span>
          </span>
          <span>
            <Link to="/">Versión en español</Link>
            <span className="text-white-50 mx-2">·</span>
            <Link to="/contacto?lang=en">Contact us</Link>
          </span>
        </Container>
      </div>

      <section className="intl-hero">
        <Container>
          <p className="intl-kicker mb-0">Colombia · Latin America expansion</p>
          <h1 className="display-5 display-md-4 mt-2 mb-3">
            Sell in Colombia without opening a local company
          </h1>
          <p className="lead mb-4">
            We make Colombia your next market — without the complexity. Shipply is the local operating
            infrastructure for brands in Europe, China, and the Americas: inbound, bonded storage,
            fulfillment, national delivery, and local billing — so leadership focuses on growth and
            product, not bureaucracy.
          </p>
          <div className="d-flex flex-wrap gap-3">
            <Link
              className="btn btn-warning btn-custom px-4"
              to="/contacto?lang=en"
              onClick={() => trackCta("Hero — Get in touch")}
            >
              Get in touch
            </Link>
            <Button
              as={HashLink}
              smooth
              to="/international#how-it-works"
              variant="outline-light"
              className="px-4"
              onClick={() => trackCta("Hero — How it works")}
            >
              How it works
            </Button>
            <Button
              as={HashLink}
              smooth
              to="/international#platform"
              variant="outline-light"
              className="px-4 border-opacity-50"
              onClick={() => trackCta("Hero — Platform")}
            >
              View platform
            </Button>
          </div>
        </Container>
      </section>

      <section className="intl-strip">
        <Container>
          <Row className="g-4 g-lg-0">
            <Col md={4}>
              <div className="intl-strip-item">
                <i className="bi bi-globe2" aria-hidden />
                <h3>Gateway to LATAM</h3>
                <p>Colombia as a first expansion market — structured for cross‑border brands.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="intl-strip-item">
                <i className="bi bi-shield-check" aria-hidden />
                <h3>Compliance-aware ops</h3>
                <p>Free‑zone warehousing and invoicing aligned with how you actually sell.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="intl-strip-item">
                <i className="bi bi-stars" aria-hidden />
                <h3>Partner, not vendor</h3>
                <p>Strategic infrastructure — not a commodity 3PL pitch.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="intl-anchor-nav-wrap d-none d-lg-block">
        <Container>
          <nav className="intl-anchor-nav" aria-label="Page sections">
            {anchorLinks.map((a) => (
              <HashLink key={a.to} smooth to={a.to}>
                {a.label}
              </HashLink>
            ))}
          </nav>
        </Container>
      </div>

      <section className="intl-section intl-section-alt" id="platform">
        <Container>
          <SectionHeader
            eyebrow="01 — Platform · What we operate"
            title="Your Colombia operating layer"
            subtitle="We run the motion from inbound inventory to local settlement — so you present a domestic-grade proposition to Colombian buyers without building an internal logistics company."
          />
          <Row className="g-4">
            {whatWeDo.map((item) => (
              <Col md={6} xl={4} key={item.title}>
                <Card className="intl-icon-card p-4 h-100 border-0">
                  <Card.Body className="p-0 d-flex flex-column">
                    <div className="card-icon-wrap">
                      <i className={`bi ${item.icon}`} aria-hidden />
                    </div>
                    <Card.Title className="h6 fw-bold mb-2">{item.title}</Card.Title>
                    <Card.Text className="text-muted small mb-0 flex-grow-1">{item.body}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="intl-section intl-section-muted" id="how-it-works">
        <Container>
          <SectionHeader
            eyebrow="02 — Process"
            title="How it works"
            subtitle="A simple operating model your board and partners can understand in one view — from inbound to local invoice."
          />
          <Row className="g-4 g-lg-5 align-items-stretch">
            <Col lg={7}>
              <ol className="list-unstyled mb-0">
                {steps.map((s, i) => (
                  <li key={s.detail} className="d-flex gap-3 mb-4 pb-4 border-bottom border-secondary-subtle">
                    <span className="intl-step-num">{i + 1}</span>
                    <div>
                      <p className="mb-1 fw-bold text-uppercase small text-secondary">{s.short}</p>
                      <p className="mb-0">{s.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Col>
            <Col lg={5}>
              <div className="intl-cta-strip h-100 d-flex flex-column justify-content-center">
                <h3 className="h5 fw-bold">Scope your launch with our team</h3>
                <p className="small mb-3 opacity-90">
                  Share origin lanes (e.g. Shanghai, Rotterdam, Miami), catalog, and channels — we map
                  receiving, storage, fulfillment, and billing to your timeline.
                </p>
                <Link
                  className="btn btn-warning btn-custom align-self-start"
                  to="/contacto?lang=en"
                  onClick={() => trackCta("Process — Talk to our team")}
                >
                  Talk to our team
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="intl-section intl-section-alt" id="who-we-serve">
        <Container>
          <SectionHeader
            eyebrow="03 — Ideal customer"
            title="Who we serve"
            subtitle="Built for companies in China, Europe, North America, and across LATAM that see Colombia as a strategic market — without incorporating locally at day zero."
          />
          <div className="d-flex flex-wrap gap-2 mb-0">
            {audience.map((role) => (
              <span className="intl-badge-role" key={role}>
                {role}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="intl-section intl-section-muted" id="why-shipply">
        <Container>
          <SectionHeader
            eyebrow="04 — Why Shipply"
            title="Why international teams work with us"
            subtitle="Clarity, accountability, and execution depth — the baseline for cross‑border expansion."
          />
          <Row className="g-4">
            {advantages.map((item) => (
              <Col md={6} key={item.title}>
                <Card className="intl-icon-card p-4 h-100 border-0">
                  <Card.Body className="p-0">
                    <div className="card-icon-wrap">
                      <i className={`bi ${item.icon}`} aria-hidden />
                    </div>
                    <Card.Title className="h6 fw-bold mb-2">{item.title}</Card.Title>
                    <Card.Text className="text-muted small mb-0">{item.body}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="intl-section intl-section-alt" id="coverage">
        <Container>
          <SectionHeader
            eyebrow="05 — Coverage"
            title="Where we operate today"
            subtitle="National execution from a Colombia-centric footprint — with a roadmap that grows alongside your volumes."
          />
          <Row className="g-4">
            <Col md={4}>
              <div className="intl-region-card">
                <h3>Bogotá, Cali & Medellín</h3>
                <p>
                  Core metro fulfillment and last mile in these three cities, with national coordination
                  where your model needs it.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="intl-region-card">
                <h3>Major cities nationwide</h3>
                <p>
                  Last‑mile coverage across principal urban centers — aligned with where Colombian
                  e‑commerce demand concentrates.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="intl-region-card">
                <h3>LATAM beyond Colombia</h3>
                <p>
                  As volumes justify network expansion, we evolve the roadmap with you — without
                  over‑promising dates on day one.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="intl-section intl-section-muted" id="included">
        <Container>
          <SectionHeader
            eyebrow="06 — Scope"
            title="What is included"
            subtitle="A concise view of operational building blocks. Exact SLAs are agreed per program during onboarding."
          />
          <Row>
            <Col lg={10} className="mx-auto">
              {servicesIncluded.map((s) => (
                <div className="intl-check-row" key={s.text}>
                  <i className={`bi ${s.icon} text-warning fs-5 flex-shrink-0`} aria-hidden />
                  <span>{s.text}</span>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      <section className="intl-section intl-section-alt" id="faq">
        <Container>
          <SectionHeader
            eyebrow="07 — FAQ"
            title="Common questions from international teams"
            subtitle="Short answers for the first market-entry conversation. We confirm legal, tax, and logistics details during scoping."
          />
          <Row className="g-3">
            {INTERNATIONAL_FAQS.map((faq) => (
              <Col md={6} key={faq.q}>
                <div className="intl-faq-card">
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="intl-section intl-section-alt pb-5">
        <Container>
          <div className="intl-final-cta">
            <p className="intl-kicker text-warning mb-2">Next step</p>
            <h2 className="h3 mb-3">Start selling in Colombia with confidence</h2>
            <p className="lead mb-4">
              One structured conversation to align catalog, channels, and operating plan — then we
              execute alongside your growth team.
            </p>
            <Link
              className="btn btn-warning btn-custom btn-lg px-5"
              to="/contacto?lang=en"
              onClick={() => trackCta("Final CTA — Get in touch")}
            >
              Get in touch
            </Link>
            <p className="small text-white-50 mt-4 mb-0">
              English contact form · Same-day follow-up when possible (COT business hours).
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default InternationalLanding;
