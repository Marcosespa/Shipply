import { pushDataLayerEvent } from "./dataLayer";

export const pushLeadSubmitAndContinue = (payload, onContinue) => {
  let continued = false;

  const continueOnce = () => {
    if (continued) return;
    continued = true;
    onContinue();
  };

  const pushed = pushDataLayerEvent("lead_submit", {
    ...payload,
    eventCallback: continueOnce,
    eventTimeout: 2000,
  });

  if (pushed) {
    window.setTimeout(continueOnce, 2100);
    return;
  }

  continueOnce();
};
