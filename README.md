# Farhan Adiwidya Pradana — Portfolio

A responsive editorial portfolio for a UGM Computer Science undergraduate working across data, AI, engineering, and business. Built with Next.js App Router, React, TypeScript, Tailwind CSS 4, Motion, Lucide, Inter Variable, and IBM Plex Mono. The current design uses compact editorial layouts, thin manga-style panels, and restrained motorsport details.

## Run locally

Requires Node.js 20.9+ (Node 22 LTS recommended) and npm, with access to the npm registry.

```powershell
npm install
npm run dev
```

Open **http://127.0.0.1:3000**. The committed `package-lock.json` supports reproducible installs with `npm ci`.

## Validate and build

```powershell
npm run lint
npm run typecheck
npm run build
npm start
```

Next.js also validates types during the production build. The homepage, twelve `/projects/[slug]` case studies, sharing image, sitemap, and robots are generated without live GitHub API calls. Unknown project slugs return a 404. No API keys, database, or contact-form service are needed.

**V13 validation:** lint, TypeScript, and the production build pass. Production-browser checks cover all twelve project routes, filters, expansion, sitemap, keyboard controls, reduced motion, no-JavaScript access, and layouts at 375, 768, 1440, and 1920px. See [VALIDATION.md](VALIDATION.md) for details.

## Deploy to Vercel

1. Push this project to your GitHub repository, including `package-lock.json`. Generated files, local environment files, original photo/design references, and dependencies are excluded by `.gitignore`.
2. Import the repository into Vercel; select the **Next.js** framework preset. Keep the default `npm run build` build command and default Next.js output directory.
3. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin, without a trailing slash. For a custom domain, use that domain. `.env.example` shows local configuration. If unset, the application uses Vercel's production hostname when available; local development falls back to localhost.
4. Deploy, then verify `/`, all twelve project routes, `/sitemap.xml`, `/robots.txt`, `/opengraph-image`, and an unknown route. Check the live sharing image and canonical URLs after attaching a domain.

This project was prepared for Vercel as requested; it has not been uploaded to a hosting account or published.

## Content and architecture

```text
src/
  app/
    layout.tsx                 Global metadata, theme initialization, shared shell
    page.tsx                   All nine homepage sections
    globals.css                CSS imports and Tailwind theme setup
    editorial.css              Design tokens, compact layouts, responsive rules
    project-illustrations.css   Existing project diagrams and compact variants
    projects/[slug]/page.tsx   Eight statically generated case studies
    not-found.tsx              Custom 404
    opengraph-image.tsx         Generated 1200 × 630 sharing image
    icon.svg                   Original monogram favicon
    sitemap.ts / robots.ts     Search-engine discovery
  components/
    header.tsx                 Sticky nav, mobile disclosure, theme toggle
    footer.tsx                 Footer and back-to-top link
    education.tsx              Academic rows with supplied local university logos
    network.tsx                Retained legacy motif (not used in the hero)
    projects.tsx               Category filters and project grid
    project-visual.tsx         Original CSS/SVG conceptual illustrations
    beyond-code.tsx             Manga-panel and automotive interest cards
    repository-screenshot.tsx  Screenshot with graceful error fallback
    ui.tsx                     Reveal, section heading, social links
  data/
    profile.ts                 Name, bio, social links, optional CV URL
    contact.ts                 Server-only phone privacy configuration
    projects.ts                Typed case studies, links, source review dates
    experience.ts              Consulting and student organization roles
    education.ts               Institutions, grades, editable credits
    skills.ts                  Categorized toolkit
    achievements.ts            Awards and research links
    interests.ts               Editable anime and automotive interest copy
```

Edit the data files to update content. Home copy is in `src/app/page.tsx`; palette, spacing, and breakpoints are in `src/app/editorial.css`. Desktop section spacing is 48px; mobile is 38px. Inter is used for headings, body copy, captions, numbering, and metadata with natural letter spacing. IBM Plex Mono is limited to schema identifiers and the toolkit code-like note. The styling uses semantic component classes with Tailwind's reset and theme setup; repeated content and interactions are reusable components.

Project records include category, summary, problem, approach, architecture, outcome, limitations, technologies, repository and optional demo links, status, featured flag, and an illustration identifier. `image` selects a conceptual illustration rather than an external image URL. The initial grid shows four selected projects; visitors can reveal all eight or filter by category. Featured projects are ordered first. Add a record to generate its route, count, and sitemap entry automatically.

## Assets, privacy, and provenance

