# ZOKU ARCHIVE (族アーカイブ)
### Japanese Motorcycle Cultures Visual Archive

A minimalist, photographic editorial web archive documenting the machines, aesthetics, and cultural anthropology of Japanese motorcycle subcultures.

Built with **React 18 / 19**, **TypeScript**, **Tailwind CSS**, and **React Router DOM**.

---

## Design Philosophy

- **Minimalist & Editorial**: Inspired by vintage Japanese motorcycle periodicals (*Young Machine*, *AutoBy*) and mono-issue photography monographs.
- **Deep Charcoal & Near-Black**: Avoids generic neon/cyberpunk cliches in favor of authentic Japanese lacquer tones, near-black surfaces (`#08080a`), and restrained crimson accents (`#b7282e`).
- **Mechanical & Photographic Truth**: Curated authentic specifications, historical chronologies, and verified academic references (e.g. Ikuya Sato's ethnographic fieldwork). No fabricated lore.
- **Generous Whitespace & Spaced Typography**: Desktop-first editorial layout with full responsive scaling down to mobile viewports.

---

## Route Structure

| Route | View | Description |
|---|---|---|
| `/` | `HomePage` | Cinematic night hero, cultures strip, featured motorcycle carousel, editorial mission |
| `/cultures` | `CulturesIndexPage` | Index of documented and upcoming subcultural chapters |
| `/cultures/bosozoku` | `BosozokuPage` | Primary deep-dive: Machines, Modifications, Origins, Culture, Decline, Sources |
| `/cultures/:id` | `CultureComingSoonPage` | Reusable holding state for *Hashiriya*, *Kaminari-zoku*, and *Racing* |
| `/motorcycles` | `MotorcyclesPage` | Filterable archive by Culture, Manufacturer, and Production Era |
| `/motorcycles/:id` | `MotorcycleDetailPage` | Two-column magazine spread: Historical narrative, factory specs, cultural connection |
| `/modifications` | `ModificationsPage` | Visual taxonomy of Japanese custom styling with deep-dive modal |
| `/about` | `AboutPage` | Curatorial manifesto, research methodology, and master bibliography |

---

## Development & Build

### Running Locally
```bash
# Start development server
npm run dev

# Or start the production preview
npm run build
npm run preview
```

### Production Build
```bash
npm run build
```
Build output is generated into `/dist`.

---

## Project Structure

```
src/
├── components/
│   ├── culture/
│   │   ├── CultureItem.tsx        # Culture entry block (available & coming soon states)
│   │   └── ComingSoon.tsx         # Reusable holding view for unreleased chapters
│   ├── layout/
│   │   ├── Navbar.tsx             # Minimal sticky nav with red indicator & search trigger
│   │   ├── Footer.tsx             # Editorial footer with brand & poetic Japanese text
│   │   └── Layout.tsx             # App wrapper with scroll-to-top & Ctrl+K search handler
│   ├── modification/
│   │   ├── ModificationCard.tsx   # Photographic card for custom categories
│   │   └── ModificationModal.tsx  # Mechanical function vs cultural significance modal
│   ├── motorcycle/
│   │   ├── MotorcycleCard.tsx     # Clean catalog entry card
│   │   ├── MotorcycleGrid.tsx     # 2, 3, or 4 column responsive grid
│   │   └── MotorcycleSpecs.tsx    # Technical data table
│   └── ui/
│       ├── SectionHeader.tsx      # Editorial eyebrow and title component
│       ├── SearchModal.tsx        # Full-text instant search across all archives
│       └── SourceList.tsx         # Academic & journalistic bibliography list
├── data/
│   ├── cultures.ts                # Cultural chapters data
│   ├── motorcycles.ts             # Canonical machines & factory specs
│   ├── modifications.ts           # 8 custom categories taxonomy
│   └── sources.ts                 # Master source bibliography
├── pages/                         # Route page views
├── types/                         # Central TypeScript domain interfaces
├── App.tsx                        # Declarative React Router configuration
├── main.tsx                       # React application entrypoint
└── index.css                      # Tailwind base & custom typography tokens
```
