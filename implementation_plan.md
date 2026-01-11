# Implementation Plan - Akllyl Photo Studio Website (Next.js Edition)

## Goal
Create a premium, responsive website for "Akllyl Photo Studio" inspired by [Parques de Sintra](https://www.parquesdesintra.pt/en/), built with **Next.js** and **Tailwind CSS**. The site will focus on visual storytelling, portfolio showcasing, and booking conversions.

## Tech Stack
- **Framework**: Next.js (App Router).
- **Styling**: Tailwind CSS (for layout/utility) + Custom CSS Modules (for complex animations like the hero hover effect).
- **Language**: TypeScript (standard for modern Next.js).
- **Icons**: `lucide-react` or `heroicons`.

## Visual Design System
- **Colors**:
  - Primary Accent: `#FEBA00` (Amber/Gold - warm, premium).
  - Backgrounds: `#FFFFFF` (White) and `#F5F5F5` (Light Gray).
  - Text: `#333333` (Charcoal) and `#000000` (Black).
- **Typography**:
  - Headings: 'Clash Display' (via local font or `next/font`) or 'Outfit'.
  - Body: 'Inter' or 'Manrope'.
- **Aesthetics**: Ample whitespace, card-based layouts with shadow uplifts, refined micro-animations.

## Key Deliverables

### 1. Project Setup
- Initialize Next.js app with Tailwind CSS.
- Configure fonts and global styles.

### 2. Components
- **Layout**: `Header` (Sticky, Hamburger menu), `Footer` (High contrast, Amber background).
- **Hero**: **Custom Component** implementing the "vertical movement" parallax effect on hover.
  - Structure: A grid of vertical image strips/cards that shift up/down based on mouse position.
- **UI Elements**: `GalleryCard`, `ServiceCard`, `Button` (Primary/Secondary).

### 3. Pages
- **Home (`page.tsx`)**:
  - Alert Banner.
  - Hero Section.
  - Featured Galleries Grid.
  - Services/Packages Section.
  - Testimonials Slider.
  - Blog Teasers.
- **Booking (`/book/page.tsx`)**: Form with client-side validation using React state.
- **Portfolio (`/portfolio/page.tsx`)**: Grid layout for gallery items.

### 4. Interactions
- **Hero Animation**: Custom CSS/Framer Motion or Tailwind `group-hover` logic to replicate the vertical sliding effect.
- **Transitions**: Smooth page transitions and hover states.

## Workflow
1.  **Init**: Run `npx create-next-app@latest .`
2.  **Scaffold**: Set up `components` folder and basic layouts.
3.  **Develop Hero**: Focus heavily on the requested vertical hover animation.
4.  **Build Pages**: Implement Home and Booking pages.
5.  **Refine**: Polish aesthetics and responsiveness.
