# Quick Start Guide

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to `http://localhost:5173`

## Customizing Your Portfolio

### Update Contact Information

Edit `src/components/Contact.tsx` and update:
- Email address
- Phone number  
- GitHub profile URL
- LinkedIn profile URL

### Update Projects

Edit `src/components/Projects.tsx` to:
- Add more projects to the `projects` array
- Update project details (title, description, technologies, features)
- Add GitHub and demo links

### Personalize Content

All content is in the component files:
- **Hero Section**: `src/components/Hero.tsx`
- **About**: `src/components/About.tsx`
- **Skills**: `src/components/Skills.tsx`
- **Experience**: `src/components/Experience.tsx`
- **Projects**: `src/components/Projects.tsx`

### Change Colors

Edit `tailwind.config.js` to customize the pastel color palette under the `pastel` section.

### Update SEO Meta Tags

Edit `index.html` to update:
- Page title
- Meta description
- Open Graph tags
- Twitter card tags

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Deploying

The `dist` folder can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any static hosting provider

## Features Overview

✅ Pastel color theme (light & dark modes)
✅ Smooth Framer Motion animations
✅ Fully responsive design
✅ SEO optimized
✅ Fast loading with Vite
✅ Type-safe with TypeScript



