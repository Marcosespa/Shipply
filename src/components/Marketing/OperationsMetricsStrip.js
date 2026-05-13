import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FadeIn from "../motion/FadeIn";
import StaggerSection from "../motion/StaggerSection";
import {
  OPERATIONS_METRICS,
  OPERATIONS_METRICS_DISCLAIMER,
} from "../../data/operationsMetrics";

const OperationsMetricsStrip = ({ className = "" }) => {
  return (
    <StaggerSection className={`sf-metrics ${className}`.trim()} aria-label="Indicadores operativos">
      <Container>
        <Row className="align-items-start g-4 mb-3">
          <Col lg={4}>
            <FadeIn y={16}>
              <h2 className="h5 fw-bold text-white mb-2">Ritmo operativo</h2>
              <p className="small text-white-50 mb-0">
                Estándares que buscamos sostener en la operación día a día — con trazabilidad y
                comunicación clara contigo.
              </p>
            </FadeIn>
          </Col>
          <Col lg={8}>
            <div className="sf-metrics-grid">
              {OPERATIONS_METRICS.map((m, i) => (
                <FadeIn key={m.id} className="sf-metric-card" delay={Math.min(i * 0.04, 0.16)} y={18}>
                  <div className="sf-metric-value">{m.value}</div>
                  <div className="sf-metric-label">{m.label}</div>
                  {m.hint ? <p className="sf-metric-hint">{m.hint}</p> : null}
                </FadeIn>
              ))}
            </div>
          </Col>
        </Row>
        <FadeIn as="div" delay={0.1} y={10}>
          <p className="sf-metrics-disclaimer">{OPERATIONS_METRICS_DISCLAIMER}</p>
        </FadeIn>
      </Container>
    </StaggerSection>
  );
};

export default OperationsMetricsStrip;
