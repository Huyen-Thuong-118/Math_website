---
name: Mathematical Clarity
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464e'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#75777f'
  outline-variant: '#c5c6cf'
  surface-tint: '#4f5e81'
  primary: '#041534'
  on-primary: '#ffffff'
  primary-container: '#1b2a4a'
  on-primary-container: '#8392b7'
  inverse-primary: '#b7c6ee'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#0c181e'
  on-tertiary: '#ffffff'
  tertiary-container: '#212c33'
  on-tertiary-container: '#88939c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e2ff'
  primary-fixed-dim: '#b7c6ee'
  on-primary-fixed: '#0a1a3a'
  on-primary-fixed-variant: '#384668'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#d8e4ed'
  tertiary-fixed-dim: '#bcc8d1'
  on-tertiary-fixed: '#121d23'
  on-tertiary-fixed-variant: '#3d484f'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-hero:
    fontFamily: Comfortaa
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 68px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Comfortaa
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 46px
    letterSpacing: -0.01em
  headline-xl:
    fontFamily: Comfortaa
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 50px
    letterSpacing: -0.01em
  headline-xl-mobile:
    fontFamily: Comfortaa
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: 0em
  headline-lg:
    fontFamily: Comfortaa
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Comfortaa
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: 0em
  headline-md:
    fontFamily: Comfortaa
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  headline-sm:
    fontFamily: Comfortaa
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.03em
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system crafts an academic sanctuary tailored for Vietnamese high school students preparing for the high-stakes National High School Exam (THPTQG). The brand personality harmonizes rigorous mathematical precision with an approachable, calm, and confidence-inspiring digital atmosphere. It counters exam anxiety through generous spatial rhythm, luminous surfaces, and soft geometry.

The design movement combines modern soft-minimalism with refined glassmorphism:
- **Spatial Rhythm:** Alternating white and pastel canvas planes create distinct intellectual chambers without harsh visual barriers.
- **Glass & Geometry:** Liquid-glass modules with soft background dispersion and delicate 1px perimeter outlines evoke the precision of optical drafting tools and high-grade glass instruments.
- **Micro-tactility:** Floating pill components, frictionless hover states, and smooth interactive trajectories make heavy mathematical problem sets feel lightweight, manageable, and structured.

## Colors

The palette establishes an intellectual hierarchy prioritizing sustained readability, reduced cognitive fatigue, and distinct state awareness:

- **Primary (`#1B2A4A`):** Deep scholastic navy. Serves as the anchor for primary typography, primary action buttons, key brand marks, and prominent vector symbols.
- **Secondary (`#3B82F6`):** Vibrant academic blue. Deployed for active state indicators, focus rings, progress meters, and dynamic formula highlights.
- **Tertiary (`#E8F4FD`):** Soft pastel mist. Formulates the alternating full-width sectional bands, soft badge backgrounds, and translucent card fills.
- **Neutral (`#64748B`):** Muted slate. Utilized for meta annotations, secondary labels, formula subtext, and deactivated states.
- **Canvas Base (`#FFFFFF`):** Pure optical white alternating against `#E8F4FD` to yield rhythm.
- **Footer Deep (`#0B1330`):** Night navy anchoring the bottom boundary with high-contrast inverted typography.
- **Functional Semantics:**
  - Success / Correct Answer: `#10B981` (Emerald)
  - Warning / Review Later: `#F59E0B` (Amber)
  - Error / Incorrect Formula: `#EF4444` (Crimson)

## Typography

The typographical pairing resolves the tension between modern approachability and high-density academic precision:

- **Comfortaa (Headlines & Badges):** Its distinctive geometric curves soften mathematical severity, lending an optimistic, welcoming quality to module titles, section markers, and hero value statements.
- **Be Vietnam Pro (Body, Formulas, & Metadata):** Built natively with comprehensive Vietnamese diacritic proportions, ensuring that tone marks do not collide with math notation, exponents, superscripts, or dense paragraphs.
- **Mathematical Figures & Equations:** Inline LaTeX symbols and LaTeX display blocks inherit line heights equivalent to body levels with tabular numerals aligned automatically for clear step-by-step problem derivations.

## Layout & Spacing

The structural layout relies on an 8pt baseline rhythm within an adaptable 12-column system, engineered to switch smoothly between immersive long-form lesson study and high-density test-taking screens:

- **Grid Architecture:**
  - Desktop (≥1200px): Max-width 1280px, 12 columns, 24px gutter, 32px safe margins.
  - Tablet (768px - 1199px): 8 columns, 20px gutter, 24px margins.
  - Mobile (<768px): 4 columns, 16px gutter, 20px margins.
- **Sectional Alternation:**
  - Full-viewport section bands transition rhythmically between pure `#FFFFFF` and pastel `#E8F4FD`.
  - Top and bottom sectional padding maintains `space-2xl` on desktop and scales down to `space-xl` on mobile to preserve vertical breathing room.
