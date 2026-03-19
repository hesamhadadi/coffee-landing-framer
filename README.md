# OBSIDIAN — Where Coffee Becomes Art

A stunning luxury café landing page built with the **latest** Next.js 15, React 19, Tailwind CSS v4, and Framer Motion 12.

## ⚡ Tech Stack

| Tool | Version | Why |
|------|---------|-----|
| **Next.js** | 15.3 | App Router, Turbopack dev server, `next/font` |
| **React** | 19.1 | Latest stable, concurrent features |
| **Framer Motion** | 12.5 | `useScroll`, `useTransform`, `AnimatePresence` |
| **Tailwind CSS** | v4 | New `@theme` directive, no config file needed for design tokens |
| **TypeScript** | 5.7 | Full type safety |

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

Built with Turbopack — starts in ~300ms.

## ✨ Features

- **Custom magnetic cursor** with spring physics (Framer Motion)
- **Loading screen** with animated progress bar
- **Split-text hero** — each word reveals independently
- **Parallax hero** — scrolls away with `useScroll` + `useTransform`
- **28-particle system** floating upward through the hero
- **Pulsing orbital rings** around the SVG espresso cup
- **Animated SVG steam** on the hero cup
- **Scroll-triggered reveals** — up / left / right / scale / fade
- **Infinite ticker** marquee
- **Horizontal menu cards** — lift, glow, description reveal on hover
- **Ghost scrolling typography** — two rows, opposite directions
- **Infinite gallery strip**
- **Sticky experience layout** — left column sticks while right scrolls
- **Noise texture overlay** — subtle grain on the entire page
- **Spinning CTA rings**

## 📁 Project Structure

```
obsidian-v2/
├── app/
│   ├── page.tsx              ← Server Component entry
│   ├── layout.tsx            ← Fonts + metadata
│   ├── globals.css           ← Tailwind v4 + @theme tokens + keyframes
│   ├── lib/
│   │   └── data.ts           ← All menu / copy data
│   └── components/
│       ├── Cursor.tsx        ← Custom cursor (client)
│       ├── Reveal.tsx        ← IntersectionObserver wrapper (client)
│       ├── Nav.tsx           ← Sticky nav (client)
│       ├── LoadingScreen.tsx ← Intro screen (client)
│       ├── Hero.tsx          ← Hero + particles + cup (client)
│       ├── Ticker.tsx        ← Marquee (server)
│       ├── About.tsx         ← Story section (server)
│       ├── MenuSection.tsx   ← Menu cards (client)
│       └── Sections.tsx      ← Philosophy, Gallery, Process, Experience, CTA, Footer
├── package.json
├── next.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

## 🎨 Design System

- **Fonts:** Cormorant (display) + Syne (UI) + DM Sans (body) — via `next/font/google`
- **Colors:** All defined as `@theme` variables in `globals.css` (Tailwind v4)
- **Motion:** Framer Motion 12 — `useScroll`, `useTransform`, `useSpring`, `AnimatePresence`
- **Architecture:** Server Components by default, `"use client"` only where needed

