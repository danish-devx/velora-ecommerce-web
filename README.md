# VELORA

### Premium fashion, thoughtfully presented.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20VELORA-111111?style=for-the-badge&logo=vercel&logoColor=white)](https://velora-ecommerce-self.vercel.app/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=111111)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Supabase](https://img.shields.io/badge/Auth-Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=111111)](https://supabase.com/)
[![GSAP](https://img.shields.io/badge/Motion-GSAP-88CE02?style=flat-square&logo=greensock&logoColor=111111)](https://gsap.com/)

VELORA is a modern fashion and essentials storefront built around a premium editorial experience. It combines a dark, typographic visual language with authenticated access, curated collections, dynamic product discovery, motion-led storytelling, and responsive layouts.

## Live Experience

**[Open the deployed website](https://velora-ecommerce-self.vercel.app/)**

The application starts with a member access screen. Visitors can sign in or create an account through Supabase Authentication before entering the storefront experience.

## Highlights

- Premium member sign-in and account creation flow
- Session-aware application shell powered by Supabase Auth
- Editorial hero section with collection navigation
- Curated featured collections and product spotlight sections
- Dynamic product catalogue powered by the DummyJSON API
- Product filtering across all products, men's shirts, women's dresses, and men's shoes
- Loading, empty/error, and retry states for remote product data
- Animated interactions and scroll reveals using GSAP and Lenis
- Testimonials, brand story, contact, and newsletter sections
- Responsive, component-driven React architecture

## Tech Stack

| Area | Technology |
| --- | --- |
| UI | React 19 |
| Build tool | Vite 8 |
| Styling | CSS and Tailwind CSS tooling |
| Authentication | Supabase Auth |
| Product data | DummyJSON REST API |
| Motion | GSAP and Lenis |
| Code quality | ESLint |
| Deployment | Vercel |

## Project Structure

```text
src/
├── components/
│   ├── About/
│   ├── Contact/
│   ├── FeaturedCollection/
│   ├── Hero/
│   ├── Login/
│   ├── Navbar/
│   ├── Newsletter/
│   ├── Products/
│   ├── ProductSpotlight/
│   ├── Testimonials/
│   ├── Trending/
│   └── WhyVelora/
├── lib/
│   └── supabase.js
├── App.jsx
├── App.css
└── index.css
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- A Supabase project configured for email/password authentication

### Installation

```bash
git clone <your-repository-url>
cd velora-website
npm install
```

### Run locally

```bash
npm run dev
```

Vite will provide a local development URL in the terminal.

### Production build

```bash
npm run build
npm run preview
```

### Quality checks

```bash
npm run lint
```

## Authentication

Authentication is handled in `src/lib/supabase.js` and consumed by the login flow and application shell. The app checks the current session on startup, listens for auth state changes, and renders the storefront only for an authenticated user.

For a production deployment, keep Supabase configuration in environment variables and configure the matching redirect URLs in the Supabase dashboard.

## Product Data

The catalogue uses the public [DummyJSON Products API](https://dummyjson.com/docs/products). Product requests are made when the selected category changes, with dedicated loading and retry states to keep the shopping experience resilient when the API is unavailable.

## Deployment

The project is deployed on [Vercel](https://vercel.com/). A standard Vite deployment works with:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Install command:** `npm install`

## Design Direction

VELORA uses an editorial fashion direction: strong typography, restrained contrast, generous spacing, and motion that supports product discovery. The component structure keeps each section independently maintainable while the application shell centralizes authentication and session state.

## License

This project is intended for portfolio and demonstration purposes. Add a project-specific license before distributing it as an open-source package.
