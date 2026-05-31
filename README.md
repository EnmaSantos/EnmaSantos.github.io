# Enmanuel De Los Santos Cruz Portfolio

Employer-facing portfolio for Enmanuel De Los Santos Cruz, built as a static React/Vite site. It highlights software engineering, data engineering, API, analytics, and automation work using resume details plus the currently pinned GitHub projects.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

This project is ready for GitHub Pages. Push it to `EnmaSantos/EnmaSantos.github.io`, then set Pages to use GitHub Actions as the source. The workflow in `.github/workflows/deploy.yml` builds the static site and publishes `dist`.

Vercel is not required for this portfolio because there is no backend runtime. If you later want Vercel previews, logs, or environment management, install the CLI with:

```bash
npm i -g vercel
```
