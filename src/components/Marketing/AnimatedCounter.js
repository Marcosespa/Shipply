import React, { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const NUMERIC_RE = /^(\D*)(\d+(?:[.,]\d+)?)(.*)$/;

const parseValue = (value) => {
  if (value == null) return null;
  const str = String(value).trim();
  const match = str.match(NUMERIC_RE);
  if (!match) return null;
  const [, prefix, rawNumber, suffix] = match;
  const normalized = rawNumber.replace(",", ".");
  const target = Number(normalized);
  if (!Number.isFinite(target)) return null;
  const decimals = normalized.includes(".") ? normalized.split(".")[1].length : 0;
  return { prefix, target, suffix, decimals };
};

const formatNumber = (n, decimals) => {
  if (decimals === 0) return Math.round(n).toString();
  return n.toFixed(decimals);
};

const AnimatedCounter = ({ value, duration = 1800, className }) => {
  const parsed = useMemo(() => parseValue(value), [value]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const shouldReduceMotion = useReducedMotion();
  const finalText = parsed
    ? `${parsed.prefix}${formatNumber(parsed.target, parsed.decimals)}${parsed.suffix}`
    : value;
  const [display, setDisplay] = useState(() =>
    parsed ? `${parsed.prefix}0${parsed.suffix}` : value
  );

  useEffect(() => {
    if (!parsed) return undefined;
    if (!isInView || shouldReduceMotion) {
      if (isInView) setDisplay(finalText);
      return undefined;
    }

    let raf = 0;
    let start = 0;
    const tick = (now) => {
      if (!start) start = now;
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = parsed.target * eased;
      setDisplay(`${parsed.prefix}${formatNumber(current, parsed.decimals)}${parsed.suffix}`);
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDisplay(finalText);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, parsed, duration, shouldReduceMotion, finalText]);

  if (!parsed) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className} aria-label={String(value)}>
      {display}
    </span>
  );
};

export default AnimatedCounter;
