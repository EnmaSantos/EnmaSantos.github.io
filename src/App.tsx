import {
  ArrowUpRight,
  BriefcaseBusiness,
  Database,
  Download,
  GitPullRequest,
  Link2,
  Mail,
  RadioTower,
  Server,
  Terminal,
} from 'lucide-react'
import './App.css'

type Project = {
  name: string
  label: string
  description: string
  metric: string
  metricLabel: string
  tech: string[]
  repo: string
  live?: string
}

const projects: Project[] = [
  {
    name: 'Vitality Vista',
    label: 'Full-stack analytics app',
    description:
      'Fitness and nutrition platform that integrates exercise and nutrition APIs, structures user progress data, and turns health inputs into dashboards, workout plans, food logs, and TDEE insights.',
    metric: '1.5k+',
    metricLabel: 'exercise and food records structured',
    tech: ['React', 'TypeScript', 'PostgreSQL', 'JWT', 'APIs'],
    repo: 'https://github.com/EnmaSantos/vitality_vista',
    live: 'https://vitality-vista.vercel.app',
  },
  {
    name: 'Kairo',
    label: 'AI and NLP system',
    description:
      'Voice-first journaling app with transcription, emotion analysis, semantic search, generated notebooks, and RAG-style question answering over personal journal entries.',
    metric: '1k+',
    metricLabel: 'journal entries processed in project scope',
    tech: ['FastAPI', 'PostgreSQL', 'Whisper', 'BERT', 'Embeddings'],
    repo: 'https://github.com/EnmaSantos/kairo',
  },
  {
    name: 'Live Music Data Quality Pipeline',
    label: 'Data engineering',
    description:
      'Pipeline for ingesting messy event, venue, artist, and market data, validating quality rules, loading clean records into PostgreSQL, and exposing monitoring endpoints through FastAPI.',
    metric: '100k+',
    metricLabel: 'mock event records generated and validated',
    tech: ['Python', 'Pandas', 'PostgreSQL', 'FastAPI', 'Docker'],
    repo: 'https://github.com/EnmaSantos/live-music-data-quality-pipeline',
  },
  {
    name: 'Exercise API',
    label: 'Backend API',
    description:
      'FastAPI service that parses, normalizes, and serves exercise metadata through REST endpoints with calorie metrics, search, documentation, and deployment configuration.',
    metric: '800+',
    metricLabel: 'exercise records served through REST endpoints',
    tech: ['Python', 'FastAPI', 'JSON parsing', 'REST', 'Fly.io'],
    repo: 'https://github.com/EnmaSantos/exercise-api',
  },
  {
    name: 'Financial Tracker App',
    label: 'Product architecture',
    description:
      'Manual-first finance tracker with a Next.js app, Hono APIs, Prisma schemas, shared Zod models, and SQLite/PostgreSQL-ready persistence in a monorepo structure.',
    metric: '4',
    metricLabel: 'apps and packages in the workspace',
    tech: ['Next.js', 'Hono', 'Prisma', 'Zod', 'Turborepo'],
    repo: 'https://github.com/EnmaSantos/Financial-Tracker-App',
    live: 'https://financial-tracker-app-web.vercel.app',
  },
  {
    name: 'F1 Race Control Device',
    label: 'Hardware-backed service',
    description:
      'Race-control alert system that normalizes OpenF1 events for an ESP32 device with LED and OLED outputs, including replay endpoints and event mapping logic.',
    metric: 'ESP32',
    metricLabel: 'device target with FastAPI replay service',
    tech: ['Python', 'FastAPI', 'OpenF1', 'C++', 'PlatformIO'],
    repo: 'https://github.com/EnmaSantos/f1-race-control-device',
  },
]

const experience = [
  {
    role: 'Junior Software Developer',
    org: 'BYU-Idaho',
    date: 'January 2026 - Present',
    bullets: [
      'Built Google Apps Script automations that organize setup data for about 375 online courses per semester and generate Trello pipelines for 25 staff.',
      'Maintained Canvas LMS and Trello API abstraction layers to standardize internal data integrations and reduce repetitive configuration code.',
      'Developed a React/C# inventory app with admin roles, user balance tracking, GitHub Actions deployment, Nginx hosting, and senior-developer review.',
      'Built a responsive Canvas API dashboard tracking enrollment and assignments for 250+ students across 1,000+ courses.',
    ],
  },
  {
    role: 'Volunteer Software Analyst',
    org: 'Madison Fire Department',
    date: 'April 2024 - July 2024',
    bullets: [
      'Contributed to an equipment inventory system tracking 200+ department assets, replacing spreadsheet-heavy processes with real-time monitoring.',
      'Designed SQLite schemas and data structures focused on integrity, scalability, and reliable asset tracking.',
      'Reviewed SQL scripts and GitHub pull requests in an Agile team while maintaining clear technical documentation.',
    ],
  },
]

const stackGroups = [
  {
    title: 'Languages and Data',
    items: ['Python', 'SQL', 'TypeScript', 'JavaScript', 'R', 'C#', 'Google Apps Script'],
  },
  {
    title: 'Backend and APIs',
    items: ['FastAPI', 'Node.js', 'Express.js', 'Hono', '.NET', 'REST APIs', 'Canvas API'],
  },
  {
    title: 'Data Science and ML',
    items: ['Pandas', 'NumPy', 'scikit-learn', 'NLP', 'Statistical analysis', 'Data cleaning'],
  },
  {
    title: 'Infra and Tools',
    items: ['PostgreSQL', 'SQLite', 'MongoDB', 'GitHub Actions', 'Docker', 'Nginx', 'Render', 'Fly.io'],
  },
]

