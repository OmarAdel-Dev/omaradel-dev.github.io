# Omar Adel — Portfolio

A personal portfolio website for **Omar Adel**, Senior Frontend Engineer, built to showcase frontend systems thinking, selected work experience, technical stack, and contact information.

The design follows a monochrome editorial style with full-viewport sections, bold typography, subtle motion, responsive layouts, and light/dark theme support.

---

## Tech Stack

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**
- **next/font**

---

## Features

- Fully responsive portfolio layout
- Light and dark theme support
- Editorial black-and-white design system
- Full-viewport section scenes
- Smooth section navigation
- Animated section reveals with Framer Motion
- Accessible tabs for Experience section
- Downloadable CV link
- Real contact and social links
- Data-driven Experience and Stack sections
- Optimized for static deployment

---

## Sections

- **Hero** — main positioning and quick links
- **About** — professional intro and working principles
- **Experience** — role-based experience with selected contributions
- **Quote** — editorial transition section
- **Stack** — tools and technologies
- **Contact** — email, LinkedIn, CV, and CTA

---

## Project Structure

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css

  components/
    layout/
    ui/
    motion/
    sections/

  data/
    experience.ts
    stack.ts
    socialLinks.ts
    navigation.ts

  lib/
    utils.ts
```

---

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

---

## Build

Create a production build:

```bash
npm run build
```

Run the production build locally:

```bash
npm run start
```

---

## Linting

Run lint checks:

```bash
npm run lint
```

---

## CV

The downloadable CV should be placed in the `public` folder:

```txt
public/Omar-Adel-CV.pdf
```

It is linked in the website as:

```txt
/Omar-Adel-CV.pdf
```

---

## Deployment

This project can be deployed on platforms like:

- Vercel
- Netlify
- GitHub Pages, with proper static export configuration if needed

Recommended deployment: **Vercel**.

---

## Design Direction

The portfolio uses a minimal editorial system:

- monochrome palette
- large condensed typography
- thin dividers
- structured grids
- full-screen section rhythm
- subtle motion
- reusable components
- accessible interactions

---

## Author

**Omar Adel**  
Senior Frontend Engineer

- GitHub: [OmarAdel-Dev](https://github.com/OmarAdel-Dev)
- LinkedIn: [omaradel97](https://www.linkedin.com/in/omaradel97)
- Email: [omaradel97@outlook.com](mailto:omaradel97@outlook.com)
