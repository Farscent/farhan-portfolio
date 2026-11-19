# Japanese editorial redesign

PRD.md governs the base redesign. The owner's subsequent instruction replaces repository imagery with conceptual project artwork; that instruction takes precedence for project visuals.

- Experience mode: the portrait and genuine project imagery lead exploration; work follows the introduction, then profile, chronology, education, toolkit, achievements, interests, and contact.
- Warm paper #F8F7F4, ink #171717, muted #666666, rules #DEDEDB, cobalt #2459A6, and selective vermilion #F26332. Dark mode retains independent accessible surface tokens.
- Existing locally hosted Inter Variable provides bold display lettering and understated supporting text. Body copy is generally 15–17px; metadata is generally 12–14px.
- A large photograph anchors the hero. Text remains on paper, separate from busy photography. Mobile presents name, portrait, introduction, and actions in reading order.
- Project compositions vary: a cobalt travel-route print; a marketing attention study beside a narrow narrative; a full-width postal collage for Internship Intelligence; transaction ribbons and a magnifying lens for AutoSIEM; protective nested forms, coffee and neighborhood connections, abstract archipelago ribbons, and a departing piece for the remaining studies. All eight are original responsive SVG compositions, not system outputs or measured results. No screenshot captions or repeated documentation previews appear in the gallery or case studies.
- Profile themes become horizontal editorial rows. Experience keeps the original chronology and roles. University marks retain original colors and proportions with transparent backgrounds and clear space.
- Hobby panels use original scalable editorial artwork: a moonlit shrine and torii layered against a modern Japanese skyline, and a silver open-wheel racer with exposed slick tires and restrained teal airflow details. The asymmetric desktop layout and all written content remain; mobile stacks the panels. No copyrighted characters or official motorsport branding are used.
- Responsive composition, visible focus, persistent themes, semantic links, gentle image hover zoom, and reduced-motion handling support browsing.

Implementation lives in src/app/magazine.css, layered after the existing stylesheet to preserve shared routes and interaction behavior.

## V7 editorial interaction refinement

The current owner brief preserves the illustration-led identity and authorizes typography
and motion enhancements throughout the existing sections. The six-project collection from
the curation update remains the public source of truth.

Inter remains the main face. Locally hosted IBM Plex Sans 400/500 supports captions,
navigation, metadata, and labels. Cobalt rules establish section rhythm; the research
feature uses a pale-blue print field, the existing original artwork, and a fine border.
The contact ending uses a circular directional symbol and a deliberately broken headline.

`src/app/editorial-motion.css` adds the refinement layer. `Reveal` provides visible-first,
one-time text and image entrances; `HeroIntro` sequences the existing hero content.
CSS scroll timelines progressively enhance selected artwork and decorative elements on
desktop. Core content never fades away on exit. A live media-query subscription cancels
active entrances when reduced motion is enabled. Existing server-rendered content,
portrait dimensions, university marks, project illustrations, and hobby artwork remain.

Reference observations and browser-access limitations are recorded in
`design-references/V7-DIRECTION.md`.

## V6 editorial graphics

About retains its prose and asymmetric rows, adding custom symbols for data flow, strategic decisions, and team coordination. Shared open geometry, two-unit strokes, cobalt, and vermilion live in `src/components/editorial-graphic.tsx`. The analytics award uses a cup with analytical bars; AutoSIEM recognition uses a shield and connected data paths. The research panel uses an original conceptual paper, learning network, and physics illustration with a layered publication treatment. These graphics do not portray research results or add credentials. SVGs are decorative, inherit theme tokens, and introduce no motion or dependencies. Project artwork and hobby illustrations remain unchanged; only existing project numbers are made visible.
