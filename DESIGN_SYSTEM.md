# Ilim Design System

## Palette

The current UI uses the Mediterranean-inspired palette defined in `tailwind.config.ts`.

```text
calcarioCream:   #F5F1E8
pedreiraPink:    #D4A394
solarTerracotta: #E8A55C
azulejoTaupe:    #B09A88
olivalVerde:     #9BA17F
cafeEscuro:      #4A3F35
darkText:        #4A3F35
```

Guidelines:
- Use `solarTerracotta` for primary actions.
- Use `calcarioCream` and white translucency for large surfaces.
- Use `cafeEscuro` and `darkText` for readable copy.
- Keep gradients soft and warm rather than high-contrast.

## Typography

- Primary font: `Nunito`
- Weights in use: `400`, `500`, `600`
- Favor generous line height and medium-weight headings

Reference sizes from the Tailwind config:

```text
title:    28px / 1.3 / 600
subtitle: 20px / 1.4 / 500
body:     16px / 1.6 / 400
caption:  14px / 1.5 / 400
```

## Surfaces

```text
rounded-card:   28px
rounded-button: 24px
rounded-input:  20px
shadow-soft:    0 4px 20px rgba(0, 0, 0, 0.08)
shadow-softer:  0 2px 12px rgba(0, 0, 0, 0.06)
```

Guidelines:
- Prefer `bg-white/70` or `bg-white/80` with blur for cards.
- Keep borders light with `border-white/50` or similar low-contrast tones.
- Avoid harsh shadows and sharp corners.

## Motion

The interaction style should stay gentle and low-pressure.

```text
fade-in:            300ms
slide-up:           350ms
slide-up-bounce:    400ms
breathing-pulse:    2s
gradient-shift:     15s
float-slow/slower:  25s-30s
```

Guidelines:
- Respect `prefers-reduced-motion`.
- Favor opacity and transform animations over layout changes.
- Keep hover scale subtle.

## Product Tone

- Warm, supportive, and calm
- No urgency-driven CTA language
- No gamified social framing
- Safety and privacy should feel foundational, not bolted on

## Implementation Notes

- Reusable utility classes live in `app/globals.css`.
- Theme tokens and animation definitions live in `tailwind.config.ts`.
- When using Tailwind classes in component data, keep them as explicit strings so production CSS generation can detect them.
