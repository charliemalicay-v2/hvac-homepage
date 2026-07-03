# Desert Peak Heating & Cooling — Homepage

[![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-000000?logo=vercel)](https://hvac-homepage-sandy.vercel.app/)

**Live site:** [https://hvac-homepage-sandy.vercel.app/](https://hvac-homepage-sandy.vercel.app/)

A static marketing homepage for Desert Peak Heating & Cooling, a Henderson, NV HVAC contractor. Built as a single-page site with scroll-triggered animations, mobile-responsive layout, and NATE/contractor-branded content.

---

## Tech Stack & Packages

| Package | Version | Role | Why it was chosen |
|---|---|---|---|
| `next` | 16.2.10 | React framework (App Router) | Required by the project template. Next.js provides file-based routing, server components by default (no client JS for static markup), and built-in image/font optimizations that reduce CLS. The App Router (`app/` directory) allows layout nesting and streaming. |
| `react` / `react-dom` | 19.2.4 | UI library / renderer | Required peer of Next.js. React 19 adds server components (zero-JS sections rendered at build time) alongside client components where interactivity is needed (mobile nav, testimonial carousel, scroll animations). The site is fully statically rendered (`next build` produces flat HTML), so React runs only at build time for server components — no hydration cost for static markup. |
| `typescript` | 5.9.3 | Type checking | Catches type errors at build time (e.g., mismatched props, missing imports) that would otherwise surface as runtime bugs. `tsconfig.json` is configured with `strict: true` and `bundler` module resolution. |
| `tailwindcss` | ^4 (4.3.2) | Utility-first CSS framework | Version 4 moves configuration from `tailwind.config.js` into CSS via the `@theme` directive, which aligns with Next.js's CSS-only PostCSS pipeline. Utility classes keep the component files self-contained — no separate `.module.css` files needed for this project's scale. Tree-shaking via JIT means only used utilities appear in the production bundle. |
| `@tailwindcss/postcss` | ^4 | PostCSS plugin for Tailwind v4 | Required bridge between Tailwind v4's CSS-based engine and Next.js's PostCSS build step. Without this plugin, `@import "tailwindcss"` in `globals.css` would not resolve. |
| `eslint` | ^9 | Linter | ESLint 9 introduces the flat config format (`eslint.config.mjs`), which is the default for Next.js 16 projects. The `eslint-config-next` preset enforces React hooks rules, `next/image` usage, and `next/script` placement. |
| `eslint-config-next` | 16.2.10 | Next.js ESLint preset | Ships rules specific to Next.js patterns (e.g., no `<img>` without `next/image`, no `target="_blank"` without `rel="noreferrer"`). Version-pinned to match the Next.js instance. |
| `@types/node` / `@types/react` / `@types/react-dom` | ^20 / ^19 | TypeScript type definitions | Provide type hints for Node.js APIs and React types. Required when `strict: true` is on — without these, TypeScript would error on `URL`, `process`, and JSX types. |

### Fonts

Libre Franklin is loaded via `next/font/google` and self-hosted at build time. The browser makes zero requests to Google's servers — the font files are copied into `.next/static/` and served from the same origin as the page. This eliminates the render-blocking external font request and prevents layout shift (CLS = 0 for font swaps).

### Animations

Scroll-triggered entrance animations use a lightweight IntersectionObserver wrapper (`animate.tsx`) — no animation library is installed. Each section's visibility toggles CSS transition classes (`opacity`, `translate`, `transition-all duration-700`). This avoids the ~32 kB gzipped cost of Framer Motion while still achieving fade/slide effects at 60 fps via GPU-composited transforms.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page auto-updates on save (Fast Refresh via Turbopack).

### Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start development server with Turbopack hot module replacement |
| `npm run build` | Production build — outputs static HTML + CSS to `.next/` |
| `npm run start` | Start production server locally (run `build` first) |
| `npm run lint` | Run ESLint against `app/` and config files |

---

## Project Structure

```
app/
├── globals.css            # Tailwind v4 @theme (colors, fonts) + keyframes
├── layout.tsx             # Root layout: Libre Franklin, <html>/<body> shell
├── page.tsx               # Homepage — imports all section components
└── components/
    ├── header.tsx         # Sticky nav, mobile hamburger, phone CTA
    ├── hero.tsx           # Full-width headline + schedule/call buttons
    ├── services.tsx       # 5 service cards (AC, Installation, Heating, IAQ, Commercial)
    ├── why-choose-us.tsx  # 4 differentiators (Same-Day, Pricing, Licensed, Local)
    ├── service-area.tsx   # 3×3 grid of served cities
    ├── emergency.tsx      # Emergency repair banner
    ├── testimonials.tsx   # Auto-advancing carousel with dots/arrows
    ├── contact.tsx        # Contact details + form
    ├── footer.tsx         # License, contact info, copyright
    ├── animate.tsx        # IntersectionObserver scroll-triggered animation wrapper
    ├── icons.tsx          # 17 inline SVG icon components
    └── data.ts            # All content data (services, benefits, cities, testimonials)
```

---

## Deployment

Deployed to Vercel (free tier). Every push to `main` triggers an automatic rebuild:

1. Vercel clones the repo
2. Runs `next build` (produces fully static HTML)
3. Publishes to the Vercel Edge Network with global CDN caching

Custom domain and Vercel Analytics are available but not configured for this project.

---

## Development Log

1. **Scaffolded Next.js project with Desert Peak HVAC homepage** — built all 11 components, Tailwind v4 `@theme` (navy `#15293D`, brick red `#B91C1C`, white `#FFFFFF`), Libre Franklin font via `next/font/google`, IntersectionObserver scroll animations without external libraries. *Why:* Establish the full visual foundation and component hierarchy in one pass so every section (hero, services, testimonials, etc.) exists from the start — no piecemeal additions that risk layout inconsistency.
2. **Added auto-advancing testimonial carousel (6s interval) with navigation dots/arrows.** *Why:* Social proof is critical for a local service business; the carousel keeps testimonials visible without taking excess vertical space, and manual controls ensure mobile users can still navigate at their own pace.
3. **Created release branch `release-1.0.0`, staged everything, committed, pushed.** *Why:* Isolate the first release on a named branch so `main` stays clean and any hotfix branches can be created off `main` independently. Committing after verifying the build (`npm run build` passed) prevents broken commits.
4. **Created PR #1 (`release-1.0.0` → `main`).** *Why:* Formalize code review — even for a solo project, the PR serves as a documented snapshot of what changed and why, viewable later in the GitHub history.
5. **Reviewed PR against CCC STAMPS criteria, submitted as comment.** *Why:* Catch issues before merge: correctness, completeness, consistency, style, testability, accessibility, maintainability, performance, security. Ensured no regressions.
6. **Merged PR #1 via `gh pr merge 1 --merge --delete-branch=false`.** *Why:* `--merge` creates a merge commit (preserving the branch topology); `--delete-branch=false` keeps the remote branch intact for reference.
7. **Switched to `main`, deleted local `release-1.0.0`, pulled latest changes.** *Why:* Clean up the local environment — stale branches cause confusion during `git branch` listing and accidental pushes.
8. **Updated README with live link, tech stack table with concrete reasoning, full project structure, deployment workflow.** *Why:* A README is the first thing collaborators (or future self) see; documenting why each package was chosen prevents blind upgrades and makes dependency decisions auditable.
