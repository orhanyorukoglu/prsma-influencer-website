# PRSMA Influencer Marketing Platform

A modern, responsive React website for influencer marketing services built with Vite, Tailwind CSS, and custom components.

## 🚀 Live Demo

The website is currently deployed at: **https://ehooeiuq.manus.space**

## ✨ Features

- **Modern React Architecture** - Built with Vite for fast development and optimized builds
- **Responsive Design** - Fully responsive layout that works on all devices
- **Professional UI Components** - Custom components with Tailwind CSS styling
- **Optimized Images** - All images are optimized for fast loading
- **Custom Team Portraits** - AI-generated professional team member portraits
- **Interactive Elements** - Smooth animations and hover effects
- **SEO Ready** - Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Custom Components** - Reusable UI components

## 📋 Prerequisites

Before running this project locally, make sure you have:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager
- **Git** (for version control)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The website will be available at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
prsma-working/
├── public/
│   ├── images/           # Optimized images and assets
│   └── index.html        # HTML template
├── src/
│   ├── components/
│   │   └── ui/           # Reusable UI components
│   ├── home/
│   │   └── components/   # Page-specific components
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles and Tailwind imports
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite configuration
└── postcss.config.js     # PostCSS configuration
```

## 🎨 Key Components

### Navigation
- **Navbar** (`navbar-01.jsx`) - Responsive navigation with mobile menu
- **Logo** - Custom PRSMA logo integration

### Hero Section
- **Header** (`header-01.jsx`) - Main hero section with call-to-action
- **Engagement metrics overlay** - Visual social media metrics

### Feature Sections
- **Layout-06** (`layout-06.jsx`) - Engagement tools showcase
- **Layout-252** (`layout-252.jsx`) - Three-column feature grid
- **Team Section** (`team-01.jsx`) - Team member profiles with custom portraits

### Interactive Elements
- **Testimonials** (`testimonial-05.jsx`) - Customer testimonials
- **CTA Sections** (`cta-01.jsx`) - Call-to-action components
- **Contact Form** - Lead generation form

## 🖼️ Image Assets

All images are stored in `/public/images/` and include:

- **Optimized sizes** - Reduced from 2-12MB to 68-368KB each
- **Professional photography** - High-quality stock images
- **Custom team portraits** - AI-generated professional headshots
- **Relevant content** - Images that match section themes

## 🎯 Customization

### Colors and Branding
- Edit `tailwind.config.js` for color scheme changes
- Update logo in `/public/images/PRSMA_Logo.png`
- Modify brand colors in `src/index.css`

### Content Updates
- Team members: Edit `src/home/components/team-01.jsx`
- Hero content: Edit `src/home/components/header-01.jsx`
- Features: Edit `src/home/components/layout-252.jsx`

### Styling
- Global styles: `src/index.css`
- Component-specific styles: Tailwind classes in JSX files
- Custom CSS: Add to `src/index.css`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Hosting Platform
The `dist/` folder contains the production build ready for deployment to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 🔧 Development Tips

### Hot Reload
The development server supports hot reload - changes are reflected immediately.

### Component Development
- All components are in `src/home/components/`
- Use Tailwind classes for styling
- Follow React best practices

### Image Optimization
- Place new images in `/public/images/`
- Optimize images before adding (recommended: <500KB)
- Use descriptive alt text for accessibility

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 3000
   npx kill-port 3000
   ```

2. **Dependencies not installing**
   ```bash
   # Clear npm cache
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build errors**
   ```bash
   # Check for TypeScript/ESLint errors
   npm run build
   ```

## 📞 Support

For questions or issues:
1. Check the browser console for errors
2. Verify all dependencies are installed
3. Ensure Node.js version is 16+

## 🎉 What's Included

This package includes all the work completed:

✅ **Fixed Project Structure** - Consolidated from broken Relume export
✅ **Optimized Images** - 95% size reduction for fast loading
✅ **Enhanced Styling** - Larger H1 tags and proper button styling
✅ **Custom Team Portraits** - Professional AI-generated headshots
✅ **Layout Improvements** - Switched image/text placement as requested
✅ **Unique Images** - Replaced repeated images with custom ones
✅ **Production Ready** - Fully built and tested

The website is ready for local development and further customization!

