# Site Asset Context

## Grooming Van Image Set

Current generated and real assets used by the website:

| Usage | Path |
|-------|------|
| Homepage product card | `public/images/demo/grooming-demo-branded-front-card.webp` (landscape crop of front 3/4, whole van; badge “California Demo”, `object-[50%_50%]`) |
| Grooming detail hero | `public/images/demo/grooming-demo-branded-side-hero-v2.webp` (blur-fill: whole van sized down ~73% on a soft blurred backdrop; `object-cover object-[40%_50%] md:object-[50%_50%]`) |
| Finished And Wrapped gallery item (first) | `public/images/demo/grooming-demo-branded-open.webp` (branded exterior wrap concept; only exterior kept in gallery) |
| Real Grooming Workspace gallery item | `public/images/demo/grooming-demo-workspace.webp` |
| At-A-Glance Controls gallery item | `public/images/demo/grooming-demo-controls.webp` |
| Rear Equipment Bay gallery item | `public/images/demo/grooming-demo-service-bay.webp` |
| Interior Workflow gallery item | `public/images/generated/grooming-side-systems-diagram.png` |
| Top-Down Layout gallery item | `public/images/grooming-topdown.png` (original, kept per Harry) |
| Power And Water Systems gallery item | `public/images/generated/grooming-systems-cutaway-showroom-v4-cabinet-refined.png` |
| Unused (kept on disk) | `grooming-demo-branded-side.webp` and `grooming-demo-branded-front.webp` (full-frame branded sources, superseded by the `-hero`/`-card` crops), `grooming-demo-van-open.webp` (real open van, removed from gallery + homepage), `grooming-hero-showroom.png` (old hero render) |

Social share (Open Graph) images, 1200x630 JPEG, referenced from page metadata:

| Page | Path | Source crop |
|------|------|-------------|
| `/` | `public/images/og/og-home.jpg` | `grooming-full-vehicle-exterior.png` |
| `/grooming` | `public/images/og/og-grooming.jpg` | `grooming-open-salon-closeup.png` |
| `/camper` | `public/images/og/og-camper.jpg` | `hero-desert.jpg` |

`metadataBase` is set to `https://springletour.com` in `src/app/layout.tsx` so OG image URLs resolve absolute.

## History Notes

- 2026-07-23 (branded exterior, hero shrink): Harry still found the hero van a touch too big. Because the van fills the source width, `object-cover` cannot shrink it (cover always maps image width to container width). Solution: rebuilt the hero as a blur-fill composite `grooming-demo-branded-side-hero-v2.webp` (1300×828, hero aspect so cover keeps the side margins) with sharp: the 1086-wide van tile centered on a darkened, blurred backdrop of itself → van ~73% of width with soft blurred margins, still full-bleed so the headline gradient/mask keep working. New filename used to dodge the Next dev image cache; the intermediate `-hero.webp` (first, too-narrow margins) was deleted. Mobile is unaffected (cover crops the side margins, showing the sharp salon center). If Harry wants more/less shrink, change the canvas width in the sharp step (wider canvas = smaller van).

- 2026-07-23 (branded exterior, crop tuning): Harry found both branded shots too zoomed in the wide frames (the hero showed mostly the roof/AC, "can't see anything"). Root cause: the branded images are portrait 1086×1448 and object-cover in landscape frames over-zooms. Fix: made landscape crops focused on the whole van and pointed the slots at them. `grooming-demo-branded-side-hero.webp` = extract(0,440,1086,810) of the side shot → grooming hero (`object-[40%_50%] md:object-[50%_50%]`; mobile biased left to show brand + open door, desktop centered). `grooming-demo-branded-front-card.webp` = extract(0,500,1086,800) of the front 3/4 → homepage card (`object-[50%_50%]`), showing the whole van instead of a tight crop. The full-frame `grooming-demo-branded-side.webp` / `grooming-demo-branded-front.webp` are now unused (kept on disk). Verified: desktop hero shows whole van + open salon, mobile hero shows the salon slice, homepage card shows the whole van (screenshots via a hidden-pane workaround: removed the sections above Products and force-loaded the lazy card images).

