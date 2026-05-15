import React from "react";
import { Container } from "react-bootstrap";
import FadeIn from "../motion/FadeIn";
import StaggerSection from "../motion/StaggerSection";
import {
  integrationChannels,
  getIntegrationImageSrc,
} from "../../data/integrations";

const IntegracionesGrid = ({
  variant = "dark",
  title = "Integraciones",
  subtitle = "Los canales que ya mostramos en el sitio — conectamos donde vendes cuando el acuerdo lo contempla.",
}) => {
  const rootClass = `int-grid int-grid--${variant}`;
  const loopChannels = [...integrationChannels, ...integrationChannels];

  return (
    <StaggerSection className={rootClass} id="integraciones-canales">
      <Container>
        <FadeIn y={16}>
          <h2 className="int-grid-title h4 fw-bold mb-2">{title}</h2>
          {subtitle ? <p className="int-grid-sub small mb-0">{subtitle}</p> : null}
        </FadeIn>
        <div className="int-grid-carousel" role="region" aria-label="Canales conectados">
          <div className="int-grid-track" role="list">
          {loopChannels.map((ch, i) => {
            const src = getIntegrationImageSrc(ch);
            return (
              <FadeIn
                key={`${ch.id}-${i}`}
                className="int-grid-logo-wrap"
                role="listitem"
                delay={Math.min((i % integrationChannels.length) * 0.02, 0.14)}
                y={12}
              >
                {src ? (
                  <img
                    src={src}
                    alt={ch.name}
                    className="int-grid-logo"
                    loading="lazy"
                  />
                ) : (
                  <span className="int-grid-chip">{ch.name}</span>
                )}
              </FadeIn>
            );
          })}
          </div>
        </div>
        <FadeIn delay={0.12} y={10}>
          <p className="small mt-3 mb-0 int-grid-sub">
            ¿Otro canal? Lo evaluamos según tu caso y, si aplica, vía integración o flujo acordado.
          </p>
        </FadeIn>
      </Container>
    </StaggerSection>
  );
};

export default IntegracionesGrid;
