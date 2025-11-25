# Gemini Context: Likheet's Portfolio Website

## Project Overview
This is a personal portfolio website for Likheet Shetty, built with **Next.js 15** (App Router) and **React 19**. It showcases projects, work experience, education, and skills with a focus on high-performance animations and a modern design.

### Key Technologies
- **Framework:** Next.js 15.2.0 (React 19 RC)
- **Styling:** Tailwind CSS (v3.4), `tailwindcss-animate`, `clsx`, `tailwind-merge`
- **Animations:** GSAP (v3.12), Framer Motion (v12)
- **Scroll:** Lenis Scroll (`@studio-freight/react-lenis` / `lenis`)
- **Icons:** Lucide React, SVGR (for custom SVG icons)
- **Package Manager:** pnpm
- **Fonts:** Google Fonts (Anton, Roboto Flex, Bodoni Moda, Inter, Playfair Display)

## Directory Structure

- **`app/`**: Main application routes (Next.js App Router).
    - **`layout.tsx`**: Root layout containing global providers (Lenis, Google Analytics), fonts, and persistent UI (Navbar, Footer, Cursor).
    - **`page.tsx`**: The main landing page, composing sections from `_components/`.
    - **`_components/`**: Page-specific components for the home page (e.g., `Banner`, `AboutMe`, `Projects`).
    - **`globals.css`**: Global CSS styles and Tailwind directives.
- **`components/`**: Reusable shared UI components (e.g., `Button`, `SectionTitle`, `icons/`).
    - **`ui/`**: (Implied from `components.json`) Likely contains shadcn/ui primitives if installed.
- **`lib/`**: Utility functions and static data.
    - **`data.ts`**: **CRITICAL**. Contains the "database" of the portfolio: Projects, Experience, Education, and Social Links. Edit this file to update content.
    - **`utils.ts`**: Helper functions (class merging, etc.).
- **`types/`**: TypeScript definitions (e.g., `IProject`, `IPublication`).
- **`public/`**: Static assets (images, PDFs, SVGs).
    - **`projects/`**: Project screenshots and thumbnails.
    - **`logo/`**: Tech stack logos.
    - **`docs/`**: Resume and other documents.

## Development Workflow

### Commands
- **Install Dependencies:** `pnpm install`
- **Start Dev Server:** `pnpm dev` (Runs on http://localhost:3000)
- **Build for Production:** `pnpm build`
- **Start Production Server:** `pnpm start`
- **Lint Code:** `pnpm lint`
- **Generate Icons:** `pnpm svgr:icons` (Converts SVGs in `components/icons/svgs` to React components in `components/icons`)

### Coding Conventions
- **Components:**
    - Use functional components.
    - Place page-specific components in a `_components` folder within the route directory.
    - Place shared components in the root `components/` directory.
    - Use `PascalCase` for component filenames.
- **Styling:**
    - Use Tailwind CSS utility classes for most styling.
    - Use `app/globals.css` for global resets or complex custom animations not easily handled by Tailwind.
    - Configure custom colors and animations in `tailwind.config.ts`.
- **Data:**
    - Content is statically defined in `lib/data.ts`. modifying this file changes the website content.
- **Types:**
    - Shared interfaces are defined in `types/index.ts`.
