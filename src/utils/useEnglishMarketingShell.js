import { useLocation } from "react-router-dom";

/**
 * English navbar/footer for international funnel routes, including
 * /contacto?lang=en (Hostinger-friendly: same path as Spanish contact).
 */
export function useEnglishMarketingShell() {
  const { pathname, search } = useLocation();
  const q = new URLSearchParams(search);
  const contactEnglish =
    pathname === "/contacto" && q.get("lang") === "en";

  return (
    pathname === "/international" ||
    pathname.startsWith("/international/contact") ||
    contactEnglish
  );
}
