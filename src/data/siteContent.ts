import {
  Activity,
  AlertTriangle,
  Award,
  Building2,
  Heart,
  HelpCircle,
  SearchCheck,
  Shield,
} from "lucide-react";

export const LINKS = {
  site: "https://galvaodev-web.github.io/healthcare-landing-page/",
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
  { label: "Quando procurar", href: "#quando-procurar" },
  { label: "Sobre", href: "#sobre" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
] as const;

export const PROFESSIONAL_REGISTRATION = {
  crm: "CRM 30373/DF",
  rqe: ["RQE 21394 - Cirurgia vascular", "RQE 21770 - Cirurgia geral"],
  source: "Rede D'Or",
} as const;

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

export const WHEN_TO_SEEK_CARE = [
  {
    icon: Activity,
    title: "Dor, peso ou cansaço nas pernas",
    text: "Sintomas persistentes, piora ao longo do dia ou sensação de queimação podem indicar necessidade de avaliação vascular.",
  },
  {
    icon: SearchCheck,
    title: "Varizes, vasinhos e inchaço",
    text: "A consulta ajuda a entender a causa, avaliar circulação venosa e definir acompanhamento ou tratamento adequado.",
  },
  {
    icon: Shield,
    title: "Trombose, feridas ou pé diabético",
    text: "Histórico de trombose, feridas de difícil cicatrização ou alterações circulatórias pedem cuidado especializado.",
  },
  {
    icon: AlertTriangle,
    title: "Sinais de alerta",
    text: "Dor súbita intensa, falta de ar, perda de força, alteração de cor importante ou ferida grave exigem atendimento de urgência.",
  },
] as const;

export const HOSPITALS = [
  {
    icon: Building2,
    name: "DF Star",
    text: "Atendimento e procedimentos em estrutura hospitalar da Rede D'Or no Distrito Federal.",
  },
  {
    icon: Heart,
    name: "Hospital do Coração do Brasil",
    text: "Atuação em Cirurgia Vascular, Cirurgia Endovascular e Ecografia Vascular.",
  },
  {
    icon: Building2,
    name: "Hospital Santa Luzia",
    text: "Disponibilidade de consultas e procedimentos conforme agenda oficial da Rede D'Or.",
  },
  {
    icon: Building2,
    name: "Hospital Santa Helena",
    text: "Cuidado vascular em Brasília com suporte hospitalar e encaminhamento individualizado.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    icon: HelpCircle,
    question: "Quando devo procurar um angiologista ou cirurgião vascular?",
    answer:
      "Dor, inchaço, varizes, sensação de peso nas pernas, feridas que demoram a cicatrizar, histórico de trombose ou suspeita de alteração circulatória justificam avaliação especializada.",
  },
  {
    icon: SearchCheck,
    question: "O que é o Eco-Doppler vascular?",
    answer:
      "É um exame de ultrassom que avalia o fluxo de sangue em artérias e veias, ajudando no diagnóstico e no planejamento do tratamento.",
  },
  {
    icon: Shield,
    question: "Toda doença vascular precisa de cirurgia?",
    answer:
      "Não. A conduta depende do diagnóstico, dos sintomas, dos exames e do contexto de cada paciente. Muitas situações podem ser acompanhadas clinicamente.",
  },
  {
    icon: Building2,
    question: "Onde é feito o atendimento?",
    answer:
      "O atendimento ocorre em Brasília, em hospitais da Rede D'Or. Locais, horários e disponibilidade devem ser confirmados no agendamento oficial.",
  },
  {
    icon: Award,
    question: "Atende por convênio?",
    answer:
      "A disponibilidade por convênio pode variar conforme unidade, agenda e plano. A confirmação deve ser feita diretamente no ambiente oficial da Rede D'Or.",
  },
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
