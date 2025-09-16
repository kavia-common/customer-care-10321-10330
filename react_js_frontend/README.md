# Ocean Professional React Frontend

A lightweight React SPA implementing the "Ocean Professional" design with a single-page layout (header, main grid, footer).

## Run

- npm start
- npm run build
- npm test

## Theming

Edit `src/theme.css` for color palette, radii, shadows, and layout primitives.

Key variables:
- --primary: #2563EB
- --secondary: #F59E0B
- --error: #EF4444
- --bg: #f9fafb
- --surface: #ffffff
- --text: #111827

## Structure

- src/components (Header, Footer, ProductCard, icons)
- src/pages/Home.js
- src/theme.css (global theme + layout)
- src/App.js (app shell)
- src/index.css (fonts and base)

See DESIGN_NOTES.md for mapping from the provided static HTML/CSS/JS to components.
