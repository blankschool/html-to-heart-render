
# Influentes — React + Tailwind Conversion

## Overview
Convert the static "Influentes" HTML landing page into a component-based React app with Tailwind CSS, preserving the dark editorial aesthetic (ink/cream palette, serif + mono typography, gold accent).

## Design System Setup
- Configure Tailwind with custom colors: ink (#0C0C0A), cream (#F0EDE6), gold accent (#D4C89A), and all intermediate tones
- Add Google Fonts: Libre Caslon Display, Libre Caslon Text, DM Mono
- Define font family utilities (display, serif, mono)
- Map CSS custom properties to Tailwind theme tokens

## Component Structure

### Layout Components
- **Navbar** — Fixed top nav with brand mark (circle + dot logo), brand name, and navigation links. Backdrop blur dark background.
- **Section** — Reusable section wrapper with the subtle waveform background texture
- **Container** — Max-width centered content wrapper

### Page Sections (in order)
1. **Hero** — Main headline, subtitle, and CTA
2. **About** — Brand/agency description section
3. **Services** — Service offerings grid/list
4. **Testimonials** — Client testimonials/quotes
5. **Footer** — Bottom section with links and info

### Page Assembly
- Single `Index.tsx` page composing all sections in order
- All text content preserved exactly from the original HTML

## Responsiveness
- Mobile-first approach using Tailwind breakpoints (sm/md/lg)
- Stack columns on mobile, side-by-side on desktop
- Adjust typography scale and spacing for smaller screens
- Nav adapts for mobile (hamburger menu if present in original)

## Assets
- Keep any external image/icon URLs as-is
- Use placeholder divs for any missing assets without changing layout
