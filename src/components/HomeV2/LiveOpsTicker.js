import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const EVENT_POOL = [
  { type: "ok", template: (id) => `Pedido #${id} → Picking` },
  { type: "ok", template: (id) => `Pedido #${id} → Packing completo` },
  { type: "info", template: (id) => `Pedido #${id} → En camino` },
  { type: "ok", template: (id) => `Pedido #${id} → Entregado` },
  { type: "info", template: () => `Ruta BOG → MED asignada` },
  { type: "info", template: () => `Ruta BOG → CALI asignada` },
  { type: "info", template: () => `Ruta MED → CALI asignada` },
  { type: "ok", template: (id) => `SKU-${id} sincronizado` },
  { type: "ok", template: () => `Integración Shopify · OK` },
  { type: "ok", template: () => `Inventario actualizado · Bodega` },
  { type: "warn", template: (id) => `Devolución #${id} registrada` },
  { type: "ok", template: (id) => `Carrier confirmado · #${id}` },
  { type: "info", template: () => `Onboarding · catálogo cargado` },
];

const STATUS_LABEL = {
  ok: "OK",
  info: "INFO",
  warn: "AVISO",
};

const SEED_EVENTS = [
  { type: "ok", text: "Pedido #4821 → Picking" },
  { type: "info", text: "Ruta BOG → MED asignada" },
  { type: "ok", text: "SKU-127 sincronizado" },
  { type: "ok", text: "Pedido #4814 → Entregado · Cali" },
];

const MAX_VISIBLE = 4;
const INTERVAL_MS = 2400;

const formatTime = (d) =>
  [d.getHours(), d.getMinutes(), d.getSeconds()]
    .map((n) => String(n).padStart(2, "0"))
    .join(":");

const randomId = () => 4800 + Math.floor(Math.random() * 200);

const buildEvent = (now) => {
  const tpl = EVENT_POOL[Math.floor(Math.random() * EVENT_POOL.length)];
  const id = randomId();
  return {
    id: `${now}-${Math.random().toString(36).slice(2, 7)}`,
    type: tpl.type,
    text: tpl.template(id),
    time: formatTime(new Date(now)),
  };
};

const LiveOpsTicker = () => {
  const shouldReduceMotion = useReducedMotion();
  const seed = useMemo(() => {
    const baseTime = Date.now() - SEED_EVENTS.length * INTERVAL_MS;
    return SEED_EVENTS.map((e, i) => ({
      ...e,
      id: `seed-${i}`,
      time: formatTime(new Date(baseTime + i * INTERVAL_MS)),
    }));
  }, []);
  const [events, setEvents] = useState(seed);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (shouldReduceMotion) return undefined;
    intervalRef.current = setInterval(() => {
      setEvents((prev) => {
        const next = [buildEvent(Date.now()), ...prev];
        return next.slice(0, MAX_VISIBLE);
      });
    }, INTERVAL_MS);
    return () => clearInterval(intervalRef.current);
  }, [shouldReduceMotion]);

  return (
    <div className="home-v2-hero-feed" aria-label="Demo de eventos operativos simulados">
      <div className="home-v2-hero-feed-head">
        <span className="home-v2-hero-feed-dot" aria-hidden />
        <span className="home-v2-hero-feed-title">Feed en vivo</span>
        <span className="home-v2-hero-feed-meta">Demo · datos simulados</span>
      </div>
      <ul className="home-v2-hero-feed-list" aria-live="polite" aria-relevant="additions">
        <AnimatePresence initial={false}>
          {events.map((e) => (
            <motion.li
              key={e.id}
              className={`home-v2-hero-feed-row home-v2-hero-feed-row--${e.type}`}
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: -10, filter: "blur(4px)" }
              }
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="home-v2-hero-feed-status" aria-hidden />
              <span className="home-v2-hero-feed-text">{e.text}</span>
              <span className="home-v2-hero-feed-time" aria-label={`a las ${e.time}`}>
                {e.time}
              </span>
              <span className="visually-hidden">{STATUS_LABEL[e.type]}</span>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default LiveOpsTicker;
