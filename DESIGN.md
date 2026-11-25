---
name: PesaZine Editorial
colors:
  surface: '#fcf9f6'
  surface-dim: '#dcd9d7'
  surface-bright: '#fcf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f1'
  surface-container: '#f0edeb'
  surface-container-high: '#ebe8e5'
  surface-container-highest: '#e5e2e0'
  on-surface: '#1c1c1a'
  on-surface-variant: '#3d4a3f'
  inverse-surface: '#31302f'
  inverse-on-surface: '#f3f0ee'
  outline: '#6d7b6e'
  outline-variant: '#bccabc'
  surface-tint: '#006d38'
  primary: '#006d38'
  on-primary: '#ffffff'
  primary-container: '#00a859'
  on-primary-container: '#003317'
  inverse-primary: '#59df89'
  secondary: '#a23f0f'
  on-secondary: '#ffffff'
  secondary-container: '#fe8450'
  on-secondary-container: '#6c2400'
  tertiary: '#7c5800'
  on-tertiary: '#ffffff'
  tertiary-container: '#bd890c'
  on-tertiary-container: '#3b2800'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#77fca3'
  primary-fixed-dim: '#59df89'
  on-primary-fixed: '#00210d'
  on-primary-fixed-variant: '#005228'
  secondary-fixed: '#ffdbce'
  secondary-fixed-dim: '#ffb598'
  on-secondary-fixed: '#370e00'
  on-secondary-fixed-variant: '#7f2b00'
  tertiary-fixed: '#ffdea7'
  tertiary-fixed-dim: '#f8bd45'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5e4200'
  background: '#fcf9f6'
  on-background: '#1c1c1a'
  surface-variant: '#e5e2e0'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 62px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 46px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.005em
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.25rem
  margin: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system is built for Kenyan teenagers (ages 14–17) who are developing real-world financial intuition—from managing pocket money and mobile money (M-Pesa) to understanding saving, budgeting, and everyday trade-offs. The personality is **approachable, street-smart, and encouraging**, avoiding the intimidating, sterile tone of traditional banking apps.

The visual language blends **Modern Editorial** and **Tactile Zine** aesthetics:
- **Student-Zine Energy:** Clean, structured layouts punctuated by playful, sticker-like badges, bold geometric headlines, and subtle paper-grain warmth.
- **Tactile & Crisp:** Interactive elements feel physical and responsive, using crisp ink borders and subtle offset states rather than heavy, blurry drop shadows.
- **Clarity First:** Financial concepts are broken down into digestible, scannable chunks with high-contrast typography and clear visual hierarchy.

## Colors

The palette is anchored in warm, tactile print tones paired with energetic, culturally resonant Kenyan accents:

- **Background & Surfaces:** The primary canvas uses a warm off-white paper tone (`#FAF8F5`) to reduce eye strain and evoke a physical zine. Secondary surface containers shift slightly darker (`#F2EFE9`) to group content without heavy dividers.
- **Primary (`#00A859`):** Energetic M-Pesa emerald green. Reserved for primary calls to action, positive financial milestones, progress indicators, and key interactive states.
- **Secondary (`#E06D3B`):** Warm terracotta/ochre. Used for editorial highlights, "pro-tip" callouts, cautionary nudges (without feeling punitive), and secondary badges.
- **Tertiary (`#F4B942`):** Sunlit amber. Used sparingly for celebratory moments, streaks, quiz rewards, and sticker-style accents.
- **Neutral (`#141413`):** Deep ink black. Used for primary typography, crisp borders, and high-contrast icons. Secondary text uses a softened ink (`#52504C`) while maintaining strong WCAG AA contrast on `#FAF8F5`.

## Typography

The typographic pairing balances **bold geometric character** with **effortless readability**:

- **Headlines & Labels (`Space Grotesk`):** Brings a punchy, editorial zine voice to titles, section headers, and numerical callouts (such as KES amounts and percentages). Tight letter-spacing on large display sizes keeps headlines compact and impactful.
- **Body Copy (`Plus Jakarta Sans`):** A warm, open, and highly legible sans-serif that makes financial explanations, scenarios, and quizzes feel approachable on both mobile and desktop screens.
- **Responsive Scaling:** Display and large headline roles (`display-lg`, `headline-lg`) step down via dedicated mobile tokens (`display-lg-mobile`, `headline-lg-mobile`) below `768px` to prevent awkward line wrapping on smaller screens.

