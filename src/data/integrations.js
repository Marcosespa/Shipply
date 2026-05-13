import images from "../assets/images/images";

/**
 * Canonic list aligned with logos in src/components/Home/Integrations.js (+ Falabella FAQ).
 * `imageKey` must exist on ../../assets/images/images.js (except null = text-only chip).
 */
export const integrationChannels = [
  { id: "shopify", name: "Shopify", imageKey: "shopify" },
  { id: "vtex", name: "VTEX", imageKey: "vtex" },
  { id: "mercado-libre", name: "Mercado Libre", imageKey: "mercadoLibre" },
  { id: "magento", name: "Magento", imageKey: "magento" },
  { id: "woocommerce", name: "WooCommerce", imageKey: "woocomerce" },
  { id: "rappi", name: "Rappi", imageKey: "rappi" },
  { id: "linio", name: "Linio", imageKey: "linio" },
  { id: "falabella", name: "Falabella", imageKey: null },
];

export function getIntegrationImageSrc(channel) {
  if (!channel?.imageKey) return null;
  return images[channel.imageKey] ?? null;
}
