# Locomotive Scroll Starter

A minimal HTML5 boilerplate wired with Google Fonts (Poppins), Font Awesome, and Locomotive Scroll via CDN. Includes a basic scroll container and demo sections.

## What's inside

- `index.html` — HTML5 skeleton with CDN links
- `css/style.css` — Base styles and section layout
- `js/main.js` — Locomotive Scroll initialization and simple anchor scrolling

## Quick start

Just open `index.html` directly in your browser.

If you run a local server (recommended for future assets):

```powershell
# From the project root
python -m http.server 5500
# or with Node
npx serve -l 5500
```

Then visit: http://localhost:5500/

## Notes

- Scroll container uses `[data-scroll-container]` as required by Locomotive Scroll.
- Demo includes elements with different `data-scroll-speed` to visualize smooth effects.
- The `window.__loco` object is exposed for quick debugging in DevTools.
