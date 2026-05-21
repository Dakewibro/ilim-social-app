# Ilim

An emotion-first landing page for an AI-powered book discovery concept.

This project presents Ilim as a calm, trust-building reading experience where users can discover books through mood, voice, and community rather than through a typical high-pressure social feed. The repository contains the front-end landing page only. It does not include a production recommendation engine, backend services, authentication, or real community infrastructure.

## Product Framing

Ilim is positioned as a reading product for people who want:

- book discovery that feels personal rather than algorithmically opaque
- emotional resonance instead of generic genre filtering
- safe community features without social pressure
- privacy, care, and wellbeing as core product values

The landing page is designed to communicate those ideas quickly and visually, especially for first-time visitors, early stakeholders, and potential institutional partners.

## Design Problems This Landing Page Solves

### 1. Make an AI book product feel warm, not intimidating

The interface avoids a cold or overly technical tone. Instead, it uses soft typography, warm Mediterranean colors, blurred surfaces, and gentle motion to make the product feel approachable and emotionally literate.

### 2. Build trust for a wellbeing-oriented concept

The content repeatedly emphasizes:

- privacy-first interaction
- safe moderation
- emotional support
- thoughtful AI guidance
- community without addictive mechanics

That is a product choice as much as a design choice. The page is meant to make users feel supported before asking them to engage.

## Experience Highlights

- Interactive mood wheel for expressing emotional state
- Animated hero with voice-inspired CTA and ambient background motion
- Product storytelling centered on trust, clarity, and emotional wellbeing
- Community and safety sections designed to reduce user anxiety
- Partnership messaging for Hong Kong-based institutions
- Recognition section highlighting hackathon and innovation awards

## Visual System

The design language is documented further in [DESIGN_SYSTEM.md](/Users/Deaptheror/Desktop/ilim-social-app-main/DESIGN_SYSTEM.md), but the main principles are:

- calm, rounded, human-centered UI
- low-pressure interaction patterns
- soft translucency and warm gradients
- medium-weight typography for readability
- motion that supports atmosphere rather than spectacle

The current palette is defined in `tailwind.config.ts` and is built around:

- `calcarioCream`
- `pedreiraPink`
- `solarTerracotta`
- `azulejoTaupe`
- `olivalVerde`
- `cafeEscuro`

## Technical Implementation

This is a Next.js App Router project built with:

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

The codebase is intentionally simple and component-driven. The landing page is assembled from section components in `components/`, while `app/page.tsx` composes the full narrative flow from top to bottom.

Notable implementation details:

- custom animation and design tokens live in `tailwind.config.ts`
- shared visual utility classes live in `app/globals.css`
- the hero background uses `VantaBackground`, which loads runtime scripts from external CDNs
- there is currently no `public/` directory in this repository

## What This Repo Includes

- a front-end landing page
- responsive layout and styling
- interaction demos such as the mood wheel and animated hero CTA
- product messaging for users and institutional partners

## What This Repo Does Not Include

- backend APIs
- real AI recommendation logic
- persistence or analytics infrastructure
- user accounts or authentication
- production-ready book/community data models

## Run Locally

Requirements:

- Node.js 18+
- npm

Install and start the development server:

```bash
npm install
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Awards.tsx
│   ├── BookCircles.tsx
│   ├── CTA.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── MoodWheel.tsx
│   ├── MoodWheelSection.tsx
│   ├── Navbar.tsx
│   ├── Partnerships.tsx
│   ├── Safety.tsx
│   └── VantaBackground.tsx
├── DESIGN_SYSTEM.md
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Why This Project Matters

This landing page is less about marketing a generic app and more about testing whether interface design can make a sensitive product concept feel trustworthy. It treats design as a product tool: clarifying the idea, shaping perception, reducing friction, and creating emotional confidence in the experience before the full product exists.
