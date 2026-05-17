import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const RouterMotionLink = motion(Link);
const HashMotionLink = motion(HashLink);
const MotionAnchor = motion.a;

const MotionLink = ({
  children,
  hash = false,
  href,
  to,
  target,
  rel,
  whileHover = { y: -2 },
  whileTap = { scale: 0.98 },
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();
  const motionProps = shouldReduceMotion
    ? {}
    : {
        whileHover,
        whileTap,
        transition: { duration: 0.18, ease: "easeOut" },
      };

  if (href) {
    const safeRel = target === "_blank" ? rel || "noopener noreferrer" : rel;

    return (
      <MotionAnchor href={href} target={target} rel={safeRel} {...motionProps} {...props}>
        {children}
      </MotionAnchor>
    );
  }

  const Component = hash ? HashMotionLink : RouterMotionLink;

  return (
    <Component to={to} {...motionProps} {...props}>
      {children}
    </Component>
  );
};

export default MotionLink;
