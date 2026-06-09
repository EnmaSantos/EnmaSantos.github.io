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

## Custom Domain

Use `enmasantos.dev` as the GitHub Pages custom domain.

In GitHub, open the portfolio repository, then go to Settings -> Pages. Set the custom domain to:

```text
enmasantos.dev
```

In name.com, open `enmasantos.dev`, then Manage DNS Records. Add these records for the root domain:

```text
Type  Host  Answer
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
```

Add this record for the `www` version:

```text
Type   Host  Answer
CNAME  www   enmasantos.github.io
```

After GitHub verifies the domain, enable Enforce HTTPS in Settings -> Pages. DNS changes can take a while to propagate.

Vercel is not required for this portfolio because there is no backend runtime. If you later want Vercel previews, logs, or environment management, install the CLI with:

```bash
npm i -g vercel
```
