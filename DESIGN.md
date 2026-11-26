# Japanese editorial redesign

## V15 NTU reference refinement

The new `design-references/ntu/the-hive_ntu-singapore.png` supersedes the older NTU photograph for composition. The NTU SVG centers a tall sandstone cylinder with a glazed crown, six finely ribbed teaching-room volumes, curved floor undersides, recessed ground-floor glazing and supports, and shorter overlapping towers. Narrow circulation shafts replace the earlier broad dark core. A layered rain tree frames and partially overlaps the right side; a soft blue print sky and warmer facade distinguish the architectural planes. The exterior 3:2 frame and all Education styles, facts, university assets, links, and interaction behavior remain unchanged. The UGM source is unchanged, verified by hash.

## V14 illustrated Education

NTU refinement: The Hive now uses bulbous pod profiles, denser curved facade ribs, recessed floor joints, directional stone shading, darker receding towers, and a wider charcoal pleated core. Continuous terrace planters, trailing foliage, and rooftop trees integrate nature with the structure. A pale diagonal architectural field, restrained framing, and a small cobalt wayfinding board give the composition its own editorial character. UGM artwork, section geometry, logos, text, and interactions remain unchanged.

Education is a two-column architectural spread with a 32px desktop offset and a single-column mobile layout. Original server-rendered SVG components in `src/components/university-illustrations.tsx` interpret the inspected owner photographs at `design-references/ugm/rectorate.png` and `design-references/ntu/The_Hive,_NTU_(I).jpg`: Balairung's cream colonnade, arcade, tiled roof, and flag; The Hive's ribbed rounded pods, pleated dark core, and planted terraces. These are editorial studies, not surveyed architectural drawings.

Scoped styles live in `src/components/education.module.css`. The artwork has a reserved 3:2 frame, muted architectural colors, fine linework, and restrained print texture. Existing visible-first reveals stagger images and academic text; hover adds a 1.012 artwork scale and minimal foliage movement. Reduced motion removes spatial effects. Official logo assets, safe official-site links, focus, and 1.06 logo hover scale remain. All existing academic copy is preserved; previously removed grades and credit totals remain absent. No other section is redesigned.

## V13 living editorial enhancement

The public collection now contains twelve projects, preserving the existing ten in order and appending numerical image restoration and Apache Airflow ETL. Both use original conceptual vector prints in the existing paper/cobalt/vermilion palette. Repository-verified descriptions distinguish learning demonstrations from production systems.

The project grid retains its six-card preview and primary filters. A complementary four-project horizontal artwork rail uses native scrolling and CSS snap, with keyboard and arrow-button controls. The separate three-frame Airflow storytelling feature was removed at the owner's request. Existing Motion entrances stay visible-first. Native CSS timelines add restrained portrait and hobby parallax without new dependencies or global scrolling changes.

The toolkit uses four categories in a two-column editorial index (one column on mobile), with previous collaboration skills retained below. Existing university assets link to official sites with visible focus and a gentle 1.06 hover scale. Earlier design notes below describe the site's evolution; the current user brief and this V13 note govern project counts and these interactions.

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
