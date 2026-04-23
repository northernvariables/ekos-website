@AGENTS.md

# EKOS Research Associates — Website Rebuild

## Project
Rebuilding ekos.com for EKOS Research Associates Inc., a Canadian polling and public opinion research firm founded by Frank Graves in 1980.

## Tech Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS v4 (CSS-based config, @theme inline)
- Vercel deployment
- Lucide React for icons

## Design System
- **Primary:** Navy #1B2A4A
- **Accent:** Gold #D4A843
- **Background alt:** Light gray #F5F3F0
- **Text:** Near-black #1A1A1A
- **Fonts:** Source Serif 4 (headings), Inter (body)
- **Style:** "Authoritative Modern" — editorial authority (Angus Reid/Pew) + contemporary visual punch (Abacus Data)

## Architecture
- ekos.com — unified site (corporate + research/polling content from ekospolitics.com)
- probit.ekos.com — panel member login portal (subdomain, future phase)
- surveys.ekos.com — backend survey system (unchanged)

## Key Requirements
- Probit login link in header utility nav (invitation-only, no sign-up)
- Research hub with topic filtering and content type labels
- Polling tracker widgets with key metrics on homepage
- Contact form (currently missing from the site)
- Reports archive (100+ PDFs)
- Responsive/mobile-first design

## Conventions
- Server Components by default, "use client" only when interactivity needed
- Use next/link for internal navigation
- Import icons from lucide-react
- Tailwind custom colors via @theme inline in globals.css (e.g., bg-navy, text-gold)
