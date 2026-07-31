import { Activity, Award, Heart, Shield } from "lucide-react";

export const LINKS = {
  whatsapp: "https://api.whatsapp.com/send?phone=61993712512",
  appointment:
    "https://www.rededorsaoluiz.com.br/encontre-um-medico/perfil/ronaldo-soares-de-moura-filho",
  directSchedule: "https://www.rededorsaoluiz.com.br/paciente/marcar-consulta",
  lattes: "http://lattes.cnpq.br/1246343587689952",
  doctoralia: "https://www.doctoralia.com.br/z/qF9zAV",
} as const;

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Áreas de atuação", href: "#especialidades" },
  { label: "Sobre", href: "#sobre" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Contato", href: "#contato" },
] as const;

export const SERVICES = [
  {
    icon: Activity,
    title: "Angiologia",
    desc: "Avaliação clínica, prevenção, diagnóstico e acompanhamento das doenças que afetam artérias, veias e vasos linfáticos.",
    detail: "Prevenção · Diagnóstico · Acompanhamento",
  },
  {
    icon: Heart,
    title: "Cirurgia Vascular",
    desc: "Tratamento cirúrgico das doenças vasculares, com indicação individualizada e cuidado em todas as etapas do atendimento.",
    detail: "Artérias · Veias · Sistema linfático",
  },
  {
    icon: Shield,
    title: "Cirurgia Endovascular",
    desc: "Abordagem por técnicas minimamente invasivas para o tratamento de diferentes condições vasculares.",
    detail: "Angiorradiologia · Técnicas endovasculares",
  },
  {
    icon: Award,
    title: "Ecografia Vascular",
    desc: "Avaliação vascular por Eco-Doppler, contribuindo para um diagnóstico preciso e para o planejamento do tratamento.",
    detail: "Eco-Doppler · Ultrassonografia vascular",
  },
] as const;

export const STATS = [
  { value: "UFF", label: "Graduação em Medicina" },
  { value: "3", label: "Residências médicas" },
  { value: "SBACV", label: "Título de especialista" },
  { value: "4", label: "Hospitais da Rede D'Or no DF" },
] as const;

export const CAREER = [
  {
    period: "2009 – 2014",
    title: "Graduação em Medicina",
    text: "Universidade Federal Fluminense (UFF), no Rio de Janeiro.",
  },
  {
    period: "2015 – 2017",
    title: "Residência em Cirurgia Geral",
    text: "Hospital Federal de Ipanema, no Rio de Janeiro.",
  },
  {
    period: "2018 – 2020",
    title: "Residência em Cirurgia Vascular",
    text: "Hospital Federal da Lagoa, no Rio de Janeiro.",
  },
  {
    period: "2020 – 2021",
    title: "Angiorradiologia e Cirurgia Endovascular",
    text: "Residência médica no Hospital Federal da Lagoa.",
  },
  {
    period: "2022",
    title: "Especialista em Cirurgia Vascular",
    text: "Título concedido pela SBACV/AMB.",
  },
  {
    period: "2023 – atual",
    title: "Cirurgião Vascular no Distrito Federal",
    text: "Atuação nos hospitais DF Star, Hospital do Coração do Brasil, Santa Luzia e Santa Helena.",
  },
] as const;

export const CREDENTIALS = [
  "Graduação em Medicina pela Universidade Federal Fluminense (UFF)",
  "Residência em Cirurgia Geral pelo Hospital Federal de Ipanema",
  "Residência em Cirurgia Vascular pelo Hospital Federal da Lagoa",
  "Residência em Angiorradiologia e Cirurgia Endovascular",
  "Título de Especialista em Cirurgia Vascular pela SBACV/AMB",
] as const;

export const CONTACT_ITEMS = [
  {
    type: "phone",
    label: "Telefone e WhatsApp",
    value: "(61) 99371-2512",
    sub: "Toque para iniciar uma conversa",
    href: LINKS.whatsapp,
  },
  {
    type: "location",
    label: "Atendimento",
    value: "Brasília - Distrito Federal",
    sub: "Hospitais da Rede D'Or",
  },
  {
    type: "hospital",
    label: "Hospitais",
    value: "DF Star, Hospital do Coração, Santa Luzia e Santa Helena",
    sub: "Cirurgia Vascular e Ecografia Vascular",
  },
  {
    type: "schedule",
    label: "Agendamento",
    value: "Consulte horários disponíveis",
    sub: "Agendamento oficial pela Rede D'Or",
    href: LINKS.appointment,
  },
] as const;
