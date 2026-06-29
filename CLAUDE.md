# Memory

## Project
| Name | What |
|------|------|
| **Spring Le Tour Web** | Next.js site for Spring Le Tour camper and mobile grooming van builds. |

## Active Visual Context
| Area | Current Decision |
|------|------------------|
| Grooming homepage card | Use `/images/generated/grooming-van-elevated-layout.png`. |
| Grooming detail hero | Use `/images/generated/grooming-hero-showroom.png`. |
| Grooming systems gallery | Use `/images/generated/grooming-systems-cutaway-showroom-v4-cabinet-refined.png`. |

## Preferences
- Generated project assets should live under `public/images/generated/` before being referenced by the site.
- Card and gallery images should use a consistent rounded inner image frame with `overflow-hidden`; avoid putting square image padding directly on `next/image`.
- Grooming van renders should keep the pet tub perpendicular to the grooming table, with batteries, vacuum, water pump, tanks, and plumbing in the compact rear tailbox only.

## References
- Detailed asset notes: `memory/context/site-assets.md`
