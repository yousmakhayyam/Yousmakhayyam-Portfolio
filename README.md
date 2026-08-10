# Yousma Khayyam — Portfolio

A single-page, animation-rich portfolio built with React, Tailwind CSS, and Framer Motion.

## Before you deploy

1. **Add your resume**: put your resume PDF at `public/resume.pdf`
2. **Add your photo**: put your photo at `public/profile-photo.jpg`
3. **Add project screenshots**: replace the "Screenshot coming soon" placeholders in `src/components/Projects.jsx` with real `<img>` tags once you have images (put images in `public/` and reference as `/your-image.png`)

## Run locally

```
npm install
npm run dev
```

## Deploy to Vercel

**Option A — GitHub (recommended)**
1. Create a new repo on GitHub, e.g. `portfolio`
2. In this folder run:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/yousmakhayyam/portfolio.git
   git push -u origin main
   ```
3. Go to vercel.com → New Project → Import your GitHub repo → Deploy (Vercel auto-detects Vite, no config needed)

**Option B — Vercel CLI (no GitHub needed)**
```
npm install -g vercel
vercel
```
Follow the prompts — it deploys directly from this folder.

## What's included

- Hero with animated typewriter subtitle, glowing photo frame, particle background
- About with animated stat counters
- Experience timeline
- Categorized Tech Stack section
- Full projects grid with 3D tilt-on-hover cards
- Contact section with social links + form
- Floating theme customizer (Lavender / Ocean / Sunset / Mint / Custom presets + light/dark mode) — colors update live across the whole site
- Bracket-style section headers (`< About Me >`) with scroll-in animation
- Respects `prefers-reduced-motion`
