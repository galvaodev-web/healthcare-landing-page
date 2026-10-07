// Adiciona rastreamento somente nos links que possuem o atributo data-track.
document.documentElement.classList.add("js-enabled");

document.querySelectorAll("[data-track]").forEach((link) => {
  link.addEventListener("click", () => {
    // Payload padronizado enviado para ferramentas de analytics.
    const payload = {
      event_category: "engagement",
      event_label: link.getAttribute("data-track"),
      link_url: link.href,
    };

    // Envia o evento para Google Analytics, se ele estiver carregado na página.
    window.gtag?.("event", "click_external_link", payload);

    // Também envia para dataLayer, útil quando o projeto usa Google Tag Manager.
    window.dataLayer?.push({ event: "click_external_link", ...payload });
  });
});

const header = document.querySelector(".header");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll('.nav a[href^="#"]');
const backToTop = document.querySelector(".back-to-top");
const reviewsTrack = document.querySelector("#reviews-track");
const carouselPrev = document.querySelector("[data-carousel-prev]");
const carouselNext = document.querySelector("[data-carousel-next]");
const carouselDots = document.querySelector("[data-carousel-dots]");
const reviewCards = document.querySelectorAll("[data-review-card]");

const closeMenu = () => {
  nav?.classList.remove("is-open");
  menuToggle?.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
};

menuToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open");

  menuToggle.classList.toggle("is-open", Boolean(isOpen));
  menuToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
  document.body.classList.toggle("menu-open", Boolean(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

document.addEventListener("click", (event) => {
  if (!nav?.classList.contains("is-open")) {
    return;
  }

  if (!event.target.closest(".header")) {
    closeMenu();
  }
});

document.querySelectorAll(".faq-item").forEach((item, index) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  const answerId = `faq-answer-${index + 1}`;

  answer.id = answerId;
  question.setAttribute("aria-controls", answerId);

  question.addEventListener("click", () => {
    const isOpen = item.classList.toggle("is-open");

    question.setAttribute("aria-expanded", String(isOpen));
    answer.style.maxHeight = isOpen ? `${answer.scrollHeight}px` : "0";
  });
});

window.addEventListener("resize", () => {
  document.querySelectorAll(".faq-item.is-open .faq-answer").forEach((answer) => {
    answer.style.maxHeight = `${answer.scrollHeight}px`;
  });
});

const scrollReviews = (direction) => {
  const firstCard = reviewsTrack?.querySelector(".review-card");
  const cardWidth = firstCard?.getBoundingClientRect().width ?? 280;

  reviewsTrack?.scrollBy({
    left: direction * (cardWidth + 24),
    behavior: "smooth",
  });
};

carouselPrev?.addEventListener("click", () => scrollReviews(-1));
carouselNext?.addEventListener("click", () => scrollReviews(1));

const updateCarouselDots = () => {
  if (!reviewsTrack || !carouselDots || !reviewCards.length) {
    return;
  }

  const firstCard = reviewCards[0];
  const cardWidth = firstCard.getBoundingClientRect().width + 24;
  const activeIndex = Math.round(reviewsTrack.scrollLeft / cardWidth);

  carouselDots.querySelectorAll(".carousel-dot").forEach((dot, index) => {
    dot.classList.toggle("is-active", index === activeIndex);
  });
};

reviewCards.forEach((_, index) => {
  const dot = document.createElement("button");

  dot.className = "carousel-dot";
  dot.type = "button";
  dot.setAttribute("aria-label", `Mostrar avaliação ${index + 1}`);
  dot.addEventListener("click", () => {
    const cardWidth = reviewCards[0].getBoundingClientRect().width + 24;

    reviewsTrack?.scrollTo({ left: index * cardWidth, behavior: "smooth" });
  });
  carouselDots?.appendChild(dot);
});

reviewsTrack?.addEventListener("scroll", updateCarouselDots, { passive: true });
updateCarouselDots();

const revealElements = document.querySelectorAll(
  ".section, .stats, .card, .alert-band, .portrait, .schedule-box, .reviews-summary"
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("is-visible");
  });
}

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-42% 0px -50% 0px", threshold: 0 }
  );

  document.querySelectorAll("main section[id]").forEach((section) => {
    sectionObserver.observe(section);
  });
}

const updateScrollState = () => {
  const scrollTop = window.scrollY;
  header?.classList.toggle("is-scrolled", scrollTop > 16);
  backToTop?.classList.toggle("is-visible", scrollTop > 560);
};

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

updateScrollState();
window.addEventListener("scroll", updateScrollState, { passive: true });
