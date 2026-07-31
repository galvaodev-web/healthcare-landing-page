declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackExternalLink(label: string, url: string) {
  const payload = {
    event_category: "engagement",
    event_label: label,
    link_url: url,
  };

  window.gtag?.("event", "click_external_link", payload);
  window.dataLayer?.push({ event: "click_external_link", ...payload });
}
