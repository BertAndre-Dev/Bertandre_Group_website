# BertAndre Group

Corporate website for **BertAndre Group** — a diversified holding company building purpose-driven ventures across consulting, real estate, energy, mobility, and technology.

## Tech stack

- **[Next.js 16](https://nextjs.org/)** (App Router) — React framework with server and client components
- **[React 19](https://react.dev/)** — UI library
- **[TypeScript](https://www.typescriptlang.org/)** — Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** — Styling
- **[Framer Motion](https://www.framer.com/motion/)** — Animations (e.g. Subsidiaries section)
- **[Swiper](https://swiperjs.com/)** — Hero banner slider
- **[Lucide React](https://lucide-react.dev/)** — Icons (navbar top bar)

## Prerequisites

- **Node.js** 18.18+ (or 20+)
- **npm** (or yarn / pnpm)

## Getting started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bertandre-group
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command        | Description                    |
|----------------|--------------------------------|
| `npm run dev`  | Start dev server (hot reload)  |
| `npm run build`| Production build              |
| `npm run start`| Run production server         |
| `npm run lint` | Run ESLint                    |

## Project structure

```
bertandre-group/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Home
│   ├── about/              # About Us
│   ├── subsidiaries/       # Subsidiaries
│   ├── portfolio/          # Portfolio
│   ├── projects/           # Projects
│   ├── contact/            # Contact Us
│   ├── not-found.tsx       # 404 page
│   └── globals.css         # Global styles
├── components/
│   ├── atom/               # Small reusable UI (Button, Pill, NavbarTop)
│   └── molecules/          # Section components (Navbar, HeroBanner, Footer, etc.)
├── public/
│   └── assets/             # Images, logos, SVGs
├── next.config.ts
├── package.json
└── tailwind.config.ts      # (if present)
```

## Main pages and features

- **Home** — Hero, category slider (Consulting, Energy, Smart Fleet, Real Estate), about snippet, statistics, subsidiaries grid, CTA
- **About Us** — Company story, mission, vision, values
- **Subsidiaries** — BertAndre Consulting, SAAIR Energy, Primquisite Real Estate, Autodate Smart Fleet (with external links)
- **Portfolio** — Portfolio items and project cards
- **Projects** — Project listings
- **Contact** — Contact form and contact cards (email, phone, address)
- **404** — Custom not-found page with “Go to home”

## Configuration

- **Images** — Next.js Image is used throughout. External image hosts are allowed in `next.config.ts` (e.g. `images.unsplash.com`, `placeholder.com`). Add other domains there if needed.
- **Fonts** — Geist Sans and Geist Mono are loaded via `next/font` in the root layout.

## Building for production

```bash
npm run build
npm run start
```

For static export (if configured), use the appropriate Next.js output option in `next.config.ts`.

## License

Private — BertAndre Group.
