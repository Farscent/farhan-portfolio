# V7 editorial refinement

Experience mode. Preserve the existing Inter display lettering, portrait dimensions,
six curated projects, cobalt/vermilion artwork, cityscape, race car, and university marks.
The owner's new brief authorizes typography and motion refinement across sections.

## Reference observations and application

Reviewed on 2026-11-19, before implementation:

| Reference | Applicable principles | Applied here |
| --- | --- | --- |
| `japanese-editorial-board.png` | Large weight contrasts; fine print rules; offset images; small captions; geometric color fields; generous unprinted space. Static print offers composition, not timing guidance. | Keep large artwork and asymmetric spreads. Use quieter Plex captions, cobalt section rules, and a publication-style research panel. |
| `reference.png` | Strong type, off-center photograph, a clear horizontal rule, and a different mobile composition. | Preserve the separated hero portrait, strong name, and mobile stacking; animate the elements independently. |
| `kyoto-editorial.png` | Understated navigation, extensive white space, oversized plain type, and a small secondary media accent. | Keep navigation quiet and typography readable; give the contact section a single circular directional accent. |
| [JAGDA awards](https://www.jagda.or.jp/en/awards/category/) | Award taxonomy connects symbols, book design, posters, and digital media. The text index loaded; the browser capture remained blank, so specific visual or motion observations are unavailable. | Use the existing original symbol family across profile and achievements; rely on the supplied board for visual composition. |
| [Tokyo TDC 2026](https://tokyotypedirectorsclub.org/en/award/?y=2026) | Spacious ruled rows, small prize labels, larger names, distant aligned thumbnails, and a restrained paper palette. | Clear role/organization hierarchy, refined achievement type, single-draw timeline rules. No unobserved animation behavior is attributed to the reference. |
| [MUUUUU](https://muuuuu.org/en/) | Indexed curation explicitly groups contrasting type sizes, geometric motifs, refined typography, accent colors, split screens, and subtle animation. Live browser navigation timed out. | Preserve alternating project proportions; use selective, short image and text entrances. Live timing and exact compositions were not verified. |
| [Japan Web Design](https://japanwebdesign.com/) | Large featured image, compact navigation, contrasting headline sizes, deliberate overlap and restrained categorical controls. Its dark illustrated opening is a different visual identity. | Keep imagery dominant and filters simple; confine overlap to the contact symbol and existing research artwork. Preserve this portfolio's warm paper palette. |
| [Subframe examples](https://www.subframe.com/tips/japanese-website-design-examples) | Article discusses typography/image hierarchy and varied composition. Only the browser shell rendered in the capture, so visual observations are limited. | Treat as supplementary context, with local references and TDC carrying the visual decisions. |

## Type and motion

- Inter remains the primary display and body face. Self-hosted IBM Plex Sans, Latin
  400/500 only, gives supporting labels a consistent secondary voice. No Japanese
  font is shipped because the content has no Japanese-language text. The remote
  unused Plex Mono CSS request is removed; code keeps its local monospace fallback.
- Important content is visible in server HTML and normal CSS. Intersection-triggered
  Web Animations provide one-time 480ms text entrances (12–20px) and 620ms image
  masks. A brief five-step hero sequence uses existing semantic content.
- Motion for React, already installed, handles viewport observation and 350ms filter
  transitions. No new animation dependency or continuous React scroll state.
- Progressive CSS scroll timelines control a thin reading-progress rule, very small
  travel-art scale changes, research-print drift, and the decorative contact symbol.
  These effects remain static in unsupported browsers and on smaller viewports.
- Reduced motion cancels active reveal animations and disables image depth, hover
  transforms, line draws, hero sequencing, smooth scrolling, and progress animation.

Implementation references: [Motion scroll animations](https://motion.dev/docs/react-scroll-animations),
[MDN scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations),
and the installed Next.js 16.4.6 Image documentation. Existing preload, intrinsic
portrait dimensions, responsive image sizes, and server-rendered section content remain.

## Validation

- TypeScript and ESLint completed with exit code 0; the production build generated
  the home page and all six project detail pages successfully.
- Chrome layout checks at 375, 768, 1440, and 1920px: no horizontal overflow across
  all main sections; hero name and portrait remain separated. Desktop and mobile
  captures were visually inspected, including research, contact, profile, and hobbies.
- All four filters retain their 6/2/1/3 counts. Normal scroll entrances run, and
  changing to reduced motion cancels active entrances. Reduced-motion loading,
  Escape focus return, active-section navigation, and mobile theme switching pass.
- With JavaScript disabled, the six-project gallery and essential headings remain
  visible. No JavaScript errors occurred in the final browser interaction check.
- Installed axe-core audit, WCAG 2 A/AA and 2.1 AA rules: zero reported violations
  in light desktop (1440px) and dark mobile (375px). This automated audit supplements
  the keyboard and visual checks; no Lighthouse performance score was measured.
- Screenshots and repeatable browser-check scripts are in the ignored
  `output/playwright/` directory (`v7-*`, `verify-v7.js`, `finish-v7.js`, `audit-v7.js`).
