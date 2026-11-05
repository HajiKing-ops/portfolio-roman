# Roman Salamzada — Bilingual Portfolio

Personal student portfolio presenting education, experience, projects, skills, certifications, and a technology watch. Built with HTML, responsive CSS, and vanilla JavaScript, without a frontend framework or runtime dependencies.

- **English / International:** [romansalamzada.dev](https://romansalamzada.dev/) at `/`.
- **French:** [romansalamzada.dev/fr/](https://romansalamzada.dev/fr/) at `/fr/`.
- Both versions share the `EN | FR` switch, cards, detail dialogs, galleries, and keyboard/focus handling.

## Current projects

- **PFMP Manager** — flagship project, completed during a team internship. Roman’s contribution covers the ASP.NET Core backend, REST API, EF Core / MySQL, security, Docker, Nginx, deployment, and integration. Lenny Paul mainly developed the Flutter Web frontend.
- **Personal Command Center — Developer Edition** — personal project in development. A local-first ASP.NET Core / .NET 10 dashboard combines 1–100 recent GitHub commits with optional persistent SQLite context and NVIDIA Nemotron through Nebius Token Factory. It generates a progress summary and requests exactly three next tasks; the dashboard extracts up to three suggestions. Context creation, retrieval, and goal updates are API-only. Only context is persisted. Source/diff inspection, feature verification, task/history storage, and production deployment are not claimed. Began as a project direction for the Nebius × NVIDIA Global AI Hackathon; no award or official outcome is claimed. **Repository currently private.**
- **Aux Claviers Citoyens — ASP.NET Core API** — separate BTS SIO SLAM project in progress: C# / .NET 10, EF Core / Pomelo / MySQL, JWT authentication and user-management foundations, DTOs, dependency injection, and progressive Controller → Service → Repository → DbContext separation. Partially layered; tournament integration, authentication lifecycle, and production readiness remain incomplete. **Repository currently private.**
- **Aux Claviers Citoyens API — Python client** — distinct Python 3 / requests REST client with JWT Bearer, reusable ApiClient, GET/POST/PUT/DELETE, domain resources, and CLI menus. Its existing [public repository](https://github.com/HajiKing-ops/aux-claviers-api) remains attached only to the Python project.
- **ApplicationFrais / GSB** — individual PHP MVC application: **Completed project · Individual / Projet terminé · Individuel**.
- **Tonton Primeur** — completed individual C# Windows Forms / MySQL–MariaDB management application.
- **PHP Authentication System** — secondary learning project with documented security limitations.
- **Poker, interfaces/forms, and local AI experiment** — existing educational and personal work retained.

MLOps remains a future career objective, not a current professional title.

## Training, cybersecurity, and evidence

- **Hack The Box — Level 32 · Skilled** / **Hack The Box — Niveau 32 · Skilled**. Roman Salamzada · @D4rkne33 · France. Academy learning evidence retained; volatile statistics omitted.
- **Root-Me PRO EDU — CTF Inter-Établissements 2026**, 4 November 2026, TraceForge, Post-BAC / BTS. Observed end-of-event scoreboard: 5,350 points, 32/91 validations (35.2%), 9th/12 teams. Not presented as a certified official final ranking.
- **Hack The Box Holmes CTF 2026 — The Reichenbach Directive**, first solo Blue Team / DFIR CTF, 17–21 September 2026. Official certificate: **857th/5,637 teams, 1,700 points, 19/111 challenges**. The separate in-event screenshot remains labeled as progress evidence.
- **Python Essentials 1**, Cisco Networking Academy, completed 23 September 2026. Offered by BTS SIO lycée J. Jaurès, Aubusson; instructor Roumaneix Doryan; certificate ID `2688ff96-cee9-4330-ac51-e228a904573c`.
- **C Essentials 1** remains available alongside Python Essentials 1.
- Co’ordi recommendation letter remains public; employment attestation remains private. Official dates: 6 January–13 August 2025.
- Existing École 42 Piscine content retained; no attestation PDF is currently supplied in this project.

Skills and the expandable BTS E5–E6 mapping include the new backend projects, API / AI integration, SQLite context, DTOs, dependency injection, JWT / PBKDF2 foundations, Python training, and Root-Me participation. Proposed mappings reference evidence rather than validate competencies. No skill percentages or invented levels are used.

## Legal notices and privacy

- English: [`/legal/`](https://romansalamzada.dev/legal/).
- French: [`/fr/mentions-legales/`](https://romansalamzada.dev/fr/mentions-legales/).
- Both pages reuse the existing design and navigation, link to each other through `EN | FR`, and are linked from the homepage footers.
- The inspected source has no analytics, advertising, embeds, third-party widgets, contact form, tracking cookies, or tracking storage. No cookie banner is added. Notices distinguish site code from [GitHub Pages’ security IP logging](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection) and link to GitHub’s privacy statement.

## Project structure

```text
index.html                    # English portfolio
fr/index.html                 # French portfolio
legal/index.html              # English legal notice
fr/mentions-legales/index.html # French legal notice
style.css                     # Shared responsive design
script.js                     # Navigation, dialogs, galleries, focus handling
images/                       # Portrait, project captures, logos, evidence
docs/                         # Public recommendation and project documentation
certificates/                 # C Essentials, Python Essentials, Holmes
cv/                           # Existing EN/FR CV files, unchanged
favicon.svg, robots.txt       # Site assets and crawling rules
sitemap.xml                   # Four canonical EN/FR portfolio/legal URLs
build.cjs, package.json        # Dependency-free build and JavaScript check
dist/                         # Generated static output
```

Python certificate reused under its original filename:
`Python_Essentials_1_certificate_romansalamzada50-gmail-com_2688ff96-cee9-4330-ac51-e228a904573c.pdf`.

Other linked documents: `certificates/c-essentials-1-public.pdf`, `certificates/holmes-ctf-2026-d4rkne33.pdf`, and `docs/Lettre_recommandation_Roman_SALAMZADA_CoOrdi_v9.pdf`. Links use paths relative to each language page.

## Local verification and build

No package installation required. Serve the project root to use directory routes:

```bash
python -m http.server 8765 --bind 127.0.0.1
npm run check
npm run build
```

The build copies both homepages, both legal pages, shared files, and public assets into `dist/`. Private projects have no repository buttons. CV files remain unchanged.
