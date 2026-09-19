# Roman Salamzada — Bilingual Portfolio

Personal portfolio presenting my education, professional experience, technical projects, certifications, and technology watch.

The website is designed for two audiences while keeping the same projects, evidence, and visual identity:

- **English / International:** [romansalamzada.dev](https://romansalamzada.dev/)
- **French / France:** [romansalamzada.dev/fr/](https://romansalamzada.dev/fr/)

## About the portfolio

I am a BTS SIO student in the Software Development track (SLAM), with interests in backend development, systems, cybersecurity, cloud, and a long-term objective of working toward MLOps.

The portfolio includes:

- education and professional experience presented in reverse chronological order;
- technical projects with detailed descriptions and supporting evidence;
- backend, API, database, security, systems, networking, and DevOps skills;
- certifications and additional training;
- a technology watch focused on MLOps;
- separate French and English CV downloads.

## Featured projects

- **PFMP Manager** — internship management application developed as a team project. My work focuses on the ASP.NET Core backend, REST API, EF Core/MySQL, security, Docker, Nginx, and deployment. The Flutter Web frontend was mainly developed by Lenny Paul.
- **ApplicationFrais / GSB** — individual PHP MVC expense management application currently being improved.
- **Tonton Primeur** — completed C# Windows Forms and MySQL/MariaDB management application.
- **PHP Authentication System** — secondary learning project covering registration, login, sessions, password security, PDO, and MariaDB.
- **Aux Claviers Citoyens API** — Python client for a REST API using JWT authentication and CRUD operations.
- **Poker** — C# console project with gameplay logic and score persistence.

The portfolio also documents my Co’ordi work experience, the École 42 Angoulême Piscine, Hack The Box Academy progress, and my first solo Blue Team / DFIR participation in Holmes CTF 2026.

## Main features

- English site at `/` and French site at `/fr/`;
- `EN | FR` language switch with no automatic redirect;
- responsive desktop and mobile navigation;
- project and experience detail dialogs;
- photo galleries with fullscreen previews;
- accessible keyboard and focus handling for dialogs;
- reciprocal `hreflang`, canonical URLs, and language metadata;
- downloadable CVs, certificates, project documentation, and supporting evidence.

## Technologies

The portfolio itself uses semantic HTML, responsive CSS, and vanilla JavaScript. No frontend framework or runtime dependency is required.

Projects presented in the portfolio use technologies including C#, ASP.NET Core, Entity Framework Core, PHP, Python, REST/JSON, JWT, MySQL/MariaDB, SQL, Docker, Nginx, Git/GitHub, Windows Forms, and Linux.

## Project structure

```text
.
├── index.html          # English portfolio
├── fr/
│   └── index.html      # French portfolio
├── style.css           # Shared responsive design
├── script.js           # Navigation, dialogs, galleries, and focus handling
├── favicon.svg         # Browser icon
├── robots.txt          # Search-engine crawling rules
├── sitemap.xml         # English and French canonical URLs
├── images/             # Portrait, project captures, logos, and evidence
├── docs/               # Recommendation letter and project documentation
├── certificates/       # Public certificates
├── cv/                 # French and English CV files
├── build.cjs           # Static production build
├── package.json        # Build and JavaScript check commands
└── dist/               # Generated deployment output
```

## CV files

- English pages use `cv/Roman_Salamzada_CV_EN.pdf`.
- French pages use `cv/Roman_Salamzada_CV_FR.pdf`.

## Run locally

No dependencies need to be installed. Serve the project root with a static web server so both `/` and `/fr/` routes work correctly.

To check the JavaScript and generate the deployment folder:

```bash
npm run check
npm run build
```

The build command copies the two language versions and all public assets into `dist/`.
