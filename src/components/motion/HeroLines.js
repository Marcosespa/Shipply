import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Staggered line reveal for marketing heroes. Respects prefers-reduced-motion.
 */
const HeroLines = ({ as: Tag = "h1", className, lines }) => {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <Tag className={className}>
        {lines.map((line) => (
          <span key={line} className="home-v2-hero-line home-v2-hero-line--static">
            <span className="home-v2-hero-line-inner">{line}</span>
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <motion.span
          key={line}
          className="home-v2-hero-line"
          initial={{ opacity: 0, y: 42 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            delay: 0.08 + i * 0.11,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="home-v2-hero-line-inner">{line}</span>
        </motion.span>
      ))}
    </Tag>
  );
};

export default HeroLines;