- **Floating Containers:**
  - Central navigation and auxiliary status bars float detached above the viewport threshold with dynamic safe-inset positioning.

## Elevation & Depth

Visual depth avoids dense opaque dropshadows, relying instead on translucent glass refraction and ethereal ambient light:

- **Surface Tiers:**
  - *Base Surface:* Flat white `#FFFFFF` or pastel tint `#E8F4FD`.
  - *Liquid-Glass Cards:* `rgba(255, 255, 255, 0.78)` overlay with `backdrop-filter: blur(16px)` and a crisp `1px solid rgba(27, 42, 74, 0.08)`.
  - *Floating Interactive Elements (Pill Nav & Popovers):* `rgba(255, 255, 255, 0.92)` overlay with `backdrop-filter: blur(20px)`, paired with an ambient shadow `0 12px 32px -8px rgba(27, 42, 74, 0.07)`.
  - *Elevated Math Solution Sheets:* `0 20px 40px -12px rgba(27, 42, 74, 0.09)`.
- **Specular Border Treatment:**
  - Standard cards utilize `1px solid rgba(27, 42, 74, 0.08)`.
  - Active, selected, or focused modules transition to `1px solid rgba(59, 130, 246, 0.40)` with a soft outer glow `0 0 0 3px rgba(59, 130, 246, 0.12)`.

## Shapes

The design system incorporates generous curvature to create a soft, friendly learning environment:

- **Standard Cards & Module Panels:** Fixed between `20px` and `24px` radius, providing a distinct rounded container for question stems, diagram canvas zones, and score summary reports.
- **Pill System:** Full pill radius (`9999px`) applied systematically to the floating main navigation bar, status tags, topic chips, and primary action buttons.
- **Inputs & Field Enclosures:** Scaled to `14px` radius for tactile harmony between cards and inner controls.
- **Geometric Diagrams:** Math coordinates, graph plotting windows, and geometric figures are housed strictly within rounded 20px card cutouts with hidden overflow.

## Components

### Floating Pill Navigation
- Centered horizontal capsule pinned 20px below top viewport.
- Translucent backdrop blur (`blur(20px)`), white glass fill (`rgba(255, 255, 255, 0.88)`), border `1px solid rgba(27, 42, 74, 0.08)`.
- Roundedness `9999px`, inner vertical padding 8px, horizontal padding 20px.
- Menu items use `Comfortaa` regular transitioning to bold navy `#1B2A4A` on hover/active.

### Buttons
- **Primary:** Deep navy background `#1B2A4A`, pure white text, pill radius (`9999px`), padding `12px 28px`. Subtle upward transition (`transform: translateY(-1px)`) and diffused shadow on hover.
- **Secondary / Glass Pill:** Translucent white background `rgba(255, 255, 255, 0.70)`, navy text, `1px solid rgba(27, 42, 74, 0.12)`, backdrop-filtered blur.
- **Icon Utility Buttons:** 44x44px circular or pill containers with matching 1px border for audio pronunciation, formula zoom, and formula scratchpads.

### Chips & Badges
- Fully rounded pills (`9999px`), `Comfortaa` or `Be Vietnam Pro` bold label typography (`label-md` or `label-sm`).
- *Topic Chip:* Pastel `#E8F4FD` fill with `#1B2A4A` label and 1px border `rgba(27, 42, 74, 0.06)`.
- *Exam Difficulty Badge (e.g., Vận Dụng Cao):* Soft amber tint `#FEF3C7` with `#B45309` text.
- *Status Tag:* Emerald tint `#D1FAE5` with `#065F46` text for "Đã thành thạo" (Mastered).

### Cards (Liquid-Glass & Standard)
- Outer border radius: `22px`.
- Padding: `24px` to `32px`.
- Background: Alternating clean opaque white `#FFFFFF` or liquid-glass `rgba(255, 255, 255, 0.75)` with `1px solid rgba(27, 42, 74, 0.08)`.
- Option cards in multiple-choice exams highlight with `#3B82F6` borders and soft `#EFF6FF` fills when selected.

### Inputs & Selection Controls
- **Form Inputs:** 48px height, `14px` border radius, `#FFFFFF` fill, `1px solid rgba(27, 42, 74, 0.15)`. Focus triggers `#3B82F6` border with 3px concentric pastel halo.
- **Radio / Checkbox Selectors:** Fully rounded circular pill selectors for THPTQG A/B/C/D answer selections, displaying bold Comfortaa question letters centered inside a 36px ring.

### Exam-Specific Specialized Components
- **Math Formula Sheet Accordion:** Collapsible drawer with light gray gridlines for step-by-step LaTeX solution reveals.
- **Exam Progress Ribbon:** Persistent slim 6px pill bar at top indicating completed, flagged, and unanswered questions via color-coded nodes.
- **Question Index Matrix:** Floating card with compact 32px pill-shaped buttons for quick navigation across 50 exam items.