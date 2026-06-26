# Trilogiks — Odoo ERP Website

Aesthetic, fully-responsive marketing site for Trilogiks (custom software & Odoo ERP services, US market). Built as a single self-contained Design Component.

## Files
- `Trilogiks Home.dc.html` — the full homepage (open directly in a browser)
- `support.js` — runtime required by the `.dc.html` file
- `assets/` — fonts, case-study images, avatars, client logos

## Run locally
Serve the folder over HTTP (the page loads `support.js` and assets via relative paths):

```bash
python3 -m http.server 8000
# then open http://localhost:8000/Trilogiks%20Home.dc.html
```

## Features
- Odoo-led positioning with interactive 7-service explorer
- Animated gradient hero with 3D tilt dashboard
- Scroll progress, active-section nav, count-up stats, cursor-spotlight cards
- Fully responsive (980px / 640px breakpoints) with mobile hamburger menu
- Tweakable theme, glow intensity, animation and aurora toggles
