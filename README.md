# Dr. Ronaldo Moura

Landing page profissional do Dr. Ronaldo Soares de Moura Filho, angiologista,
cirurgião vascular e endovascular e ecografista vascular em Brasília.

## Tecnologias

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

## Build de produção

```bash
pnpm build
pnpm preview
```

## Publicação

O site é publicado pelo workflow `.github/workflows/deploy-pages.yml`, que gera a
pasta `dist/` e envia o artefato para o GitHub Pages.

No GitHub, a fonte do Pages deve permanecer como **GitHub Actions**. Se a fonte
for alterada para `main / root`, o Pages deixa de usar o build do Vite.

## Conteúdo

A landing inclui:

- especialidades médicas;
- sinais para procurar avaliação vascular;
- trajetória e registros profissionais;
- locais de atendimento;
- dúvidas frequentes;
- contato e agendamento oficial.

## Estrutura

```text
src/
  app/          Composição principal da página
  assets/       Imagens locais
  components/   Componentes reutilizáveis
  data/         Conteúdo e links externos
  styles/       Tema e estilos globais
```
