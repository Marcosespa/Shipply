import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const motionTags = {
  article: motion.article,
  aside: motion.aside,
  div: motion.div,
  footer: motion.footer,
  header: motion.header,
  li: motion.li,
  main: motion.main,
  section: motion.section,
};

const FadeIn = ({
  as = "div",
  children,
  className,
  delay = 0,
  duration = 0.55,
  y = 24,
  amount = 0.2,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();
  const Component = motionTags[as] || motion.div;

  if (shouldReduceMotion) {
    return (
      <Component className={className} {...props}>
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default FadeIn;
