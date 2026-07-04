---
name: Robo-Mentor Nexus
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434655'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#855300'
  on-secondary: '#ffffff'
  secondary-container: '#fea619'
  on-secondary-container: '#684000'
  tertiary: '#4d556b'
  on-tertiary: '#ffffff'
  tertiary-container: '#656d84'
  on-tertiary-container: '#eef0ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Noto Sans KR
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Noto Sans KR
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Noto Sans KR
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Noto Sans KR
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Noto Sans KR
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Noto Sans KR
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Noto Sans KR
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2.5rem
  xl: 4rem
  container-max: 1280px
  gutter: 24px
---

## Brand & Style
The brand personality is authoritative yet nurturing, bridging the gap between high-level robotics engineering and accessible STEAM education. It targets parents seeking a premium future for their children and students looking for an inspiring, high-tech environment. 

The visual style is **Corporate Modern with a SaaS-inspired precision**. It utilizes ample white space, a refined color palette, and subtle technical motifs (such as grid patterns or geometric accents) to evoke an emotional response of reliability, innovation, and academic excellence. The interface should feel organized, professional, and sophisticated, avoiding the overly "childish" tropes often found in education to emphasize the serious technical caliber of the academy.

## Colors
The color strategy employs a "Trust Blue" foundation paired with "Success Amber" for high-impact actions. 

- **Primary (#2563eb):** Used for navigation, links, and secondary actions to establish a sense of institutional stability.
- **Accent (#f59e0b):** Reserved strictly for primary Call-to-Actions (CTAs) and critical "Success" metrics to ensure they pop against the cooler backgrounds.
- **Backgrounds:** The main surface uses a soft off-white (#f8fafc) to reduce eye strain, while alternating sections use #f1f5f9 to create a clear visual hierarchy.
- **Hero Dark:** For high-impact landing areas, use a linear gradient from #0f172a to #1e40af to signify depth, technology, and premium positioning.

## Typography
The system relies on **Noto Sans KR** for its exceptional clarity in both Korean and English characters. 

Headings use a heavy weight (700-800) with slight negative letter-spacing to create a "locked-in," professional editorial feel. Body text maintains a generous line height (1.6) for maximum legibility of educational content. Display sizes are aggressively scaled down for mobile to ensure headlines do not break awkwardly across lines. Use the `label-md` role for small metadata, badges, and overlines to add a layer of systematic organization.

## Layout & Spacing
The layout follows a **Fixed-Fluid hybrid grid**. On desktop, content is contained within a 1280px max-width container with a 12-column structure. 

- **Desktop:** 24px gutters, 48px page margins.
- **Tablet:** 8-column grid, 24px margins.
- **Mobile:** 4-column grid, 16px margins.

Spacing follows a 4px base unit. Use `lg` (2.5rem) for vertical section spacing to maintain the "clean and airy" SaaS aesthetic. Elements should be grouped using "Outer-Large, Inner-Small" logic—consistent padding within cards (md) vs. larger gaps between sections (xl).

## Elevation & Depth
Depth is achieved through **Ambient Shadows** and tonal layering rather than heavy borders.

- **Default Surface:** Uses a very subtle shadow (`0 4px 24px rgba(15, 23, 42, 0.08)`) to lift cards off the soft-white background.
- **Interactive State:** On hover, the elevation should increase to a "large" shadow with a slightly higher Y-offset and blur to simulate physical proximity.
- **Tonal Layers:** Use the `--bg-alt` (#f1f5f9) for inset areas like search bars or dashboard sidebars to create a "recessed" look without using shadows.
- **Glassmorphism (Optional):** In the hero section or over image-heavy areas, use a backdrop blur (12px) with a semi-transparent white fill (80% opacity) for navigation bars.

## Shapes
The shape language is a mix of geometric precision and approachability. 

- **Cards:** A 16px radius (`rounded-lg` equivalent) is used for course cards, testimonials, and containers to provide a friendly, modern feel.
- **Buttons:** A full pill-shape (999px) is used for all buttons to differentiate them from other UI containers and to soften the overall technical look.
- **Inputs:** A more precise 10px radius is used for form fields to signify "data entry" and structural order.
- **Icons:** Should use a 1.5pt stroke weight with slightly rounded terminals to match the typography.

## Components
- **Buttons:**
  - **Primary CTA:** Accent color (#f59e0b), white text, pill-shaped, bold weight.
  - **Secondary:** Primary color (#2563eb) outline or solid, pill-shaped.
- **Cards:** 16px corner radius, default ambient shadow, white background. Include a subtle 1px border (#e2e8f0) to define edges on very bright screens.
- **Input Fields:** 10px radius, 1px border (#cbd5e1). Focus state should use a 2px outer glow of the primary color.
- **Chips/Badges:** Use `label-md` typography. Backgrounds should be low-opacity versions of the status colors (e.g., 10% Blue for "Robotics", 10% Amber for "Bestseller").
- **Lists:** Use custom bullet points (small geometric robot-head icons or simple squares) instead of standard dots to reinforce the brand's tech theme.
- **Navigation:** Fixed top bar with a backdrop blur and a thin bottom border for a "premium SaaS" feel.