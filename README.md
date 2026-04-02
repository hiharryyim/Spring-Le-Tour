# Spring Le Tour — Official Website

> **Mobilizing Your Vision. Empowering Your Business.**

Spring Le Tour is a **mobile solutions design & manufacturing firm** headquartered in California. While the flagship product line is premium campervans, the company's scope extends to mobile pet grooming vans, food carts, mobile retail, and clinical spaces — a comprehensive B2B mobile platform.

This repository contains the source code for [springletour.com](https://springletour.com), built with **Next.js**, **TypeScript**, and **Tailwind CSS**, deployed via **Vercel**.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Fonts | Playfair Display (headings) + Inter (body) |
| Hosting | Vercel |
| Domain | springletour.com (DNS via Aliyun) |

---

## Project Structure

```
├── public/
│   └── images/
│       ├── logo-circle.png        # Circular badge logo
│       ├── logo-horizontal.png    # Horizontal text logo
│       └── logo-vertical.png      # Vertical centered logo
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout (metadata, fonts, nav, footer)
│   │   ├── page.tsx               # Home page composing all sections
│   │   └── globals.css            # Tailwind + brand CSS variables
│   └── components/
│       ├── Navbar.tsx             # Sticky top navigation + mobile menu
│       ├── HeroSection.tsx        # Full-screen hero with CTA
│       ├── WhoWeAre.tsx           # Company introduction
│       ├── Products.tsx           # Foundation Package & Deluxe Build
│       ├── WhyChooseUs.tsx        # 5 value propositions
│       ├── ContactUs.tsx          # Contact form + company info
│       └── Footer.tsx             # Site footer
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## Design System

### Color Palette (extracted from logo)

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#A3A24A` | Olive green — buttons, accents, headings |
| Primary Light | `#C5C48A` | Lighter sage — hover states, highlights |
| Primary Dark | `#7D7C36` | Darker olive — active states |
| Accent | `#B08D3E` | Gold — feature category titles |
| Background | `#FAFAF7` | Warm off-white — page background |
| Dark | `#2C2C2C` | Near-black — body text |

### Typography
- **Headings**: Playfair Display (serif) — matches the elegant serif in the logo
- **Body**: Inter (sans-serif) — clean and modern

---

## Build Plan & Progress

### Phase 0: Environment Setup
- [x] Install Homebrew, Node.js, GitHub CLI
- [x] Authenticate GitHub CLI
- [x] Connect to `Spring-Le-Tour` repository

### Phase 1: Scaffold
- [x] Create Next.js project (App Router + TypeScript + Tailwind CSS)
- [x] Clean up default boilerplate

### Phase 2–4: Components
- [x] **Navbar** — Fixed top nav, smooth scroll links, mobile hamburger menu
- [x] **Hero Section** — Full-viewport, gradient background (replace with real photo later), CTA
- [x] **Who We Are** — Company intro, stats (Est. 2025, CA, B2B), image placeholder
- [x] **Products** — Two cards: Foundation Package (Base Build) & Deluxe Build (Turn-Key)
- [x] **Why Choose Us** — 5 value propositions in a responsive grid
- [x] **Contact Us** — Form (UI only) + email/location info
- [x] **Footer** — Logo, quick links, contact, copyright

### Phase 5: Responsive & Polish
- [x] Mobile-first responsive design via Tailwind breakpoints
- [x] Smooth scroll behavior
- [x] SEO meta tags (title, description, Open Graph)
- [ ] Scroll animations (subtle CSS-based)
- [ ] Add real hero/product photography

### Phase 6: Asset Integration
- [x] Logo files in `public/images/`
- [ ] Van/product photos (to be added)
- [ ] Favicon and social share image

### Phase 7: Deploy
- [x] Push to GitHub
- [ ] Connect Vercel to GitHub repo
- [ ] Add custom domain `springletour.com` in Vercel
- [ ] Update Aliyun DNS (CNAME → Vercel)

---

## Products

### "Avocado" Mercedes 144 High Roof Series

**The 144 Foundation Package** — *The Essential Kit*
- Structure & Surfaces: Marine-grade materials, durable flooring & ceiling panels, 4-season insulation
- Mounting System: Integrated L-Track system for cargo and modular furniture
- Rapid Build-Out: Pre-cut, pre-drilled components for streamlined assembly
- Customization: Custom colors, finishes, fabric & laminate options

**The 144 Deluxe Build** — *Turn-Key Ready*
- Off-Grid Power: 4 kWh battery, solar panels & inverter, 25-gallon fresh water (hot & cold)
- Kitchen: Refrigerator, microwave, kitchen sink with high-arc faucet
- Comfort & Climate: AC & heater, indoor bathroom with shower & toilet
- Living & Outdoor: Convertible seating/bed for two, manual awning

---

## Why Choose Spring Le Tour

1. **Industrial Design Excellence** — Engineered for spatial efficiency, durability, and ergonomic flow
2. **Disruptive Pricing** — Vertically integrated supply chain, direct-to-manufacturer model
3. **True Turn-Key Solutions** — Ready to deploy, no 6–12 month waitlists
4. **Versatility Across Industries** — Adaptable for campervans, pet grooming, food, retail, clinical
5. **California Assembly & Local Support** — Global manufacturing + local final assembly & QC

---

## Getting Started (Development)

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Contact

- **Email**: harry.yan@springletour.com
- **Location**: Chino, California
- **Website**: [springletour.com](https://springletour.com)

---

*© 2025 Spring Le Tour. All rights reserved.*
