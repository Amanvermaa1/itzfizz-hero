# Itzfizz Hero Section Animation

A scroll-driven hero section animation built with Next.js, React, Tailwind CSS, and GSAP.

## Features

- Scroll-based car animation that moves across the screen
- Letter-by-letter text reveal animation synchronized with scroll
- Statistics boxes that fade in on scroll
- Smooth, performant animations using GSAP ScrollTrigger
- Fully responsive design

## Tech Stack

- **Framework**: Next.js 16
- **UI**: React 19
- **Styling**: Tailwind CSS 4
- **Animation**: GSAP with ScrollTrigger
- **Language**: TypeScript

## Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment to GitHub Pages

1. Create a new GitHub repository named `itzfizz-hero`
2. Push this code to the repository
3. Go to repository Settings > Pages
4. Select "gh-pages" branch as source
5. The site will be available at: `https://amnverma17405.github.io/itzfizz-hero`

## Animation Details

- **Hero Section**: Occupies first screen (200vh for scroll effect)
- **Car Animation**: Moves from left to right based on scroll position
- **Letter Reveal**: Each letter in "WELCOME ITZFIZZ" reveals as the car passes
- **Green Trail**: Follows the car as it moves
- **Statistics**: Fade in at different scroll positions

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
└── components/
    └── HeroSection.tsx  # Hero section with animations
public/
└── McLaren 720S 2022 top view.png  # Car image asset
```
