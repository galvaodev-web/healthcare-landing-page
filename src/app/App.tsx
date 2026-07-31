import {
  Phone,
  MapPin,
  Clock,
  Heart,
  ChevronRight,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import doctorPhoto from "../assets/Landingpage.jpg";
import { PageHeader } from "../components/PageHeader";
import {
  CAREER,
  CONTACT_ITEMS,
  CREDENTIALS,
  FAQ_ITEMS,
  HOSPITALS,
  LINKS,
  PROFESSIONAL_REGISTRATION,
  SERVICES,
  STATS,
  WHEN_TO_SEEK_CARE,
} from "../data/siteContent";
import { trackExternalLink } from "../utils/analytics";

const CONTACT_ICONS = {
  phone: Phone,
  location: MapPin,
  hospital: Heart,
  schedule: Clock,
} as const;

export default function App() {
  function scrollTo(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  }

  function openExternal(label: string, url: string) {
    trackExternalLink(label, url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div
      className="min-h-screen overflow-x-hidden bg-background text-foreground"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <PageHeader />

      {/* ── HERO ── */}
      <section
        id="inicio"
        className="pt-16 grid md:min-h-screen md:grid-cols-2"
      >
        {/* Left */}
        <div className="min-w-0 flex flex-col justify-start md:justify-center px-8 md:px-16 lg:px-24 py-14 md:py-20">
          <p className="text-accent text-[11px] md:text-xs tracking-[0.12em] uppercase mb-4 font-medium leading-relaxed break-words">
            Angiologista · Cirurgião Vascular e Endovascular · Ecografista Vascular
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-primary leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
          >
            Saúde vascular com cuidado e precisão
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
            Especialista em Cirurgia Vascular pela SBACV/AMB, com formação completa em
            Cirurgia Geral, Cirurgia Vascular, Angiorradiologia e Cirurgia Endovascular.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => openExternal("hero_agendar_consulta", LINKS.appointment)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-all duration-200 hover:gap-3"
            >
              Agendar consulta <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollTo("#especialidades")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 border border-primary/30 text-primary text-sm font-medium rounded-sm hover:bg-secondary transition-colors duration-200"
            >
              Ver especialidades
            </button>
          </div>
          <div className="mt-12 flex items-center gap-2">
            <CheckCircle size={16} className="text-accent" />
            <span className="text-muted-foreground text-sm ml-1">
              Atendimento em hospitais de referência da Rede D'Or no Distrito Federal
            </span>
          </div>
        </div>

        {/* Right — photo */}
        <div className="relative hidden md:block bg-secondary overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=900&h=1000&fit=crop&auto=format"
            alt="Modelo anatômico em ambiente clínico"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />
          {/* Floating card */}
          <div className="absolute bottom-12 left-8 bg-white/95 backdrop-blur-sm p-5 rounded-sm shadow-lg border border-border max-w-56">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs text-accent font-medium tracking-wide uppercase">Disponível</span>
            </div>
            <p className="text-primary text-sm font-medium">Agendamento pela Rede D'Or</p>
            <p className="text-muted-foreground text-xs mt-1">Atendimento em Brasília - DF</p>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-primary py-14">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="text-4xl text-primary-foreground mb-1"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
              >
                {s.value}
              </p>
              <p className="text-primary-foreground/60 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ESPECIALIDADES ── */}
      <section id="especialidades" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-xs tracking-widest uppercase font-medium mb-3">
            Áreas de atuação
          </p>
          <h2
            className="text-3xl md:text-4xl text-primary"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
          >
            Especialidades
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Cuidado especializado para a saúde vascular, da avaliação clínica ao
            tratamento cirúrgico e endovascular.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="group bg-card border border-border rounded-sm p-8 hover:border-accent/40 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-11 h-11 bg-secondary rounded-sm flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                  <s.icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3
                    className="text-primary text-lg mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {s.desc}
                  </p>
                  <p
                    className="text-xs text-accent/80 tracking-widest"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {s.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUANDO PROCURAR ── */}
      <section id="quando-procurar" className="bg-background py-24 px-6 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-accent text-xs tracking-widest uppercase font-medium mb-3">
              Quando procurar
            </p>
            <h2
              className="text-3xl md:text-4xl text-primary"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
            >
              Sinais que merecem avaliação vascular
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              A avaliação médica ajuda a identificar alterações de circulação, orientar
              prevenção e definir se há necessidade de exames complementares.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHEN_TO_SEEK_CARE.map((item) => (
              <article
                key={item.title}
                className="bg-card border border-border rounded-sm p-6 min-h-64"
              >
                <div className="w-10 h-10 bg-secondary rounded-sm flex items-center justify-center mb-5">
                  <item.icon size={19} className="text-accent" />
                </div>
                <h3 className="text-primary font-medium mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 bg-secondary border border-border rounded-sm p-5">
            <p className="text-primary text-sm leading-relaxed">
              Em caso de dor súbita intensa, falta de ar, perda de força, alteração
              importante de cor ou temperatura em membro, procure atendimento de urgência.
            </p>
          </div>
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section id="sobre" className="bg-secondary py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative aspect-[4/5] bg-secondary rounded-sm overflow-hidden order-2 md:order-1">
            <img
              src={doctorPhoto}
              alt="Dr. Ronaldo Soares de Moura Filho"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <p className="text-accent text-xs tracking-widest uppercase font-medium mb-4">
              Sobre o médico
            </p>
            <h2
              className="text-3xl md:text-4xl text-primary mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
            >
              Dr. Ronaldo Soares de Moura Filho
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Natural do Rio de Janeiro, formou-se em Medicina pela Universidade Federal
              Fluminense. Realizou residência em Cirurgia Geral no Hospital Federal de
              Ipanema e residências em Cirurgia Vascular e em Angiorradiologia e Cirurgia
              Endovascular no Hospital Federal da Lagoa.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Foi médico militar do Exército Brasileiro, com atuação no Rio de Janeiro,
              Mato Grosso do Sul e Distrito Federal. Atualmente integra serviços de
              Cirurgia Vascular da Rede D'Or em Brasília.
            </p>

            <div className="space-y-3">
              {CREDENTIALS.map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{c}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              <div className="bg-background border border-border rounded-sm p-4">
                <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">
                  Registro
                </p>
                <p className="text-primary text-sm font-semibold">{PROFESSIONAL_REGISTRATION.crm}</p>
              </div>
              {PROFESSIONAL_REGISTRATION.rqe.map((item) => (
                <div key={item} className="bg-background border border-border rounded-sm p-4">
                  <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">
                    Qualificação
                  </p>
                  <p className="text-primary text-sm font-semibold">{item}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => openExternal("sobre_agendar_consulta", LINKS.appointment)}
              className="mt-10 flex items-center gap-2 text-sm text-primary font-medium border-b border-primary/40 pb-0.5 hover:border-primary transition-colors"
            >
              Agendar uma consulta <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── TRAJETÓRIA ── */}
      <section id="trajetoria" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-xs tracking-widest uppercase font-medium mb-3">
            Formação e experiência
          </p>
          <h2
            className="text-3xl md:text-4xl text-primary"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
          >
            Trajetória profissional
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAREER.map((item) => (
            <div key={item.period} className="bg-card border border-border rounded-sm p-7">
              <p className="text-accent text-xs tracking-widest uppercase mb-3">{item.period}</p>
              <h3 className="text-primary font-medium mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={LINKS.lattes}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackExternalLink("trajetoria_lattes", LINKS.lattes)}
            className="px-6 py-3 border border-primary/30 text-primary text-sm rounded-sm hover:bg-secondary transition-colors"
          >
            Ver currículo Lattes
          </a>
          <a
            href={LINKS.doctoralia}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackExternalLink("trajetoria_doctoralia", LINKS.doctoralia)}
            className="px-6 py-3 border border-primary/30 text-primary text-sm rounded-sm hover:bg-secondary transition-colors"
          >
            Perfil no Doctoralia
          </a>
        </div>
      </section>

      {/* ── LOCAIS ── */}
      <section id="locais" className="bg-secondary py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent text-xs tracking-widest uppercase font-medium mb-3">
              Locais de atendimento
            </p>
            <h2
              className="text-3xl md:text-4xl text-primary"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
            >
              Atendimento na Rede D'Or em Brasília
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
              Consultas, exames e procedimentos devem ser confirmados no ambiente oficial
              de agendamento conforme unidade, agenda e disponibilidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOSPITALS.map((hospital) => (
              <article key={hospital.name} className="bg-card border border-border rounded-sm p-6">
                <div className="w-10 h-10 bg-secondary rounded-sm flex items-center justify-center mb-5">
                  <hospital.icon size={19} className="text-accent" />
                </div>
                <h3 className="text-primary font-medium mb-3">{hospital.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{hospital.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── DÚVIDAS ── */}
      <section id="duvidas" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent text-xs tracking-widest uppercase font-medium mb-3">
            Dúvidas frequentes
          </p>
          <h2
            className="text-3xl md:text-4xl text-primary"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
          >
            Perguntas comuns antes da consulta
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {FAQ_ITEMS.map((item) => (
            <article key={item.question} className="bg-card border border-border rounded-sm p-6">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-secondary rounded-sm flex items-center justify-center flex-shrink-0">
                  <item.icon size={17} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-primary font-medium mb-2">{item.question}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="contato" className="bg-primary py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <p className="text-accent text-xs tracking-widest uppercase font-medium mb-4">
              Contato
            </p>
            <h2
              className="text-3xl md:text-4xl text-primary-foreground mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
            >
              Agende sua consulta
            </h2>
            <p className="text-primary-foreground/70 leading-relaxed mb-10">
              Entre em contato pelo WhatsApp ou acesse o perfil do médico na Rede D'Or
              para consultar locais, horários e disponibilidade.
            </p>

            <div className="space-y-6">
              {CONTACT_ITEMS.map((item) => {
                const Icon = CONTACT_ICONS[item.type];

                return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-primary-foreground/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-primary-foreground/70" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/50 text-xs uppercase tracking-wide mb-0.5">
                      {item.label}
                    </p>
                    {"href" in item ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => trackExternalLink(`contato_${item.label}`, item.href)}
                        className="text-primary-foreground text-sm font-medium hover:text-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-primary-foreground text-sm font-medium">{item.value}</p>
                    )}
                    <p className="text-primary-foreground/50 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
                );
              })}
            </div>
          </div>

          {/* Card de agendamento */}
          <div className="bg-background rounded-sm p-8 md:p-10 border border-white/5 flex flex-col justify-center">
            <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
              <Clock size={26} className="text-accent" />
            </div>
            <h3
              className="text-primary text-2xl md:text-3xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
            >
              Agende sua consulta
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Consulte os horários disponíveis e finalize seu agendamento no ambiente
              oficial da Rede D’Or.
            </p>
            <a
              href={LINKS.directSchedule}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackExternalLink("contato_ver_horarios", LINKS.directSchedule)}
              className="w-full py-3.5 bg-primary text-primary-foreground text-sm font-bold rounded-sm hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center text-center"
            >
              Ver horários disponíveis
            </a>
            <p className="text-muted-foreground text-xs text-center mt-4">
              Você será direcionado ao site oficial da Rede D’Or.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-foreground py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p
              className="text-background text-base font-medium"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Dr. Ronaldo Moura
            </p>
            <p className="text-background/40 text-xs mt-0.5">
              Angiologia · Cirurgia Vascular e Endovascular · Ecografia Vascular
            </p>
            <p className="text-background/35 text-xs mt-2">
              {PROFESSIONAL_REGISTRATION.crm} · {PROFESSIONAL_REGISTRATION.rqe.join(" · ")}
            </p>
          </div>
          <p className="text-background/30 text-xs text-center md:text-right">
            © 2026 Dr. Ronaldo Soares de Moura Filho. Todos os direitos reservados.
            <br />
            CFM Resolução nº 2.336/2023 — Publicidade médica
          </p>
        </div>
      </footer>
    </div>
  );
}
