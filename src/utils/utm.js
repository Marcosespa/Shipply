/**
 * Persists ad campaign parameters for attribution when navigating SPA routes.
 * Standard keys: utm_source, utm_medium, utm_campaign, utm_content, utm_term
 */

const STORAGE_KEY = "shipply_utm_v1";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
];

export function captureAndStoreUtms(search) {
  const params = new URLSearchParams(search || "");
  const fromUrl = {};
  UTM_KEYS.forEach((k) => {
    const v = params.get(k);
    if (v != null && v !== "") {
      fromUrl[k] = v;
    }
  });
  if (Object.keys(fromUrl).length > 0) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
    } catch {
      /* ignore quota / private mode */
    }
  }
}

export function getStoredUtms() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
}

export function utmsToQueryString(utms) {
  const params = new URLSearchParams();
  UTM_KEYS.forEach((k) => {
    if (utms[k]) params.set(k, utms[k]);
  });
  const s = params.toString();
  return s ? `?${s}` : "";
}

export function formatUtmsForLabel(utms) {
  const entries = UTM_KEYS.map((k) => (utms[k] ? `${k}=${utms[k]}` : null)).filter(
    Boolean
  );
  return entries.length ? entries.join("&") : "no_utm";
}
