# Sparky's Scoops — Website

A single-page static website for **Sparky's Scoops**, a residential dog waste removal service. Hosted via GitHub Pages at `iamacomputai.github.io`.

## File structure

```
/
├── index.html              # Main page (all sections)
├── styles.css              # All styles — mobile-first, CSS custom properties
├── script.js               # Minimal vanilla JS (nav, scroll, animations)
├── sparkys-scoops-logo.jpg # Logo — referenced in header, hero, and footer
└── README.md               # This file
```

## How to edit content

All content is plain HTML in `index.html`. Search for the bracketed placeholders below and replace them with real values.

### Prices
Search for `$XX` in `index.html` — there are four instances (one per service plan). Replace with your actual prices.

### Service area
Search for `[Your City / Region]` and the four `[Neighborhood / ZIP code N]` placeholders in the **Service Area** section.

### Contact details
- **Email:** Replace `hello@sparkysscoops.com` (appears in the form `action` attribute and the contact sidebar link).
- **Phone:** Replace `(555) 000-0000` and `+15550000000` (the `href` value) — there are two visible instances.
- **Hours:** Find the `Mon – Fri` / `Sat` text in the contact info sidebar.

### Social links
In the footer, find the three `<a href="#">` social links and replace `#` with your actual profile URLs (Facebook, Instagram, Nextdoor or whichever platforms you use).

### Logo
Drop `sparkys-scoops-logo.jpg` in the repo root. The header nav, hero, and footer all reference it automatically.

### Favicon
The favicon is set to `sparkys-scoops-logo.jpg` via `<link rel="icon" href="sparkys-scoops-logo.jpg" type="image/jpeg">` in `<head>`. For best results, also add a square-cropped version at `favicon.ico` or a 512×512 `favicon.png` — most browsers will prefer those.

## Deployment

This repo is configured for GitHub Pages. Pushing to `main` auto-deploys to `https://iamacomputai.github.io`. No build step required.

## Design tokens

Key CSS custom properties in `styles.css` (`:root` block):

| Variable       | Value     | Use                       |
|----------------|-----------|---------------------------|
| `--blue`       | `#1E40AF` | Primary brand color       |
| `--gold`       | `#C9A84C` | CTA button / accent color |
| `--cream`      | `#FDF8F0` | Alternate section bg      |
| `--font`       | Poppins   | Body & headings           |

## Accessibility

- Semantic HTML5 elements throughout (`header`, `main`, `section`, `footer`, `article`, `nav`)
- `aria-label` on all interactive controls and landmark regions
- `alt` text on all images
- Keyboard-navigable mobile menu with `aria-expanded` state
- `prefers-reduced-motion` media query disables animations
- Sufficient color contrast throughout (blue on white / white on blue)
