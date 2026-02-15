# 🎉 Hare Rama Events - Professional Event Management Platform

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://hare-rama-events.vercel.app)
[![Built with Vite](https://img.shields.io/badge/built%20with-Vite-646CFF?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://react.dev/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?logo=supabase)](https://supabase.com/)
[![Deployed on Vercel](https://img.shields.io/badge/deployed%20on-Vercel-000000?logo=vercel)](https://vercel.com/)

> A production-grade, full-featured event management website delivering fast, responsive user experiences with modern UI/UX design.

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Services Offered](#-services-offered)
- [Project Highlights](#-project-highlights)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Project Structure](#-project-structure)
- [Performance Optimizations](#-performance-optimizations)
- [Development Tools](#-development-tools)
- [Contact](#-contact)

---

## 🎯 About the Project

**Hare Rama Events** is a comprehensive event management platform designed to showcase professional DJ and event production services. The website serves as a complete digital presence for a full-scale event production company, featuring:

- **Complete Event Management** - End-to-end event planning and execution
- **Professional DJ Services** - High-quality audio, lighting, and effects
- **Premium Equipment Rentals** - LED dance floors, screens, stages, tents, and furniture
- **Custom Decorations** - Tailored décor for weddings, birthdays, corporate events, and more
- **Special Effects** - Cold sparklers, fog machines, laser shows, and more

This project was developed as a **production-ready solution** with a focus on performance, user experience, and modern web development practices.

---

## ✨ Key Features

### 🎨 Modern UI/UX Design
- **Glassmorphism Effects** - Premium frosted glass aesthetic throughout
- **Smooth Animations** - Scroll-triggered animations and micro-interactions
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **Dark Theme** - Elegant dark mode with vibrant accent colors
- **Interactive Components** - Dynamic service modals, image galleries, and contact forms

### ⚡ Performance Optimized
- **Code Splitting** - Lazy loading for below-fold components
- **Image Optimization** - Optimized image loading with lazy loading
- **Bundle Optimization** - Manual chunk splitting for vendor libraries
- **Fast Load Times** - Vite's lightning-fast HMR and build process
- **Production Minification** - Terser minification with console removal

### 🔐 Backend Integration
- **Supabase Authentication** - Secure user authentication system
- **Real-time Database** - Live data management with Supabase
- **Contact Form Integration** - Direct inquiry submission to database
- **Data Persistence** - Reliable data storage and retrieval

### 📱 User Experience
- **Smooth Navigation** - Sticky navbar with smooth scroll anchors
- **Service Showcase** - Interactive service cards with detailed modals
- **Video Integration** - Auto-playing promotional videos with controls
- **Gallery Section** - Beautiful image gallery for event showcases
- **Contact Section** - Easy-to-use contact form with validation

---

## 🛠️ Tech Stack

### Frontend
- **[React 19.2.0](https://react.dev/)** - Modern UI library with latest features
- **[Vite 7.2.4](https://vitejs.dev/)** - Next-generation frontend build tool
- **JavaScript (ES6+)** - Modern JavaScript with ES modules
- **CSS3** - Custom CSS with CSS variables and animations

### Backend & Services
- **[Supabase](https://supabase.com/)** - Backend-as-a-Service for authentication and database
- **Real-time Database** - PostgreSQL with real-time subscriptions

### Development Tools
- **ESLint** - Code quality and consistency
- **Terser** - Production code minification
- **Git** - Version control

### Deployment & Hosting
- **[Vercel](https://vercel.com/)** - Serverless deployment platform
- **CI/CD** - Automatic deployments on push
- **CDN** - Global content delivery network

---

## 🎪 Services Offered

The platform showcases the following professional event services:

### 1. **Complete Event Management**
Full-service planning and production including venue selection, decorations, staging, catering, photography, videography, and more.

### 2. **DJ Services**
Professional audio equipment including:
- QSC K.2 Speakers
- Chauvet Gigabar lighting
- Shure Wireless Microphones
- Pioneer DJ Controllers
- EV & ALTO Bass Speakers

### 3. **3D Mirror Starlit Dance Floor**
Stunning RGB starlit effects with customizable sizes (10x10 to 24x24 feet)

### 4. **LED Screens**
Ultra 4K HD displays for presentations, branding, and live feeds

### 5. **Stage Setup**
Modular platforms with 1ft or 2ft height options

### 6. **Commercial Tents**
Weather-resistant tents in various sizes (10x10, 10x20, custom)

### 7. **Custom Decorations**
Tailored décor for birthdays, weddings, corporate events, and themed parties

### 8. **Special Effects**
- Cold sparklers (indoor-safe)
- Dry ice & fog effects
- Laser light shows

### 9. **Party Rentals**
Complete furniture and equipment rentals including chairs, tables, lighting, heaters, and more

---

## 🏆 Project Highlights

### Development Approach
- **AI-Assisted Development** - Leveraged Bolt AI and Cursor (Antigravity) for rapid development
- **Code Refactoring** - Continuous improvement and optimization
- **Component Architecture** - Modular, reusable React components
- **Performance First** - Optimized for speed and user experience

### Technical Achievements
- ✅ **Production-Grade Code** - Clean, maintainable, and scalable
- ✅ **Modern Build Pipeline** - Vite with optimized production builds
- ✅ **SEO Optimized** - Proper meta tags and semantic HTML
- ✅ **Accessibility** - ARIA labels and keyboard navigation
- ✅ **Cross-Browser Compatible** - Tested across major browsers

### Statistics
- **6,000+ Happy Clients**
- **4.9/5 Client Rating**
- **8+ Years Experience**
- **2000+ Events/Year**

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/BhaskarTheCoder/hare-rama-events.git
   cd hare-rama-events
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🌐 Deployment

This project is deployed on **Vercel** with automatic CI/CD:

1. **Push to GitHub** - Code changes trigger automatic builds
2. **Vercel Build** - Optimized production build
3. **Deploy** - Instant deployment to global CDN
4. **Live URL** - [hare-rama-events.vercel.app](https://hareramaevents.com/)

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/BhaskarTheCoder/hare-rama-events)

---

## 📁 Project Structure

```
hare-rama-events/
├── public/                 # Static assets
│   ├── assets/            # Images, videos, and media
│   └── vite.ico           # Favicon
├── src/
│   ├── components/        # React components
│   │   ├── About/         # About section
│   │   ├── Contact/       # Contact section
│   │   ├── Footer/        # Footer component
│   │   ├── Gallery/       # Image gallery
│   │   ├── Hero/          # Hero section
│   │   ├── Navbar/        # Navigation bar
│   │   ├── Services/      # Services showcase
│   │   └── ...            # Other components
│   ├── data/              # Data files
│   │   └── services.js    # Services data
│   ├── lib/               # Utility libraries
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── .gitignore             # Git ignore rules
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML template
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

---

## ⚡ Performance Optimizations

### Code Splitting
- **Lazy Loading** - Below-fold components loaded on demand
- **Manual Chunks** - Vendor libraries separated for better caching
- **Suspense Boundaries** - Smooth loading states

### Build Optimizations
- **Terser Minification** - Aggressive code compression
- **Console Removal** - Production builds remove console logs
- **CSS Minification** - Optimized stylesheets
- **Tree Shaking** - Unused code elimination

### Runtime Optimizations
- **Intersection Observer** - Scroll-triggered animations
- **Image Lazy Loading** - Images load as they enter viewport
- **Video Optimization** - Compressed video files with lazy loading

---

## 🔧 Development Tools

### AI-Assisted Development
This project leveraged cutting-edge AI tools:
- **Bolt AI** - Rapid prototyping and component generation
- **Cursor (Antigravity)** - Code refactoring and optimization
- **AI-Powered Suggestions** - Enhanced UI/UX implementation

### Code Quality
- **ESLint** - Enforces code standards
- **React Hooks Linting** - Best practices for hooks
- **React Refresh** - Fast refresh during development

---

## 📞 Contact

**Project Lead / Developer**  
Uday Bhaskar Valapadasu

**Project Repository**  
[github.com/BhaskarTheCoder/hare-rama-events](https://github.com/BhaskarTheCoder/hare-rama-events)

**Live Website**  
[hare-rama-events.vercel.app](https://hare-rama-events.vercel.app)

---

## 📄 License

This project is developed for **Hare Rama Events** - Professional DJ & Event Production House.

---

## 🙏 Acknowledgments

- **Vite Team** - For the amazing build tool
- **React Team** - For the powerful UI library
- **Supabase** - For the backend infrastructure
- **Vercel** - For seamless deployment
- **AI Tools** - Bolt AI and Cursor for development acceleration

---

<div align="center">

**Made with ❤️ using React, Vite, and AI-Assisted Development**

⭐ Star this repo if you find it helpful!

</div>
