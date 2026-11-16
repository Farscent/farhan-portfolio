# Latest update: conceptual project showcase

16 November 2026. The owner's subsequent instruction supersedes PRD requirements to display authentic project screenshots. The base design, content, links, and behavior remain.

- Replaced screenshot previews and old miniature technical illustrations with eight original geometric SVG print compositions in `src/components/project-visual.tsx`.
- Subject mapping: travel routes and booking records; converging marketing channels; internship correspondence and review; fraud investigation among transactions; protective maternal-care forms; coffee, study, and neighborhood connections; regional resource connections across an abstract archipelago; employee departure from a group.
- Each image has a descriptive accessible name identifying it as conceptual, never a dashboard, actual output, geographic reference, or experimental result. No fabricated metrics or chart axes appear.
- Removed repository-image captions, "Open interactive report," the duplicate screenshot figure, and repetitive approach excerpts in gallery cards. Full factual project narratives and technologies remain available in their case studies. Technical architecture remains as a readable ordered text list rather than a diagram.
- Original project data, titles, technologies, GitHub links, and live destinations remain unchanged. Original downloaded screenshots remain on disk but are no longer displayed.
- Changed only the requested hero sentence: "Computer Science student at Universitas Gadjah Mada, exploring data, artificial intelligence, and the intersection of technology and business." The university remains bold; hero styling and layout are unchanged in this update.
- Lint and TypeScript pass. Production build passes with all eight static case studies.
- Production Chrome checks at 375px, 768px, and 1440px: eight conceptual images, no gallery screenshots, no horizontal overflow, exact hero wording, and Farhan's period on the same line. All category filters and all eight case-study routes pass; each case study contains one conceptual image and no screenshot or removed caption. No runtime errors recorded.
- Screenshots: `output/playwright/concept-gallery-375.png`, `concept-gallery-768.png`, `concept-gallery-1440.png`, and `concept-case-mobile.png`. Vector artwork was visually reviewed at desktop and mobile sizes.

The original redesign record below is historical. Its screenshot and unavailable-project-image notes describe the earlier brief, not the current conceptual-artwork implementation.

---

# PRD redesign implementation and validation

16 November 2026. PRD.md remains the implementation specification.

## Discovery and priorities

Inspected the existing Next.js 16.4.6 / React 19 / TypeScript application, Tailwind 4 imports, locally hosted Inter, Motion, shared components, all data modules, eight case-study routes, and existing navigation/theme/filter behavior. Read the installed Next.js image and server/client component guides before edits. Preserved the managed AGENTS.md block.

Visually inspected image.png, image-1.png, reference.jpeg, the existing portrait, and downloaded project images. image.png is the Pantechnicon editorial reference; image-1.png is a colorful Harajuku magazine spread. Its actual content differs from the PRD's description of a Kyoto collage. No separate monochrome Kyoto/botanical collage file was available. The Dribbble search URL is not a fixed reference image and was not used as a pixel comparison target.

The main implementation gaps were a roughly 310px portrait, repeated two-column project compositions, 10–13px supporting text, conceptual project illustrations in place of authentic visuals, and repeated section numbering and card-like profile themes. P0 priority was the photographic opening and varied gallery, followed by P1 profile/chronology/education/interests and P2 restrained motion.

## Requirements delivered

