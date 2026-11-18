# MPBaptista Project

## Overview
A personal landing page for Miguel Baptista. A single static HTML page with an about section, contact links, and a projects section.

## Project Structure
```
MPBaptista/
├── index.html    — Main page markup and content
├── styles.css    — Styles (light and dark themes)
├── theme.js      — Dark/light mode toggle (follows OS setting)
└── images/       — Project preview images
```

## Key Features
- Single static HTML page (no build step)
- Light and dark theme support
- OS-based theme detection (follows system preference)
- About section with biographical information
- Contact links (social media, email, etc.)
- Projects section showcasing work

## Important Conventions
- Pure HTML/CSS/JavaScript (no frameworks)
- CSS color tokens defined at the top of styles.css
- Theme.js handles dark/light mode switching
- Images are used as project previews
- Content is typed manually in index.html (no CMS)
- Last updated date is manually typed in index.html

## Dependencies
- None — runs directly in browser
- No build step required

## Common Tasks
- Updating text, contact links, and project cards in `index.html`
- Adjusting color tokens in `styles.css`
- Adding/removing project previews
- Theme behavior adjustments

## Notes
- The site is intentionally simple and static
- Manual content updates are preferred for simplicity
- The footer's "Last updated" date is maintained manually
- Light and dark themes are supported with OS preference detection
- The design is clean and minimal