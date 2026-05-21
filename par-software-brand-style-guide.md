# Par Software — Brand Style Guide

---

## Primary Colours

| Token | Name | Hex | Usage |
|-------|------|-----|-------|
| `color-primary` | Teal | `#0E565A` | Backgrounds, headers, CTAs |
| `color-accent` | Mint | `#ACFEA5` | Highlights, icons, badges |
| `color-white` | White | `#FFFFFF` | Page bg, card surfaces |
| `color-black` | Black | `#000000` | Body text on light bg |

---

## Teal Scale

| Token | Stop | Hex | Usage |
|-------|------|-----|-------|
| `teal-50` | Lightest | `#E8F4F5` | Tinted backgrounds, hover fills |
| `teal-200` | Light | `#8ABFC2` | Muted teal text, disabled states |
| `teal-400` | Mid | `#1A7A7F` | Secondary buttons, links |
| `teal-600` | Base | `#0E565A` | Primary brand colour |
| `teal-800` | Dark | `#0A3E41` | Hover states on primary |
| `teal-900` | Darkest | `#062729` | Deep backgrounds |

---

## Mint Scale

| Token | Stop | Hex | Usage |
|-------|------|-----|-------|
| `mint-50` | Lightest | `#F0FFF0` | Tinted success/accent backgrounds |
| `mint-100` | Light | `#D2FDD0` | Soft accent fills |
| `mint-300` | Base | `#ACFEA5` | Primary accent colour |
| `mint-500` | Mid | `#6EDB66` | Hover on accent elements |
| `mint-700` | Dark | `#3AAF32` | Accent text on light bg |
| `mint-900` | Darkest | `#1E6E18` | Accent text on white |

---

## Neutral (Teal-Gray) Scale

| Token | Stop | Hex | Usage |
|-------|------|-----|-------|
| `gray-50` | Lightest | `#F4F6F6` | Page background, card fills |
| `gray-100` | Light | `#E0EAEB` | Borders, dividers |
| `gray-300` | Mid-light | `#B0C4C5` | Placeholder text, disabled borders |
| `gray-500` | Mid | `#6B8C8E` | Muted body text, captions |
| `gray-700` | Dark | `#3A5A5C` | Secondary text |
| `gray-900` | Darkest | `#1A2C2E` | Primary body text |

---

## Colour Combinations

| Background | Text | Usage |
|------------|------|-------|
| `#0E565A` | `#ACFEA5` | Primary dark surface — hero, nav |
| `#0E565A` | `#FFFFFF` | Headers, CTAs, nav items |
| `#ACFEA5` | `#0E565A` | Badges, highlights, tags |
| `#F4F6F6` | `#0E565A` | Cards, content sections |
| `#FFFFFF` | `#1A2C2E` | Body copy, default page text |

---

## Typography

> Font family TBD — to be confirmed with UX designer.

| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Display / H1 | 48px | 500 | 1.1 | Hero headlines |
| H2 | 32px | 500 | 1.2 | Section headings |
| H3 | 22px | 500 | 1.3 | Sub-section headings |
| H4 | 18px | 500 | 1.4 | Card titles, labels |
| Body | 16px | 400 | 1.7 | Default paragraph text |
| Small / Caption | 13px | 400 | 1.5 | Metadata, timestamps |
| Overline / Label | 11px | 500 | 1.4 | Uppercase section labels, tags |

**Notes:**
- Two weights only: `400` regular and `500` medium. Avoid 600/700.
- Overline/label style: uppercase + `letter-spacing: 0.06em`
- Minimum font size: 11px

---

## UI States

| State | Background | Text | Hex (bg / text) |
|-------|------------|------|-----------------|
| Success | Mint light | Teal dark | `#ACFEA5` / `#0A3E41` |
| Warning | Amber light | Amber dark | `#FFF3CD` / `#7A5000` |
| Error | Red light | Red dark | `#FDECEA` / `#8B2020` |
| Info | Teal light | Teal base | `#E8F4F5` / `#0E565A` |
| Neutral | Gray light | Gray dark | `#F4F6F6` / `#3A5A5C` |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | `4px` | Inputs, chips, small tags |
| `radius-md` | `8px` | Buttons, badges, dropdowns |
| `radius-lg` | `12px` | Cards, modals, panels |
| `radius-xl` | `20px` | Hero sections, feature blocks |
| `radius-full` | `9999px` | Pills, avatars, toggles |

---

## Spacing Scale

Base unit: `1rem = 16px`

| Token | rem | px | Usage |
|-------|-----|----|-------|
| `space-1` | `0.25rem` | `4px` | Tight internal gaps |
| `space-2` | `0.5rem` | `8px` | Icon-to-label gaps |
| `space-3` | `0.75rem` | `12px` | Component internal padding |
| `space-4` | `1rem` | `16px` | Default element spacing |
| `space-6` | `1.5rem` | `24px` | Between related elements |
| `space-8` | `2rem` | `32px` | Section internal padding |
| `space-12` | `3rem` | `48px` | Between sections |
| `space-16` | `4rem` | `64px` | Large section breaks |
| `space-24` | `6rem` | `96px` | Hero vertical padding |
| `space-32` | `8rem` | `128px` | Full-bleed section spacing |

---

## Logo

- Format: PNG (provided), SVG preferred for web
- Clearspace: minimum `1× logo height` on all sides
- On dark (teal) backgrounds: use full logo as-is
- On light backgrounds: confirm with brand owner whether an inverted/dark variant is needed
- Do not recolour, distort, or place on busy backgrounds

---

*Last updated: May 2026 — Par Software*
