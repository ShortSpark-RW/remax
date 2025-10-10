# REMAX Technologies Real Estate Website

A modern, responsive real estate website built with React, Vite, Tailwind CSS, Framer Motion, and Yup-Formik validation.

## Features

- 🏠 **Modern Design**: Clean and professional real estate website design
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- 🎭 **Framer Motion**: Smooth animations and transitions throughout the app
- ✅ **Form Validation**: Comprehensive form validation using Yup and Formik
- 🗺️ **Interactive Elements**: Property cards, agent profiles, and search functionality
- 🎯 **SEO Ready**: Properly structured components for search engine optimization

## Pages

1. **Home Page**: Complete landing page with hero section, property listings, featured properties, agents, testimonials, and more
2. **List Layout**: Property listing page with advanced filters, map integration, and sidebar components

## Components

- **Header**: Navigation with logo, menu items, and contact information
- **Footer**: Contact info, quick links, newsletter subscription, and social media
- **PropertyCard**: Reusable property listing cards with images, details, and actions
- **AgentCard**: Agent profile cards with contact information and social links
- **SearchForm**: Advanced search form with validation
- **ContactForm**: Contact form with validation and terms agreement

## Technologies Used

- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **Formik**: Form handling library
- **Yup**: Schema validation library
- **React Router**: Client-side routing
- **Lucide React**: Beautiful icon library

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   ├── PropertyCard.jsx # Property listing cards
│   ├── AgentCard.jsx   # Agent profile cards
│   ├── SearchForm.jsx  # Property search form
│   └── ContactForm.jsx # Contact form
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   └── ListLayout.jsx  # Property listing page
├── data/               # Sample data
│   └── sampleData.js   # Mock data for properties, agents, etc.
├── utils/              # Utility functions
│   └── validationSchemas.js # Form validation schemas
├── assets/             # Static assets
│   └── logo.svg        # EMAX Technologies logo
└── App.jsx             # Main app component
```

## Form Validation

All forms in the application use Yup schemas for validation:

- **Contact Form**: Name, email, phone validation with terms agreement
- **Search Form**: Property search with location, type, and status validation
- **Newsletter Form**: Email validation for newsletter subscription

## Animations

The application uses Framer Motion for smooth animations:

- Page transitions and loading animations
- Hover effects on cards and buttons
- Staggered animations for lists and grids
- Interactive button and form animations

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary: Teal shades (600, 700, etc.)
- Secondary: Orange shades (500, 600, etc.)
- Neutral: Gray shades for text and backgrounds

### Content
Update the sample data in `src/data/sampleData.js` to customize:
- Property listings
- Agent profiles
- Property types
- Testimonials
- News articles

## Deployment

1. **Build for production**:
   ```bash
   npm run build
   ```

2. **Preview production build**:
   ```bash
   npm run preview
   ```

3. **Deploy** the `dist` folder to your preferred hosting service (Vercel, Netlify, etc.)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for EMAX Technologies. All rights reserved.

---

Built with ❤️ using modern web technologies.