- The user-supplied `Farhan.jpg` is featured in the hero using an optimized, metadata-stripped 1200px WebP at `public/images/farhan.webp`. Update `profile.portrait` to replace the image or its alt text. The original photograph is retained. No CV PDF is available; to add one, place it in `public/` and set `profile.cvUrl`, for example `/Farhan-Adiwidya-Pradana-CV.pdf`.
- The original CSS/SVG project illustrations are explicitly conceptual, not fabricated dashboard results. NexaHub's case study includes the screenshot URL documented in its README; if loading fails, an illustration and explanatory note replace it. For a self-contained deployment, download an authorized screenshot to `public/projects/` and change its `screenshot.url`.
- `src/data/contact.ts` is server-only. `showPhone` defaults to `false`, keeping the phone out of rendered content and browser bundles. Set it to `true` only when public display is intended. The number remains in source control unless you remove it from the source or use a server environment variable.
- Theme preference stays in browser local storage, with system preference as the initial default. No analytics or third-party tracking is installed. The screenshot is the only external image request. Inter is self-hosted; IBM Plex Mono loads through Google Fonts with `display=swap` and a system monospace fallback if unavailable. This font request requires no npm dependency or build-time network access.
- Professional history, education, community figures, and C++ are supplied by Farhan in the brief. No CV was available to independently corroborate those claims. Repository-backed tools and outcomes were reviewed on **15 November 2026**. No invented employment, certifications, skill percentages, testimonials, or GitHub statistics are displayed.
- The maternal-health implementation is correctly credited to **R**, as shown in its README. It is described as an educational decision-support prototype. Internship Intelligence retains its local, human-reviewed MVP scope. Travel data is labelled synthetic. Fiscal-transfer findings do not imply causation.
- Research is labelled a **research manuscript** with the supplied year and DOI, without claiming peer review, journal acceptance, or citation metrics. Direct DOI access could not be verified in this environment.
- Live dashboard URLs match the reviewed READMEs. Their current uptime and access permissions could not be independently verified; external access can change.

## Accessibility and interaction checks before launch

Navigation uses semantic landmarks, a skip link, visible focus styles, and a mobile disclosure with Escape-to-close and focus return. Filters are native buttons with pressed states and an announced result count. Theme storage tolerates unavailable local storage. Motion and CSS honor reduced-motion preference. The Let’s talk and Let’s get in touch CTAs open LinkedIn; the visible email address uses `mailto:`. There is no nonfunctional form.

Before publishing, check keyboard traversal, menu Escape behavior, filter results, theme persistence, case-study navigation, screenshot fallback, and mail links. Inspect 320px, 390px, 768px, 1024px, and 1440px widths in both themes. Confirm no horizontal overflow, text contrast, reduced-motion behavior, and production console errors. These browser checks remain unverified here; see [VALIDATION.md](VALIDATION.md).

## Latest editorial refinement

Section and project numbers now use natural sans-serif labels (`03. AI & Automation`); project status is understated metadata (`Local prototype`). Main copy, project facts, professional records, links, photo, filters, theme persistence, and hobbies remain. Illustrations are grayscale; the portrait and real repository screenshot retain their original colors.

Education uses compact horizontal rows with supplied local UGM and NTU logos, preserved colors, transparent containers, and responsive centering. The supplied `reference.jpeg` was visually inspected for the V4 refinement: stacked masthead typography, an offset introduction, monochrome surfaces, thin rules, and rectangular image framing. Source originals and the reference remain local; only deployment assets in `public/` are committed.

## First GitHub and Vercel publication

This is a Next.js application; deploy it to Vercel rather than Streamlit. Once the GitHub repository exists and GitHub CLI is signed in, run:

```powershell
gh auth login -h github.com
git add .
git commit -m "Publish Farhan portfolio"
git remote add origin https://github.com/Farscent/farhan-portfolio.git
git push -u origin main
```

Use your actual repository URL if it differs. Then open https://vercel.com/new, import that repository, choose Next.js, use root directory `./`, install command `npm ci`, build command `npm run build`, and leave Output Directory at its framework default. No API keys are required. Do not copy the localhost value from `.env.example` into production. Leave `NEXT_PUBLIC_SITE_URL` unset for the first Vercel deployment so the provided production hostname is used; set it to your final HTTPS custom domain and redeploy if you add one.

After import, pushes to the configured production branch deploy automatically. Review the homepage, LinkedIn buttons, email, both university logos, project routes, theme switching, `/sitemap.xml`, `/robots.txt`, and `/opengraph-image` on the deployed URL.
