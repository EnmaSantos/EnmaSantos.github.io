# Enmanuel De Los Santos Cruz Portfolio

This is my personal software engineering portfolio, live at [enmasantos.dev](https://enmasantos.dev). It is built to give recruiters, hiring managers, and collaborators a focused view of the kind of work I like building: useful software shaped around APIs, data systems, automation, dashboards, and real operational workflows.

The site highlights selected projects from my GitHub profile, summarizes my current experience, maps out my technical stack, and links directly to my resume, GitHub, LinkedIn, and email. The goal is to make the first impression practical: what I build, what tools I use, and where my engineering interests are headed.

## What It Does

- Presents a concise landing page for my software engineering and data science work.
- Showcases full-stack, backend, data engineering, API, automation, and applied ML projects.
- Summarizes my experience at BYU-Idaho and the Madison Fire Department.
- Provides a quick technical stack grouped by languages, backend tools, data science, infrastructure, and deployment.
- Publishes as a fast static site through GitHub Pages with a custom `.dev` domain.

## Tech Stack

- React and TypeScript for the interface.
- Vite for local development and production builds.
- Lucide React for icons.
- GitHub Actions for build and deployment.
- GitHub Pages for hosting.

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

This repository deploys to GitHub Pages through the workflow in `.github/workflows/deploy.yml`. On every push to `main`, GitHub Actions installs dependencies, builds the Vite site, uploads the `dist` folder, and publishes the latest version.

Vercel is not required for this portfolio because there is no backend runtime. If you later want Vercel previews, logs, or environment management, install the CLI with:

```bash
npm i -g vercel
```
