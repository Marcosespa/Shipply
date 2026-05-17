export const pushLeadSubmitAndContinue = (payload, onContinue) => {
  let continued = false;

  const continueOnce = () => {
    if (continued) return;
    continued = true;
    onContinue();
  };

  if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: "lead_submit",
      ...payload,
      eventCallback: continueOnce,
      eventTimeout: 2000,
    });

    window.setTimeout(continueOnce, 2100);
    return;
  }

  continueOnce();
};