- 2026-07-23 (branded exterior, Harry's rearrangement): After reviewing the first pass, Harry set the final placement of the three branded wrap images so none repeats: side-open (`grooming-demo-branded-side.webp`) → grooming detail hero (front 3/4 had sat behind the headline text); front 3/4 (`grooming-demo-branded-front.webp`) → homepage product card, which has no big text overlay; open/tighter side (`grooming-demo-branded-open.webp`) → the single "Finished And Wrapped" gallery item. The unbranded near-duplicate exterior ("California Demo Van", `grooming-demo-van-open.webp`) was removed from the gallery (Harry wanted only one exterior there), leaving the gallery at 7 items: 1 branded exterior + 3 real interiors + 3 renders. Homepage card badge changed from "Real California Demo" to "California Demo" because the branded image is a wrap concept, not an unretouched photo. Hero crop needed tuning: at object-position `48%` the charcoal van filled the frame with no sky and read as near-black under the dark gradient, so it was raised to `62% 30%` (with opacity `90/100`) to bring in blue sky and the bright open salon. `grooming-demo-van-open.webp` is now unused but kept on disk. Verified: hero renders correctly (desktop screenshot), gallery order correct via DOM, homepage card wiring correct via DOM (live screenshot of the card was blocked by a hidden preview pane, not a code issue).

- 2026-07-23 (earlier, branded exterior first pass): Harry uploaded a `外部拉花` (exterior wrap) set: three ChatGPT-composited images that take the real demo van, recolor the body to charcoal, and add an example “Paws & Bubbles PET Wash” brand wrap. The interior is the real demo; only the exterior color and branding are synthetic, so these are treated as finished/branded-look concepts, not unretouched real photos. Source: `洗狗车 /Demo照片集/精选-jpeg/外部拉花/`. Converted to WebP at native 1086×1448, q82, under `public/images/demo/`: `grooming-demo-branded-front.webp` (front 3/4 + flag), `grooming-demo-branded-side.webp` (side, door open), `grooming-demo-branded-open.webp` (closer side, unused alternate). Changes: grooming detail hero swapped from the `grooming-hero-showroom.png` render to `grooming-demo-branded-front.webp` (hero object-position `52% 42%`); Build Preview gallery reordered to lead with a new "Finished And Wrapped" item (`grooming-demo-branded-side.webp`), then the four real interior crops, then the three design renders (kept), so real photos and renders now coexist. Homepage product card left unchanged as the genuine real crop with its "Real California Demo" badge. Old hero render kept in place, unreferenced, as a fallback. Verified in dev: hero + gallery images load, gallery order correct (1 branded + 4 real + 3 renders), no console errors, hero checked at desktop and mobile.

- 2026-07-23: Added selected real photos from `洗狗车 /Demo照片集/精选/` to the homepage grooming card and grooming-page gallery. The live mix now keeps the two approved design diagrams and the production-intent systems render, then adds four real demo views. The blue short-wheelbase vehicle is explicitly labeled as the California demo used to validate workflow and equipment packaging; it is not presented as the final 170-inch production configuration. Source mapping: `IMG_4697` = open van, `IMG_4692` = workspace, `IMG_4685` = controls, `IMG_4704` = rear equipment bay. Public assets are 1600×1000 WebP crops with camera metadata removed by re-encoding.

- 2026-07-03 (final decision): Harry wants gallery slots 1 and 2 to stay DIAGRAM style (平面图 showing the design plan), not showroom product renders. A first attempt to replace them with showroom renders was rejected. The current images were rebuilt from the original design assets:
  - `grooming-side-systems-diagram.png` = the old `public/images/grooming-interior.png` van art kept as-is, all seven callout label boxes re-typeset in uniform Arial via PIL, typo fixed ("Lntegrated" → "Integrated 180 Gallon Stainless Steel Water Tank"). Rebuild script pattern: detect white label boxes, fill interior keeping the 2px border, redraw centered text.
  - Top-Down Layout: Harry decided the original `public/images/grooming-topdown.png` is fine as is (no typo there) and stays in the gallery. A cleanly re-typeset alternative was built and parked at `../_content_backup/Photo/洗狗车/生成渲染图归档/grooming-topdown-floorplan-未采用.png` (composed from the unlabeled factory base `../_content_backup/Photo/洗狗车/从上俯视图.jpg`); use it if a crisper version is ever wanted.
  - The old side diagram original (`grooming-interior.png`) stays in `public/images/` untouched; legacy components (`src/data/solutions.ts`, DemoShowcase, ConfigurableSolution) still reference it but no live page renders it.
- The factory top-down base confirms the tub sits crosswise (perpendicular to the grooming table), consistent with the approved v4 render layout. No layout contradiction.
- The "180 Gallon" water tank label was carried over from the original factory diagram; Harry has not re-confirmed the number.
- Unused render iterations (v1/v2/v3 originals, alternate showroom shots, 9 files) were archived out of the repo to `../_content_backup/Photo/洗狗车/生成渲染图归档/` on 2026-07-03.
- Build Preview gallery figures show a one-line detail under each caption (`detail` field in `buildPreviewImages`), written in groomer-friendly language, no engineering jargon.

## Visual Rules

- Keep the homepage product card and detail gallery image frames visually aligned: outer card `rounded-2xl`, inner media frame `rounded-xl`, actual image clipped inside the media frame.
- For contained renders, use an inset image layer instead of padding directly on `next/image`, so the generated bitmap corners stay clipped consistently.
- For the Power And Water Systems render, keep the tub position from the approved v4 image: tub crosswise/perpendicular to the grooming table, compact engineering bay in the rear tailbox, refined cabinets inspired by the real grooming interior reference.
