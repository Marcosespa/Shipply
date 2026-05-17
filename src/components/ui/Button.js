import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

/**
 * Botón canónico de Shipply.
 *
 * Reemplaza progresivamente las clases legacy:
 *   .cta-button, .btn-dark, .btn-custom, .btn-cta-logistic, .btn-navbar-compact
 *
 * Variants:  primary (gold) | secondary (ink) | ghost (outline) | success (whatsapp)
 * Sizes:     sm | md | lg
 * As:        button | a | Link  (autodetectado por presencia de `to` o `href`)
 */
const Button = React.forwardRef(function Button(
  {
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    className = "",
    to,
    href,
    target,
    rel,
    type = "button",
    ...rest
  },
  ref
) {
  const classes = [
    "sp-btn",
    `sp-btn--${variant}`,
    `sp-btn--${size}`,
    fullWidth ? "sp-btn--block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Seguridad: cualquier link externo a _blank lleva rel obligatorio
  const safeRel =
    target === "_blank" ? rel || "noopener noreferrer" : rel;

  if (to) {
    return (
      <Link ref={ref} to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        target={target}
        rel={safeRel}
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button ref={ref} type={type} className={classes} {...rest}>
      {children}
    </button>
  );
});

export default Button;