## Layout & Spacing

The design system uses a **12-column fluid grid** on desktop (`>= 1024px`) with a max-width container of `1200px` centered on the paper canvas. Content breathes with generous editorial margins so lessons and interactive tools never feel cramped.

- **Desktop (`>= 1024px`):** 12 columns, `1.25rem` (20px) gutters, `2.5rem` (40px) outer margins.
- **Tablet (`768px – 1023px`):** 8 columns, `1.25rem` gutters, `1.5rem` (24px) outer margins. Multi-column lesson cards reflow into 2-column grids.
- **Mobile (`< 768px`):** 4 columns, `1rem` (16px) gutters, `1rem` (16px) outer margins. All multi-column layouts stack vertically, prioritizing single-thumb reachability for interactive calculators and quizzes.

## Elevation & Depth

Rather than relying on soft, blurry drop shadows, this design system conveys hierarchy through **tactile ink borders, tonal paper shifts, and crisp offset states**:

- **Tonal Paper Layers:** The base canvas (`#FAF8F5`) sits behind slightly warmer, darker surface containers (`#F2EFE9`) to group related content naturally.
- **Crisp Ink Borders:** Cards, inputs, and interactive modules use `1.5px` solid borders in deep ink (`#141413`) to create a distinct, print-inspired silhouette.
- **Tactile Offset Shadows:** Interactive cards and primary buttons use a hard, unblurred `2px` or `4px` solid ink offset shadow (`#141413`) at rest. On hover or press, the element translates into the shadow, creating a satisfying, physical "press" sensation.

## Shapes

A **Soft (`1`)** roundedness scale (`0.25rem` base, `0.5rem` for `rounded-lg`, `0.75rem` for `rounded-xl`) keeps the interface feeling structured and editorial—like cut paper cards and zine clippings—without becoming overly bubbly.

- **Cards & Containers:** Use `0.5rem` (`rounded-lg`) for standard content cards and `0.75rem` (`rounded-xl`) for featured hero modules.
- **Buttons & Inputs:** Use `0.25rem` (`rounded`) to maintain a crisp, tactile edge.
- **Badges & Chips:** May use full pill rounding (`9999px`) to contrast against rectangular cards and mimic editorial stickers.

## Components

- **Buttons:**
  - *Primary:* Solid M-Pesa emerald (`#00A859`) fill, deep ink (`#141413`) `1.5px` border, white or deep ink bold label (`label-lg`), and a `3px` solid ink offset shadow. Translates `2px` down-right on active press.
  - *Secondary:* Warm paper (`#FAF8F5`) fill with `1.5px` ink border and ink text.
  - *Ghost:* Transparent background with underline or subtle `#F2EFE9` hover state for low-emphasis actions.
- **Chips & Editorial Badges:** Pill-shaped (`9999px`) with `1px` ink borders. Used for topic tags ("Budgeting", "M-Pesa", "Side Hustles") and zine callouts ("PRO TIP", "REAL TALK") in sunlit amber (`#F4B942`) or terracotta (`#E06D3B`).
- **Cards:** Warm paper (`#FAF8F5`) or tinted surface (`#F2EFE9`) with `1.5px` ink border and `0.5rem` radius. Interactive lesson or scenario cards include a subtle `3px` ink offset shadow on hover.
- **Input Fields:** Crisp `1.5px` ink border, `#FAF8F5` background, `0.25rem` radius, and generous internal padding (`space-md`). Focus states shift the border to `#00A859` with a `2px` emerald outer ring. Currency inputs (e.g., `KES`) feature a fixed left-aligned prefix badge.
- **Checkboxes & Radio Buttons:** Custom `20px × 20px` squares (checkboxes) or circles (radios) with `1.5px` ink borders. Selected states fill with `#00A859` and display a crisp white checkmark or dot.
- **Lists:** Clean vertical stacks separated by `1px` low-contrast ink dividers (`rgba(20, 20, 19, 0.12)`) or `space-sm` gaps when using card-style list items.
- **Product-Specific Components:**
  - *Scenario / Quiz Cards:* Interactive multiple-choice cards with instant, non-judgmental feedback banners in emerald (correct) or terracotta (try again).
  - *KES Budget Sliders:* Tactile range sliders with `#00A859` active tracks and bold `Space Grotesk` numerical readouts.