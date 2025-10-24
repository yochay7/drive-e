# Drive-E 🚗⚡

A comprehensive electric vehicle comparison and review portal built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🌍 **Multi-language Support**: English, Spanish, French, German, and Chinese
- 🌙 **Dark Mode**: Full dark mode support with seamless switching
- 🎨 **Clean Blue Design**: Professional automotive-focused design
- 🔍 **Advanced Search & Filters**: Filter by brand, price, range, seats, and drivetrain
- 📊 **Vehicle Comparison**: Compare up to 3 vehicles side-by-side
- ⭐ **Ratings & Reviews**: See ratings and reviews for each vehicle
- 📱 **Responsive Design**: Works perfectly on all devices
- ⚡ **25+ EV Models**: Comprehensive database of current electric vehicles

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Theme Management**: next-themes
- **UI Components**: Headless UI
- **Icons**: Heroicons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd drive-e
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
drive-e/
├── app/                      # Next.js app directory
│   ├── [locale]/            # Locale-specific pages
│   │   ├── page.tsx         # Homepage
│   │   ├── vehicles/        # Vehicle listing and details
│   │   ├── compare/         # Comparison tool
│   │   └── brands/          # Brands page
│   ├── globals.css          # Global styles
│   └── layout.tsx           # Root layout
├── components/              # React components
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer
│   ├── EVCard.tsx           # Vehicle card component
│   ├── ThemeProvider.tsx    # Theme context provider
│   ├── ThemeToggle.tsx      # Dark mode toggle
│   └── LanguageSelector.tsx # Language switcher
├── data/                    # Data files
│   └── evs.ts              # EV database
├── messages/               # Translation files
│   ├── en.json            # English
│   ├── es.json            # Spanish
│   ├── fr.json            # French
│   ├── de.json            # German
│   └── zh.json            # Chinese
├── types/                 # TypeScript types
│   └── ev.ts             # EV model types
├── i18n.ts               # Internationalization config
└── middleware.ts         # Next.js middleware

```

## Features Overview

### Homepage
- Hero section with call-to-action
- Statistics dashboard
- Featured electric vehicles
- Responsive design with animations

### Vehicle Listing
- Browse all electric vehicles
- Advanced filtering by:
  - Brand
  - Price range
  - Minimum range
  - Number of seats
  - Drivetrain type
- Search functionality
- Multiple sorting options

### Vehicle Details
- Comprehensive specifications
- Battery and range information
- Performance metrics
- Charging capabilities
- Safety ratings and features
- High-quality images
- Availability status

### Comparison Tool
- Compare up to 3 vehicles side-by-side
- Detailed specification comparison
- Easy-to-read comparison table
- Quick access to vehicle details

### Brands Page
- Browse vehicles by manufacturer
- Statistics for each brand
- Quick access to brand vehicles

## Internationalization

The site supports 5 languages:
- 🇺🇸 English (en)
- 🇪🇸 Spanish (es)
- 🇫🇷 French (fr)
- 🇩🇪 German (de)
- 🇨🇳 Chinese (zh)

Language can be switched using the language selector in the header.

## Dark Mode

Toggle between light and dark themes using the moon/sun icon in the header. Theme preference is saved and persists across sessions.

## Color Palette

The site uses a professional blue color scale:
- Primary: Various shades from primary-50 to primary-950 (blue tones)
- Accent colors for CTAs and highlights
- Clean, automotive-focused design
- Optimized for both light and dark modes

## Database

The EV database includes 25 current models from major manufacturers:
- Tesla (Model 3, Y, S, X)
- Ford (Mustang Mach-E, F-150 Lightning)
- Chevrolet (Bolt EV, Bolt EUV)
- Hyundai (IONIQ 5, IONIQ 6)
- Kia (EV6, EV9)
- Rivian (R1T, R1S)
- BMW (i4, iX)
- Mercedes-Benz (EQS, EQE)
- Audi (e-tron GT, Q4 e-tron)
- Porsche (Taycan)
- Volkswagen (ID.4)
- Nissan (Ariya)
- Polestar (Polestar 2)
- Lucid (Air)

Each vehicle includes:
- Complete specifications
- Pricing information
- Battery and range data
- Performance metrics
- Charging capabilities
- Safety ratings
- Features list
- High-quality images

## Building for Production

```bash
npm run build
npm start
```

## Development

```bash
# Run development server
npm run dev

# Run linting
npm run lint

# Build for production
npm run build
```

## Security

- No user authentication (currently)
- All data is static
- No external API calls
- Safe for public deployment
- XSS protection via React
- CSRF protection via Next.js

## Performance

- Server-side rendering (SSR)
- Static generation where possible
- Image optimization with Next.js Image
- Code splitting
- Lazy loading
- Optimized bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Electric vehicle data sourced from manufacturer specifications
- Images from Unsplash
- Icons from Heroicons
- Built with Next.js and React

## Contact

For questions or feedback, please open an issue on GitHub.

---

Built with ❤️ for the electric vehicle community.