| Requirement | Implementation and acceptance evidence |
| --- | --- |
| FR-01 / P0 hero | Large borderless portrait, bold Farhan lettering, asymmetric desktop spread, mobile reading order, compact professional introduction, existing work/contact/social links. Portrait renders about 734px wide at 1440px, versus the previous 310px maximum. |
| FR-02 / P0 gallery | NexaHub uses a large authentic dashboard beside narrative; Internship Intelligence uses a full-width genuine workflow and a second calendar image; AutoSIEM uses original course presentation imagery. Warehouse uses a distinct typographic cover. Remaining four projects form a compact gallery. All category filters, selected/all toggle, repositories, demos, and eight case studies preserved. |
| FR-03 / P1 about | Preserved introduction and all three professional themes. Large personal statement, compact paragraphs, and editorial theme rows replace icon cards. Verified mobile placement after correcting an inherited grid rule. |
| FR-04 / P1 experience | All roles, dates, achievements, previous roles, descriptions, and highlights retained. Larger organization/role names and quiet dates keep the chronology readable. |
| FR-05 / P1 education | Both supplied marks load at all three tested widths. Original colors and proportions retained with transparent backgrounds and clear space. Academic facts, periods, 3.73/4.00 CGPA, and 4.79/5.00 grade preserved. |
| FR-06 / P1 interests | Existing original anime/story panels and automotive drawing enlarged in two offset compositions. Existing hobby descriptions retained. No favorite series/brands or third-party artwork invented. |
| FR-07 / P2 motion | Gentle image zoom, existing anchor/link transitions, visible focus, and reduced-motion handling. Removed default hidden reveal states so content is visible immediately. |
| Design foundation | PRD warm paper, ink, gray, cobalt, and selective vermilion palette; preserved dark mode; locally hosted display/body font; generally 15–17px body and 12–14px metadata; different compositions across major sections. |

## Verification completed

- ESLint: zero errors and zero warnings. Generated browser artifacts are excluded from source linting.
- TypeScript: `tsc --noEmit` passes.
- Production: `next build` passes, generating 15 outputs including eight case studies. The npm wrapper exited silently in this execution environment; equivalent installed Node entry points were used for lint, TypeScript, and build.
- Factual preservation: compared all eight data modules with HEAD. Profile, experience, education, skills, achievements, interests, and contact are unchanged. Projects are unchanged after excluding screenshot metadata; all factual descriptions and external destinations remain intact.
- Production browser: Chrome via Playwright at 375, 768, and 1440px. Homepage document width equals viewport width at each size. Expanded eight-project gallery also has no measured horizontal overflow.
- Every homepage image, including both logos and all four project images, loaded after scrolling. All local fragment destinations exist. All eight project routes return HTTP 200; Internship Intelligence additionally reviewed at mobile width.
- Every category filter exercised with expected counts; keyboard Enter changes filtering; four/eight project expand/collapse exercised.
- Mobile menu opens, closes on Escape, restores button focus, and closes/navigates on Work selection. Theme toggle persists after reload. Reduced-motion preference exercised. No browser runtime errors recorded.
- Visually reviewed desktop, tablet, mobile, dark-mode hero, project spreads, mobile case study, and both education entries. Screenshot review led to fixes for hero copy alignment, mobile theme-row placement, and stale navigation highlighting at the hero.
- `git diff --check` passes. No deployment or publication performed.

## Screenshots

Generated local artifacts, intentionally ignored by Git:

- output/playwright/final-1440.png
- output/playwright/final-768.png
- output/playwright/final-375.png
- output/playwright/final-dark-desktop.png
- output/playwright/education-1440.png
- output/playwright/education-375.png
- output/playwright/case-study-mobile.png

The native browser connector was unavailable; Playwright provided actual production-browser screenshots and interaction checks instead.

## Remaining gaps and unavailable assets

- No authentic Travel Booking screenshot was found in its repository tree or README. Its working demo link remains available; the gallery uses typography rather than an invented dashboard. The two-authentic-image-led-project acceptance criterion is met by NexaHub and Internship Intelligence.
- No personal automotive photograph, licensed anime artwork, or separate Kyoto collage matching the written description was supplied. Existing original hobby drawings remain in use. No placeholder stock imagery was introduced.
- Remaining nonfeatured projects have no supplied authentic screenshot assets and use typographic covers; existing conceptual illustrations on their detailed pages remain explicitly illustrative.
- Lighthouse performance/accessibility scores were not measured. The PRD's 90+ targets are unverified; browser checks do not establish a WCAG audit or a performance score.
- External GitHub, LinkedIn, DOI, and live-demo destinations are preserved, but third-party availability was not exhaustively revalidated. Local routes and anchor destinations were checked.
- No CV PDF is configured; the existing optional CV behavior is preserved.

Project image source URLs and provenance are recorded in public/images/projects/README.md. PRODUCT.md and DESIGN.md are supplementary tooling records; PRD.md takes precedence.
