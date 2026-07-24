# Memory

## Project
| Name | What |
|------|------|
| **Spring Le Tour Web** | Next.js site for Spring Le Tour camper and mobile grooming van builds. |

## Active Visual Context
| Area | Current Decision |
|------|------------------|
| Grooming homepage card | Use `/images/demo/grooming-demo-branded-front-card.webp` (landscape crop of the front 3/4 so the whole van shows, not a tight crop), badge “California Demo”, `object-[50%_50%]`. Full-frame source `grooming-demo-branded-front.webp` kept unused. |
| Grooming detail hero | Use `/images/demo/grooming-demo-branded-side-hero-v2.webp` (blur-fill composite: the whole van sized to ~73% width on a soft, darkened, blurred backdrop of itself, so the van has breathing room while the hero stays full-bleed; `object-cover object-[40%_50%] md:object-[50%_50%]`). Built from the 16_29_41 source with sharp (extract van tile → blurred bg → composite centered on a hero-aspect canvas). Full-frame source `grooming-demo-branded-side.webp` and old render `grooming-hero-showroom.png` kept unused. |
| Grooming gallery: Interior Workflow | Use `/images/generated/grooming-side-systems-diagram.png` (diagram style with labels, NOT a product render). |
| Grooming gallery: Top-Down Layout | Use `/images/grooming-topdown.png` (original factory diagram, Harry confirmed it stays as is). |
| Grooming systems gallery | Use `/images/generated/grooming-systems-cutaway-showroom-v4-cabinet-refined.png`. |
| Grooming gallery: Finished And Wrapped | First Build Preview item: `/images/demo/grooming-demo-branded-open.webp` (branded exterior wrap concept). Only one exterior kept in the gallery per Harry; the unbranded near-duplicate was removed. |
| Grooming demo gallery | Use three real interior crops under `/images/demo/`: workspace, controls, rear equipment bay. (Open-van crop `grooming-demo-van-open.webp` no longer referenced on the site.) |
| Social share (OG) images | `/images/og/og-home.jpg`, `/images/og/og-grooming.jpg`, `/images/og/og-camper.jpg` (1200x630). |

## Preferences
- Generated project assets should live under `public/images/generated/` before being referenced by the site.
- Card and gallery images should use a consistent rounded inner image frame with `overflow-hidden`; avoid putting square image padding directly on `next/image`.
- Grooming van renders should keep the pet tub perpendicular to the grooming table, with batteries, vacuum, water pump, tanks, and plumbing in the compact rear tailbox only.
- The real blue short-wheelbase vehicle must be described as the California demo used for workflow and equipment-packaging validation, not as the final 170-inch production configuration.
- The `/images/demo/grooming-demo-branded-*.webp` exteriors are ChatGPT-composited brand-wrap concepts on the California demo (body recolored to charcoal, example “Paws & Bubbles” brand, real interior). Frame them as the finished/branded look, not as unretouched real photos, and keep the “Real California Demo” badge only on genuine real crops.

## References
- Detailed asset notes: `memory/context/site-assets.md`
