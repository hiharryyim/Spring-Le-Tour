# Site Asset Context

## Grooming Van Image Set

Current generated assets used by the website:

| Usage | Path |
|-------|------|
| Homepage product card | `public/images/generated/grooming-van-elevated-layout.png` |
| Grooming detail hero | `public/images/generated/grooming-hero-showroom.png` |
| Interior Workflow gallery item | `public/images/generated/grooming-side-systems-diagram.png` |
| Top-Down Layout gallery item | `public/images/grooming-topdown.png` (original, kept per Harry) |
| Power And Water Systems gallery item | `public/images/generated/grooming-systems-cutaway-showroom-v4-cabinet-refined.png` |
| Open Salon View gallery item | `public/images/generated/grooming-open-salon-closeup.png` |
| Full Vehicle View gallery item | `public/images/generated/grooming-full-vehicle-exterior.png` |

Social share (Open Graph) images, 1200x630 JPEG, referenced from page metadata:

| Page | Path | Source crop |
|------|------|-------------|
| `/` | `public/images/og/og-home.jpg` | `grooming-full-vehicle-exterior.png` |
| `/grooming` | `public/images/og/og-grooming.jpg` | `grooming-open-salon-closeup.png` |
| `/camper` | `public/images/og/og-camper.jpg` | `hero-desert.jpg` |

`metadataBase` is set to `https://springletour.com` in `src/app/layout.tsx` so OG image URLs resolve absolute.

## History Notes

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