const highlights = [
  { value: '375', label: 'online courses organized per semester' },
  { value: '250+', label: 'students tracked through Canvas dashboards' },
  { value: '100k+', label: 'records modeled in data quality pipelines' },
]

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={featured ? 'project project-featured' : 'project'}>
      <div className="project-metric">
        <span>{project.metric}</span>
        <small>{project.metricLabel}</small>
      </div>
      <div className="project-body">
        <div className="section-kicker">{project.label}</div>
        <div className="project-title-row">
          <h3>{project.name}</h3>
          <div className="project-links">
            {project.live ? (
              <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.name} live site`}>
                <ArrowUpRight size={18} />
              </a>
            ) : null}
            <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.name} repository`}>
              <GitPullRequest size={18} />
            </a>
          </div>
        </div>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label={`${project.name} technologies`}>
          {project.tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Go to top">
          <Terminal size={16} />
          <span>ENMANUEL.DEV</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="resume-link" href="/Enmanuel_De_Los_Santos_Resume.pdf" target="_blank" rel="noreferrer">
          <Download size={16} />
          <span>Resume</span>
        </a>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="section-kicker">sys.log("software + data")</div>
            <h1 id="hero-title">
              <span>I build useful</span>
              <span>software from</span>
              <span>messy data,</span>
              <span>APIs, and</span>
              <span>real workflows.</span>
            </h1>
            <p className="hero-text">
              Software Engineering student with a Data Science minor at BYU-Idaho, focused on Python, FastAPI,
              full-stack systems, automation, dashboards, and data products that make operations easier to understand.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#projects">
                <Server size={17} />
                <span>View projects</span>
              </a>
              <a className="secondary-action" href="mailto:del20047@byui.edu">
                <Mail size={17} />
                <span>Contact me</span>
              </a>
            </div>
          </div>

          <aside className="operator-panel" aria-label="Profile summary">
            <div className="panel-topline">
              <span>operator.profile</span>
              <span>ready</span>
            </div>
            <div className="operator-card">
              <img src="/profile.jpg" width="112" height="112" alt="Enmanuel De Los Santos Cruz" />
              <div>
                <h2>
                  <span>Enmanuel De</span>
                  <span>Los Santos Cruz</span>
                </h2>
                <p>Software Engineering B.S. candidate, Data Science minor</p>
              </div>
            </div>
            <dl className="signal-grid">
              <div>
                <dt>Focus</dt>
                <dd>APIs, automation, analytics, ML foundations</dd>
              </div>
              <div>
                <dt>Base</dt>
                <dd>Rexburg, Idaho</dd>
              </div>
              <div>
                <dt>Graduation</dt>
                <dd>December 2026</dd>
              </div>
            </dl>
            <div className="terminal-strip">
              <code>git status --short</code>
              <span>building for employers</span>
            </div>
          </aside>
        </section>

        <section className="metrics-strip" aria-label="Portfolio highlights">
          {highlights.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section className="content-section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <div>
              <div className="section-kicker">pinned repositories</div>
              <h2 id="projects-title">Featured Projects</h2>
            </div>
            <p>
              A curated view of the projects currently pinned on GitHub, rewritten here around the employer signal:
              what problem the system solves, what data moves through it, and what technical choices matter.
            </p>
          </div>
          <div className="project-grid">
            <ProjectCard project={projects[0]} featured />
            <ProjectCard project={projects[1]} featured />
            {projects.slice(2).map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section className="content-section split-section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading compact-heading">
            <div className="section-kicker">production habits</div>
            <h2 id="experience-title">Experience</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.role}>
                <div className="timeline-meta">
                  <BriefcaseBusiness size={18} />
                  <span>{item.date}</span>
                </div>
                <h3>{item.role}</h3>
                <p>{item.org}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="stack" aria-labelledby="stack-title">
          <div className="section-heading">
            <div>
              <div className="section-kicker">tooling map</div>
              <h2 id="stack-title">Technical Stack</h2>
            </div>
            <p>
              The through-line is pragmatic: backend services, typed frontends, databases, data cleaning, and automation
              that moves work out of spreadsheets and into reliable systems.
            </p>
          </div>
          <div className="stack-grid">
            {stackGroups.map((group) => (
              <article className="stack-column" key={group.title}>
                <div className="stack-title-row">
                  {group.title.includes('Data') ? <Database size={17} /> : <RadioTower size={17} />}
                  <h3>{group.title}</h3>
                </div>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div>
            <div className="section-kicker">contact.open()</div>
            <h2 id="contact-title">Looking for software roles where data, APIs, and product thinking meet.</h2>
            <p>
              I am especially interested in internships and junior roles involving backend engineering, full-stack
              development, data engineering, automation, and applied ML workflows.
            </p>
          </div>
          <div className="contact-actions" aria-label="Contact links">
            <a href="mailto:del20047@byui.edu">
              <Mail size={18} />
              <span>Email</span>
            </a>
            <a href="https://github.com/EnmaSantos" target="_blank" rel="noreferrer">
              <GitPullRequest size={18} />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/enmadelossa" target="_blank" rel="noreferrer">
              <Link2 size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>(c) 2026 Enmanuel De Los Santos Cruz</span>
        <span>Software engineering, data systems, and automation.</span>
      </footer>
    </div>
  )
}

export default App
