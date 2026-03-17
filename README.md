# Bumjun Ko Portfolio

A personal portfolio website developed to present my software projects, technical background, experience, and contact information in a clear and responsive format.

Live Application: https://bumjun.dev

## Portfolio Preview

### Home / Hero Section
![Home 1](readme_image/bumjunko-portfolio-1.png)
![Home 2](readme_image/bumjunko-portfolio-1-2.png)

### Other Sections
![Section 1](readme_image/bumjunko-portfolio-2.png)
![Section 2](readme_image/bumjunko-portfolio-3.png)
![Section 3](readme_image/bumjunko-portfolio-4.png)
![Section 4](readme_image/bumjunko-portfolio-5.png)
![Section 5](readme_image/bumjunko-portfolio-6.png)

## Overview

This portfolio highlights:
- software and web application projects
- academic, administrative, and leadership experience
- technical skills and tools
- resume and contact access

## Architecture

- Frontend: React with Vite
- Styling: Tailwind CSS
- Animation: Framer Motion
- Routing: React Router
- Contact Handling: Formspree integration
- Deployment: Vercel with SPA rewrite support

## Quick Start

### Prerequisites

- Node.js 18+
- npm

### Local Development

```bash
# Clone repository
git clone <your-repository-url>
cd bumjun-portfolio

# Frontend setup
cd client
npm install
npm run dev
```

Default local URL: `http://localhost:5173`

## Build and Preview

```bash
cd client
npm run build      # Production build
npm run preview    # Preview build locally
npm run lint       # Run ESLint
```

## Project Structure

```text
├── client/                         # React + Vite application
│   ├── public/                     # Static files (resume, music, logos, project images)
│   ├── src/
│   │   ├── components/             # Hero, About, Experience, Skills, Projects, Contact, Footer
│   │   ├── components/ui/          # Shared UI components
│   │   ├── pages/                  # Home and NotFound pages
│   │   ├── hooks/                  # Custom hooks
│   │   ├── lib/                    # Utility functions
│   │   ├── App.jsx                 # App shell and routing
│   │   └── main.jsx                # Entry point
│   ├── package.json
│   └── vercel.json                 # SPA rewrite configuration
├── readme_image/                   # README preview images
└── README.md
```

## Key Features

- Responsive hero, about, experience, skills, projects, and contact sections
- Experience highlights covering operations, leadership, and administrative work
- Mobile-friendly project carousel with category filtering
- Project cards with live demo, deliverable, and GitHub links
- Formspree contact form with validation and toast feedback
- Dark mode by default with theme toggle support
- Resume, social links, and music controls integrated into navigation

## Contact Form Setup

The contact form currently sends submissions through Formspree.

File to update:
- `client/src/components/ContactSection.jsx`

To change the inbox destination:
1. Create or open your Formspree form.
2. Replace the endpoint URL inside `handleSubmit`.

## Responsive Design

- Desktop: Expanded section layouts with full navigation
- Tablet: Adjusted spacing and multi-column layouts
- Mobile: Swipeable project cards, compact controls, and touch-friendly interactions

## Technology Stack

### Core

- React 18
- Vite 5
- Tailwind CSS 4
- Framer Motion

### Supporting Libraries

- React Router DOM
- Lucide React
- Radix UI Toast
- Formspree
- Vercel Analytics

## Deployment

This project is configured for Vercel deployment.

- Root directory: `client`
- Build command: `npm run build`
- Output directory: `dist`
- SPA routing rewrite is defined in `client/vercel.json`

## License

This project is intended for personal portfolio use.
