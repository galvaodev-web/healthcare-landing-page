import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LINKS, NAV_LINKS } from "../data/siteContent";
import { trackExternalLink } from "../utils/analytics";

function scrollToSection(selector: string) {
  document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
}

export function PageHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  function navigateTo(selector: string) {
    setMobileOpen(false);
    scrollToSection(selector);
  }

  function openAppointment() {
    trackExternalLink("header_agendar_consulta", LINKS.appointment);
    window.open(LINKS.appointment, "_blank", "noopener,noreferrer");
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex flex-col leading-tight">
          <span
            className="text-primary font-semibold text-lg"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Dr. Ronaldo Moura
          </span>
          <span className="text-muted-foreground text-xs tracking-widest uppercase">
            Cirurgia Vascular
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => navigateTo(link.href)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={openAppointment}
            className="ml-2 px-5 py-2 bg-primary text-primary-foreground text-sm rounded-sm hover:bg-primary/90 transition-colors duration-200"
          >
            Agendar consulta
          </button>
        </nav>

        <button
          type="button"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-sm text-primary hover:bg-secondary"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => navigateTo(link.href)}
              className="text-left text-sm text-foreground hover:text-accent transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={openAppointment}
            className="mt-2 px-5 py-2 bg-primary text-primary-foreground text-sm rounded-sm w-full"
          >
            Agendar consulta
          </button>
        </div>
      )}
    </header>
  );
}
