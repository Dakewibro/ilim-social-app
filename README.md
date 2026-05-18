# Ilim

A small Next.js landing page for Ilim, focused on mood-aware book discovery, gentle community features, and a calm visual style.

## Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Local Development

Requirements:
- Node.js 18+
- npm

Commands:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production commands:

```bash
npm run build
npm run start
```

## Project Structure

```text
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Notes

- There is currently no `public/` directory in this repo.
- The hero background uses `VantaBackground`, which loads runtime scripts from external CDNs.
- Design tokens and visual guidelines live in `DESIGN_SYSTEM.md`.
