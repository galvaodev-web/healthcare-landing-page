document.querySelectorAll("[data-track]").forEach((link) => {
  link.addEventListener("click", () => {
    const payload = {
      event_category: "engagement",
      event_label: link.getAttribute("data-track"),
      link_url: link.href,
    };

    window.gtag?.("event", "click_external_link", payload);
    window.dataLayer?.push({ event: "click_external_link", ...payload });
  });
});
