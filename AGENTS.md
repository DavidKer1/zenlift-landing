# Zenlift Landing Page — Agent Instructions

## Project

A **Next.js 15** landing page for **Zenlift**, a Flutter mobile workout tracking app. Markets to gym users. Deployed via Vercel.

- **Package manager**: pnpm
- **Node**: see `.nvmrc` or use latest LTS

## Commands

```bash
pnpm dev      # Start dev server (localhost:3000)
pnpm build    # Production build
pnpm start    # Serve production build
pnpm lint     # ESLint
```

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 (App Router, RSC) |
| Styling | Tailwind CSS v4 (CSS-first `@import "tailwindcss"`) |
| Components | shadcn/ui (New York style) |
| Animation | Framer Motion + Lenis smooth scroll |
| Fonts | Manrope (primary), Cal Sans (display), Instrument Sans (headings) |
| Colors | OKLch via CSS variables |
| Icons | Lucide React |
| Forms | React Hook Form + Zod (available, not heavily used yet) |
| Analytics | Vercel Analytics |
| Dev workflow | OpenSpec (spec-driven) |

## Key Conventions

### Path alias

`@/*` → project root (see `tsconfig.json`). Import shadcn components from `@/components/ui/*`.

### Client vs Server components

- **Default to Server Components.** Only add `"use client"` when you need interactivity (state, effects, event handlers, Framer Motion, Lenis).
- All section components (`components/sections/`) are currently `"use client"`.
- The root layout (`app/layout.tsx`) wraps children in client providers (Lenis, Theme).

### Styling

- **Tailwind v4 CSS-first config** — no `tailwind.config.ts`. CSS variables are defined in `app/globals.css` and mapped via `@theme inline`.
- Use `cn()` from `@/lib/utils` for merging classes.
- Dark mode is default (`<html class="dark">`). Toggle with `.dark` class.
- Custom font families: `font-sans` (Manrope), `font-display` (Cal Sans), `font-heading` (Instrument Sans).
- Brand accent color: `#cfbcff` (soft lavender) — use for highlights, gradients, glow effects.

### Component patterns

- **Sections** go in `components/sections/`, named `*-section.tsx`.
- **Custom UI** goes in `components/ui/` or `components/buttons/`.
- **Providers/wrappers** go in `components/providers/`.
- Keep sections self-contained: inline helper components for complex visuals (phone mockups, workout cards) rather than extracting to separate files unless reused.

### Data & copy

- **No fake testimonials, no invented user data.** The landing page describes real product features.
- Download CTAs point to `#` placeholder until the Play Store listing is live.
- Product details: see [`zenlift_product_blueprint.md`](./zenlift_product_blueprint.md) (Flutter app, not this repo).

## shadcn/ui

- Registry config: [`components.json`](./components.json)
- Style: New York, CSS variables, neutral base
- Add new components: `pnpm dlx shadcn@latest add <component>`

## OpenSpec

This project uses spec-driven development. Changes follow the OpenSpec workflow:

- **Specs**: `openspec/specs/` — canonical requirements
- **Changes**: `openspec/changes/` — active proposals; archive under `archive/` when done
- **Config**: `openspec/config.yaml`

Before making significant changes, check `openspec/specs/` for relevant requirements.

## Images & Assets

- App screenshots: `public/zenlift-app-home.png`
- Brand logo: `public/zenlift.png`
- Favicon set: `icon-light-32x32.png`, `icon-dark-32x32.png`, `icon.svg`, `apple-icon.png`
- Images are unoptimized (`next.config.mjs`: `images.unoptimized = true`).

## Available Skills

The project includes agent skills for common patterns:

- **Tailwind v4 + shadcn**: `tailwind-v4-shadcn`
- **React best practices**: `react-best-practices`
- **Composition patterns**: `composition-patterns`
- **React Hook Form**: `react-hook-form`
- **Zod validation**: `zod`
- **Copywriting**: `copywriting`
- **Accessibility**: `accessibility`
- **SEO**: `seo`
- **Next.js best practices**: `next-best-practices`

Reference these skills when relevant to the task.
