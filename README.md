# Moving World Agency

A modern, professional, and creative brand agency landing page built with Next.js (App Router), Turbopack, and Tailwind CSS.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server (Turbopack enabled):

```bash
npm run dev
```

3. Open http://localhost:3000 in your browser.

## Design System

- Primary: Deep blue `#1A237E`
- Highlight: Vibrant orange `#FF6F00`
- Accent: Warm gold `#F9A825`
- Body text: Charcoal gray `#212121`
- Backgrounds: Soft gray `#F5F5F5` and white

Typography pairs a serif heading (Playfair Display) with a sans-serif body (Inter) via `next/font` and Tailwind utilities.

## Structure

- `app/layout.js` – Global styles, fonts, metadata
- `app/page.js` – Landing page composition
- `components/` – UI sections and shared elements
- `tailwind.config.js` – Theme tokens and colors
- `app/globals.css` – Tailwind layers and utilities

## Deployment

- Build: `npm run build`
- Start: `npm start`

