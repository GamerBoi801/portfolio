Ran explore project directory structure
Ran list all content files
Analyzed site.config.ts:L1-13
Analyzed content.config.ts:L1-100
Analyzed index.astro:L1-100
Analyzed about.astro:L1-100
Ran check navigation, footer, and subpages for configurable data
Analyzed socials.yaml:L1-30
Analyzed skills.yaml:L1-39
Analyzed achievements.yaml:L1-21
Analyzed giki-bs-cybersecurity.md:L1-20
Analyzed ai-internship.md:L1-21
Analyzed index.mdx:L1-38
Analyzed sample-paper.md:L1-22
Analyzed sample-ctf-writeup.mdx:L1-26
Analyzed index.mdx:L1-30
Analyzed index.mdx:L1-30
Ran check astro.config.mjs
Ran grep for TODO in src
Analyzed index.astro:L230-254
Analyzed SEO.astro:L1-60
Ran find occurrences of username GamerBoi801
Ran find occurrences of GIKI
Ran find occurrences of Pakistan
Ran list all files in src/pages
Analyzed about.astro:L100-234
Analyzed index.astro:L100-230
Analyzed Footer.astro:L55-84

Here is the complete list of files containing all personal data, content, and configuration across the portfolio, organized by category:

---

### 1. Global Identity & Site Config
* [src/site.config.ts](file:///home/geese/Documents/portfolio/src/site.config.ts)
  * **What's in it:** Your full name, paper author name format, headline, short bio, internship/availability status, "Currently building/learning" bullet points, location, email, and base URL.
* [src/components/SEO.astro](file:///home/geese/Documents/portfolio/src/components/SEO.astro#L25-L36)
  * **What's in it:** Schema.org JSON-LD structured data (job title, social profile URLs used by search engines).
* [src/components/Footer.astro](file:///home/geese/Documents/portfolio/src/components/Footer.astro#L67)
  * **What's in it:** The "source code" link pointing to your GitHub portfolio repository.

---

### 2. Structured Content & Data (`src/content/`)

#### **Socials, Skills & Achievements (YAML)**
* [src/content/socials.yaml](file:///home/geese/Documents/portfolio/src/content/socials.yaml)
  * Links and display settings for GitHub, LinkedIn, Codeforces, HackTheBox, and Email.
* [src/content/skills.yaml](file:///home/geese/Documents/portfolio/src/content/skills.yaml)
  * Technical skills matrix split into categories: Languages, Security & Systems, Machine Learning & Robotics, Tools & Infra.
* [src/content/achievements.yaml](file:///home/geese/Documents/portfolio/src/content/achievements.yaml)
  * Competitive programming ratings, CTF rankings, hackathon awards, dates, and verification links.

#### **Education & Experience (Markdown)**
* [src/content/education/giki-bs-cybersecurity.md](file:///home/geese/Documents/portfolio/src/content/education/giki-bs-cybersecurity.md)
  * University name, degree, dates, GPA, relevant coursework, club leadership, and summary text. (You can also add new `.md` files here for additional degrees/diplomas).
* [src/content/experience/ai-internship.md](file:///home/geese/Documents/portfolio/src/content/experience/ai-internship.md)
  * Role title, organization name, URL, location, dates, bullet-point highlights, tech stack tags, and role description. (Add new `.md` files here for more jobs/internships).

#### **Projects (`src/content/projects/`)**
Each project is in its own folder with an `index.mdx` file and a `cover.png`:
* [src/content/projects/guardian/index.mdx](file:///home/geese/Documents/portfolio/src/content/projects/guardian/index.mdx) (GUARDIAN drone supervisor)
* [src/content/projects/sentinel-ids/index.mdx](file:///home/geese/Documents/portfolio/src/content/projects/sentinel-ids/index.mdx) (Sentinel-IDS eBPF engine)
* [src/content/projects/neural-decompiler/index.mdx](file:///home/geese/Documents/portfolio/src/content/projects/neural-decompiler/index.mdx) (Neural Decompiler)
  * **What's in each:** Metadata (title, tagline, summary, category, tags, status, dates, role, metrics/highlights, repo/demo links, `featured` flag) and the Markdown body (Problem, Approach, Results, Lessons learned).

#### **Publications & Research**
* [src/content/publications/sample-paper.md](file:///home/geese/Documents/portfolio/src/content/publications/sample-paper.md)
  * Paper title, co-author list, conference/workshop venue, publication type, status, abstract, BibTeX entry, and links (arXiv, code repo, PDF).

#### **Articles & CTF Writeups**
* [src/content/posts/sample-ctf-writeup.mdx](file:///home/geese/Documents/portfolio/src/content/posts/sample-ctf-writeup.mdx)
  * Post title, publication date, category, tags, CTF event details/points, and the article content.

---

### 3. Pages with In-Line Descriptions & Copy

* [src/pages/about.astro](file:///home/geese/Documents/portfolio/src/pages/about.astro#L31-L36)
  * Lines 31–36 contain the full "About Me" lead paragraphs detailing your degree, graduation year, focus areas, and goals.
* [src/pages/index.astro](file:///home/geese/Documents/portfolio/src/pages/index.astro#L222-L250)
  * Lines 222–250 contain the "Get in touch" callout paragraph and quick-access contact links (Email, GitHub, LinkedIn).
* [src/pages/projects/index.astro](file:///home/geese/Documents/portfolio/src/pages/projects/index.astro#L21-L24)
  * Subheading paragraph describing the projects catalogue.
* [src/pages/publications.astro](file:///home/geese/Documents/portfolio/src/pages/publications.astro#L30-L33)
  * Subheading paragraph describing your research interests and lab work.
* [src/pages/writing/index.astro](file:///home/geese/Documents/portfolio/src/pages/writing/index.astro#L26-L29)
  * Subheading paragraph describing the blog/writeup topics.
* [src/pages/404.astro](file:///home/geese/Documents/portfolio/src/pages/404.astro)
  * Custom 404 message ("Signal Lost: Node Not Found").

---

### 4. Static Assets & Media (`public/`)

* [public/resume.pdf](file:///home/geese/Documents/portfolio/public/resume.pdf) — Replace with your actual PDF resume.
* [public/og-default.png](file:///home/geese/Documents/portfolio/public/og-default.png) — Open Graph social preview banner (shown when links are shared on Twitter/LinkedIn/Discord).
* [public/favicon.svg](file:///home/geese/Documents/portfolio/public/favicon.svg) and [public/favicon.ico](file:///home/geese/Documents/portfolio/public/favicon.ico) — Browser tab icon.