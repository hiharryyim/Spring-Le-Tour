# Site Asset Context

## Grooming Van Image Set

Current generated assets used by the website:

| Usage | Path |
|-------|------|
| Homepage product card | `public/images/generated/grooming-van-elevated-layout.png` |
| Grooming detail hero | `public/images/generated/grooming-hero-showroom.png` |
| Power And Water Systems gallery item | `public/images/generated/grooming-systems-cutaway-showroom-v4-cabinet-refined.png` |
| Open Salon View gallery item | `public/images/generated/grooming-open-salon-closeup.png` |
| Full Vehicle View gallery item | `public/images/generated/grooming-full-vehicle-exterior.png` |

## Visual Rules

- Keep the homepage product card and detail gallery image frames visually aligned: outer card `rounded-2xl`, inner media frame `rounded-xl`, actual image clipped inside the media frame.
- For contained renders, use an inset image layer instead of padding directly on `next/image`, so the generated bitmap corners stay clipped consistently.
- For the Power And Water Systems render, keep the tub position from the approved v4 image: tub crosswise/perpendicular to the grooming table, compact engineering bay in the rear tailbox, refined cabinets inspired by the real grooming interior reference.
