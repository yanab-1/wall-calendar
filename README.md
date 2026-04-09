# 🗓️ Wall Calendar

A physical wall calendar built with React + Vite. Features a hero photo per month, date-range selection with hover preview, Indian public holidays, and auto-saving notes.

---

## Why these choices?

| Choice | Reason |
|---|---|
| **React + Vite** | Fast dev server, minimal config, instant HMR |
| **No external UI library** | Zero dependencies beyond React — keeps the bundle tiny and styling fully custom |
| **Custom `useRangeSelection` hook** | Isolates date logic from rendering; easy to test or swap out |
| **`localStorage` for notes** | No backend needed — notes survive page refresh without any server |
| **Unsplash URLs** | Free, no-download hero images; no assets to manage |
| **CSS-only spiral binding** | Pure decorative element, no SVG or image file required |
| **Monday-first grid** | Standard outside the US; aligns with most international calendars |

---

## Project structure

```
wall-calendar/
├── src/
│   ├── data/
│   │   ├── holidays.js        # Indian public holidays keyed by YYYY-MM-DD
│   │   └── monthImages.js     # One Unsplash photo URL per month
│   ├── hooks/
│   │   └── useRangeSelection.js  # Click-to-select date range logic
│   ├── components/
│   │   ├── CalendarHeader.jsx    # Spiral + month/year nav bar
│   │   ├── HeroImage.jsx         # Full-width monthly photo
│   │   ├── CalendarGrid.jsx      # 7-column date grid
│   │   ├── DayCell.jsx           # Single day square with state classes
│   │   └── NotesPanel.jsx        # Textarea with localStorage persistence
│   ├── App.jsx                   # Root component — wires everything together
│   └── App.css                   # All styles (layout, colours, responsive)
```

---

## Run locally

**Prerequisites:** Node.js 18 or later

```bash
# 1. Clone or unzip the project
cd wall-calendar

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open **http://localhost:5173** in your browser.

---

## Build for production

```bash
npm run build
```

The output lands in `dist/`. Drag that folder to [vercel.com](https://vercel.com) for a free live URL.

---

## Customising

- **Add/change holidays** → edit `src/data/holidays.js` (key format: `"YYYY-MM-DD"`)
- **Swap hero photos** → edit `src/data/monthImages.js` with any image URL
- **Change accent colour** → find `#1565c0` in `App.css` and replace globally