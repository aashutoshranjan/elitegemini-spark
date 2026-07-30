# Elitegemini Innovations

Build a world-class, ultra-premium 5-page IT enterprise website for "Elitegemini Innovations", a leading technology & AI development agency based in Bangalore, India.

--- DESIGN SYSTEM & GLASSMORPHISM AESTHETIC ---

- Theme & Dark/Light Mode: Default to a Deep Space Dark Theme (`#090D16` to `#0F172A`) with floating ambient gradient orbs (`#00F2FE`, `#7F00FF`, `#3B82F6`) behind frosted glass panels. Provide a fully functional Light Mode option featuring soft light-gray glass cards, frosted white backgrounds, subtle border highlights, and crisp high-contrast dark slate text.

- Glassmorphism Styling: Semi-transparent cards (`bg-white/5` or `bg-slate-900/40` in dark; `bg-white/60` in light), heavy backdrop blur (`backdrop-blur-xl`), thin subtle border rings (`border border-white/10`), soft inner glows, and interactive hover-lift effects.

- Typography: Clean modern sans-serif (Inter / Plus Jakarta Sans) with gradient headings.

- Header & Navigation: 

  * Sticky Glassmorphic Header/Navbar with logo "Elitegemini Innovations" (featuring a glowing gem icon), page navigation links, and a primary glowing CTA button ("Get in Touch").

  * Theme Toggle Button: Include a sleek, functional Light/Dark Mode toggle icon button (Sun/Moon icon) inside the right side of the navbar that switches the entire site's theme smoothly with CSS transition effects.

- Footer: Multi-column footer with Bangalore address, dynamic quick links, social icons, theme status indicator, and newsletter signup.

--- SITE ARCHITECTURE & 5 FULL PAGES (React Router) ---

1. HOME PAGE (`/`):

   - Hero Section: High-impact headline ("Architecting Tomorrow’s Intelligence, Today"), subtext ("Bangalore’s Premier Custom AI, Cloud & Enterprise Software Innovation Hub"), two CTAs ("Explore Solutions" [primary glowing], "Schedule Consultation" [glass outline]), and key metrics counter (99.8% Uptime, 150+ Enterprise Apps, $500M+ Value Created).

   - Core Expertise Grid: 4 Glassmorphism cards with icons for Enterprise AI & ML, Cloud Native Engineering, Next-Gen Web/Mobile Apps, and Cyber Resilience.

   - Live Interactive Widget: An interactive "ROI / AI Tech Assessment Calculator" where users select their industry and scale to estimate transformation efficiency.

   - Enterprise Trust Showcase: Client logo carousel ticker, client testimonials in glass cards, and a sleek interactive CTA banner.

2. ABOUT US (`/about`):

   - Vision & Mission Hero: Story of Elitegemini Innovations from the Silicon Valley of India (Bangalore) to a global tech leader.

   - Core Pillars: Innovation, Precision, Scalability, and Security presented in interactive glass step-cards.

   - Executive Leadership Grid: Team cards with hover blur effects, roles, and LinkedIn links.

   - Bangalore Innovation Lab: Highlight of the R&D center in Bangalore with tech stack highlights (AWS, Azure, PyTorch, React, Kubernetes).

3. SERVICES (`/services`):

   - Services Accordion & Filterable Grid: Detailed breakdowns for:

     * Custom AI & Generative AI Solutions

     * Cloud Transformation & DevOps

     * Web & Mobile Platform Engineering

     * Enterprise Modernization & Security

   - Technology Stack Explorer: Interactive tabbed view showing Frontend, Backend, AI/ML, Cloud & DevOps frameworks.

   - Process Workflow: 4-Step Engagement Model (Discover -> Architect -> Execute -> Scale).

4. CASE STUDIES & PORTFOLIO (`/case-studies`):

   - Interactive Portfolio Grid with Filter Tabs (All, FinTech, Healthcare, AI/SaaS, E-Commerce).

   - 3 Detailed Case Study Cards with problem statement, glassmorphic solution architecture diagram mockup, key metrics achieved (+300% efficiency, 45ms latency), and "Read Full Story" modal/drawer.

5. CONTACT & BOOKING (`/contact`):

   - Interactive Glass Contact Form: Name, Business Email, Phone, Service Interested In, Budget Range, Message, and File Upload attachment field with validation state.

   - Bangalore Headquarters Details: Office Address ("Indiranagar / Tech Park, Bangalore, Karnataka, India"), direct contact info, interactive Google Maps placeholder iframe embed, and calendar booking integration widget mockup (Calendly type).

--- CONSTRAINTS & CODE QUALITY ---

- Persistent theme state (using standard React state/Tailwind `dark` class toggling).

- Fully responsive across Mobile, Tablet, and Desktop.

- Smooth page transitions and hover effects (Framer Motion / Lucide React icons / Tailwind CSS).

- Clean modular components with full React Router DOM setup.

Address is K39/7, Mahatma Gandhi Rd, behind Oriental Bank of Commerce, Craig Park Layout, Ashok Nagar, Bengaluru, Karnataka 560001

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://elitegemini-spark.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/57eb932e-b6cd-46af-92fa-f17d656d2d64).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
