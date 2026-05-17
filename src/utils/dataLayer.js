export const pushDataLayerEvent = (eventName, payload = {}) => {
  if (!eventName || typeof window === "undefined") return false;

  if (!Array.isArray(window.dataLayer)) {
    window.dataLayer = [];
  }

  window.dataLayer.push({
    event: eventName,
    ...payload,
  });

  return true;
};
