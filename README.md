# Dr. Ronaldo Moura

Landing page profissional do Dr. Ronaldo Soares de Moura Filho, angiologista,
cirurgião vascular e endovascular e ecografista vascular em Brasília.

## Tecnologias

- HTML5
- CSS3
- JavaScript

## Como abrir

Abra o arquivo `index.html` diretamente no navegador. Para testar por servidor
local, use qualquer servidor estático simples, por exemplo:

```bash
npx --yes serve . -l 4173
```

Depois acesse `http://localhost:4173`.

## Publicação

O site é publicado pelo workflow `.github/workflows/deploy-pages.yml`, que envia
o `index.html` e a pasta `assets/` diretamente para o GitHub Pages. Não há etapa
de build.

No GitHub, a fonte do Pages deve permanecer como **GitHub Actions**.

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
index.html
assets/
  css/
    styles.css
  js/
    main.js
src/
  assets/
    Landingpage.jpg
```
