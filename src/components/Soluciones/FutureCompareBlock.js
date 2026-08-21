import React from "react";
import { Col, Row } from "react-bootstrap";
import FadeIn from "../motion/FadeIn";
import StaggerSection from "../motion/StaggerSection";

const FutureCompareBlock = ({ title, withoutList, withList }) => {
  return (
    <StaggerSection className="sol-future-section">
      {title ? (
        <FadeIn className="sol-future-section-head">
          <h2>{title}</h2>
        </FadeIn>
      ) : null}
      <Row className="g-3">
        <Col md={6}>
          <FadeIn className="sol-future-glass h-100" delay={0.05}>
            <p className="sol-future-list-title sol-future-list-title--bad">
              Sin aliado fulfillment especializado
            </p>
            <ul className="sol-future-list">
              {withoutList.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </FadeIn>
        </Col>
        <Col md={6}>
          <FadeIn className="sol-future-glass h-100" delay={0.12}>
            <p className="sol-future-list-title sol-future-list-title--good">Con Shipply</p>
            <ul className="sol-future-list">
              {withList.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </FadeIn>
        </Col>
      </Row>
    </StaggerSection>
  );
};

export default FutureCompareBlock;
