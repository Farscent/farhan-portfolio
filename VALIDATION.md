# Current publication readiness

Lint, TypeScript, and the Next.js production build passed after the supplied university logos, transparent logo alignment, and LinkedIn CTAs were integrated. The earlier missing-reference and missing-logo notes below describe a previous revision: reference.jpeg has since been inspected and the supplied logos are installed. Browser viewport verification remains incomplete.

GitHub publication was attempted to Farscent/farhan-portfolio, but the connector returned HTTP 403 (Resource not accessible by integration). Direct Git HTTPS access is blocked by the local network sandbox; local Git index/config writes are also restricted. No files have been pushed and no Vercel deployment has occurred.

---

﻿# Validation record

Date: 15 November 2026. Revision: secondary typography and monochrome editorial refinement.

## Checks

- ESLint and full TypeScript validation pass.
- Next.js 16.4.6 production build passes, generating 15 static outputs including eight project detail pages.
- Production HTTP checks return 200 for the homepage, all eight projects, sitemap, robots, icon, Open Graph image, and optimized portrait. An unknown project returns 404.
- Production HTML checks confirm all professional sections, both hobbies, the personal introduction, contact email, full education dates, both grades, and 88 credits. The private phone number is absent.
- SHA-256 checks confirm projects, experience, skills, and achievements data files are unchanged. Education retains its academic facts; dates are expanded and asset paths/alt text are added. Interest descriptions are unchanged; their small category labels use sentence case.
- Source review confirms project filters, expand/collapse, links, mobile menu, Escape handling, theme persistence, reduced-motion handling, and image fallback remain.
- Computed token contrast ratios: light body 16.23:1, muted 5.29:1, caption 4.85:1; dark body 16.35:1, muted 7.45:1, caption 6.23:1; primary button 5.17:1. These checks cover the listed text/background token pairs, not every rendered pixel or illustration.

## Components and styling changed

- `ui.tsx`: sans-serif section labels and editorial period numbering.
- `page.tsx`: sentence-case hero/section/experience/research/contact metadata; natural hero descriptor and About me link; Education extracted into a reusable server component. Main prose remains intact.
- `projects.tsx`: natural category numbering, sentence-case project counts/status/approach; Local prototype replaces Local MVP in card metadata. Project facts, filters, ordering, links, and selected/all behavior remain.
- `education.tsx` and `education.ts`: compact logo/academic/date rows, responsive stacking, accessible image text, optional local SVG/PNG detection, safe text fallback, full month names. No fabricated official marks.
- `beyond-code.tsx` and `interests.ts`: natural labels and illustration captions; manga panels, car sketch, and hobby prose preserved.
- `projects/[slug]/page.tsx`: readable case-study labels with period numbering; narrative and source facts preserved.
- `editorial.css`: metadata uses Inter instead of universal monospace; natural tracking, 11–12px minimum metadata, monochrome decorative details, thinner project framing, tighter heading gaps, 56px desktop section spacing, 22px gutters, 18px experience rows. Mobile sections retain 42px spacing and 16px gutters.
- `project-visual.tsx` and `project-illustrations.css`: sentence-case diagram captions and grayscale abstract artwork. Actual screenshot/portrait colors are untouched. Monospace is reserved for schema names and a code-like toolkit note.

## Incomplete verification and assets

The referenced inspiration image was not attached in the available session and was not found in the workspace. The written brief guided this refinement.

Official institutional logo sources were inspected, but HTTPS downloads from the local executor failed because network access is restricted. **Neither university logo has been installed.** Education currently displays plain UGM/NTU text initials. No missing image requests are emitted. The component automatically uses local SVG/PNG files when supplied and the page is restarted/rebuilt. See `public/images/universities/README.md` for verified sources, filenames, and branding notes. Logo image loading and visual inspection cannot be marked passed without the actual assets.

The connected browser host is unavailable, and Playwright CLI is not installed/cached (`npx --offline @playwright/cli --help` returns ENOTCACHED). Desktop/mobile rendered screenshots, overflow measurements, keyboard interaction, and theme/filter/menu behavior were not exercised in a browser. Responsive source review and HTTP checks do not replace browser QA. Before publishing, inspect 320, 390, 768, 1024, and 1440px widths in both themes and test the existing interactions.

No deployment was performed. Set the final `NEXT_PUBLIC_SITE_URL` before publishing. No CV PDF was available; the supplied portrait remains in use. All original repository scope limitations, synthetic-data disclosure, human-review requirements, and noncausal analysis wording remain.
