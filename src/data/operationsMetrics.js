/**
 * Valores tipo referencia competitiva (similar estructura a Melonn).
 * IMPORTANTE: validar con Operaciones / Legal antes de uso en campañas masivas.
 */
export const OPERATIONS_METRICS_DISCLAIMER =
  "Cifras de referencia u objetivos operativos internos. Los resultados pueden variar según categoría de producto, canales y acuerdo comercial. Solicita evidencia en diagnóstico.";

/** @typedef {{ id: string, value: string, label: string, hint?: string }} OperationsMetric */

/** @type {OperationsMetric[]} */
export const OPERATIONS_METRICS = [
  {
    id: "dispatch",
    value: "99.4%",
    label: "On time despacho",
    hint: "Órdenes despachadas a tiempo desde operación.",
  },
  {
    id: "express",
    value: "98.9%",
    label: "On time envíos express",
    hint: "Entregas rápidas despachadas a tiempo objetivo.",
  },
  {
    id: "inventory",
    value: "99.9%",
    label: "Confiabilidad de inventario",
    hint: "Alineación stock físico vs sistema.",
  },
  {
    id: "inbound",
    value: "99.5%",
    label: "On time inbound",
    hint: "Recepciones y cargue según ventana acordada.",
  },
];
