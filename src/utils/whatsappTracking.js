import { pushDataLayerEvent } from "./dataLayer";

const WA_HOST_REGEX = /(^|\.)wa\.me$|(^|\.)api\.whatsapp\.com$/i;

const isWhatsappLink = (url) => {
  if (!url) return false;

  try {
    const parsed = new URL(url, window.location.origin);
    return WA_HOST_REGEX.test(parsed.hostname);
  } catch {
    return false;
  }
};

export const initWhatsappClickTracking = () => {
  if (typeof window === "undefined" || window.__waTrackingBound) return;

  const handleClick = (event) => {
    const anchor = event.target?.closest?.("a[href]");
    if (!anchor) return;

    const href = anchor.getAttribute("href");
    if (!isWhatsappLink(href)) return;

    pushDataLayerEvent("wa_click", {
      link_url: anchor.href,
      link_text: (anchor.textContent || "").trim(),
      link_id: anchor.id || undefined,
      link_classes: anchor.className || undefined,
      page_path: window.location.pathname,
    });
  };

  document.addEventListener("click", handleClick, true);
  window.__waTrackingBound = true;
};
