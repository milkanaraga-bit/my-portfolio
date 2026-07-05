# Camille Naraga — Portfolio

A premium one-page portfolio built with Next.js 15 (App Router), TypeScript,
Tailwind CSS, Framer Motion, GSAP, and Lenis smooth scrolling.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you deploy — 4 quick edits

1. **Portrait** — replace `public/portrait.svg` with a real photo
   (e.g. `public/portrait.jpg`, ~640×800) and update the `src` in
   `components/sections/hero.tsx`.
2. **GitHub URL** — set your real GitHub profile in `lib/data.ts`
   (currently a placeholder).
3. **Domain** — update `metadataBase` in `app/layout.tsx` to your
   deployed URL for correct Open Graph tags.
4. **Testimonials** — swap the placeholder quotes in `lib/data.ts`
   for real ones when you have them.

Your resume PDF is already wired up at `public/resume.pdf`
(the "Download Resume" button in the Contact section).

## Where everything lives

- `lib/data.ts` — all site content in one place (skills, projects,
  process steps, testimonials, contact links). Edit copy here, not in
  components.
- `components/sections/*` — one file per page section.
- `components/ui/*` — reusable animation primitives:
  - `magnetic.tsx` — magnetic hover buttons
  - `tilt-card.tsx` — 3D tilt + cursor glow cards
  - `reveal.tsx` — masked line reveals and fade-up entrances
  - `cursor-glow.tsx` — mouse-follow gradient (desktop only)
  - `scroll-progress.tsx` — top progress bar
- `components/providers/smooth-scroll.tsx` — Lenis, synced with GSAP
  ScrollTrigger.

## Fonts

Space Grotesk and Inter load via `next/font` (self-hosted, zero layout
shift). General Sans loads from Fontshare's CDN in `app/layout.tsx` —
for maximum performance you can download it and self-host with
`next/font/local` instead.

## Performance & accessibility notes

- Heavy effects (cursor glow, smooth scroll, marquees, tilt) are
  disabled automatically for `prefers-reduced-motion` users, and
  cursor effects only run on fine-pointer (desktop) devices.
- Animations use transforms/opacity only — no layout-thrashing
  properties.
- `next/image` handles portrait optimization; add real project images
  with it too for automatic AVIF/WebP + lazy loading.
- Static page, server-rendered shell, client components only where
  interaction requires them.

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com) — zero
config needed.
