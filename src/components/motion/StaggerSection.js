import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const motionTags = {
  div: motion.div,
  footer: motion.footer,
  header: motion.header,
  main: motion.main,
  section: motion.section,
};

export const staggerItem = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0 },
};

const StaggerSection = ({
  as = "section",
  children,
  className,
  delayChildren = 0.08,
  staggerChildren = 0.09,
  amount = 0.16,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();
  const Component = motionTags[as] || motion.section;

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
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default StaggerSection;
