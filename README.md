# Itzfizz Hero Section Animation - Next.js

A scroll-driven hero section animation inspired by [paraschaturvedi.github.io/car-scroll-animation](https://paraschaturvedi.github.io/car-scroll-animation), built with Next.js, React, Tailwind CSS, and GSAP.

## Features

- Scroll-based car animation that moves across the screen
- Letter-by-letter text reveal ("W E L C O M E I T Z F I Z Z") synchronized with scroll
- Statistics boxes (58%, 23%, 27%, 40%) that fade in on scroll
- Smooth, performant animations using GSAP ScrollTrigger
- Green trail following the car
- Fully responsive design

## Tech Stack

- **Framework**: Next.js 16
- **UI**: React 19
- **Styling**: Tailwind CSS 4
- **Animation**: GSAP with ScrollTrigger
- **Language**: TypeScript

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (static export)
npm run build
```

## Live Demo

**GitHub Pages**: https://amanvermaa1.github.io/itzfizz-hero/

## Animation Details

| Element | Behavior |
|---------|----------|
| **Car** | Moves left to right based on scroll position |
| **Letters** | Each letter reveals as the car passes |
| **Green Trail** | Follows the car as it moves |
| **Statistics** | Fade in at different scroll positions |

## Deployment to GitHub Pages

1. The project is configured for static export (`output: 'export'`)
2. After pushing to GitHub, go to repository Settings > Pages
3. Select the `out` folder as source
4. The site will be available at: `https://amanvermaa1.github.io/itzfizz-hero/`

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx        # Home page
└── components/
    └── HeroSection.tsx  # Hero section with GSAP animations
public/
└── McLaren 720S 2022 top view.png  # Car image asset
```

## Internship Assignment

This project was created for the **Web Development Internship at Itzfizz Digital**.

- **Duration**: 6 Months
- **Stipend**: ₹4,000/month + Quarterly Bonus upto ₹5,000
