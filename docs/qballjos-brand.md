# Qballjos developer brand

Developer brand within Jos Visser ICT, hosted by the existing Cloudflare Pages static site.

## Page and assets

- `/qballjos.html` — responsive standalone brand kit page
- `/assets/qballjos-icon.svg` — scalable app/avatar icon
- `/assets/qballjos-mascot.svg` — scalable mascot illustration

Palette: orange `#ea8b39`, dark `#0f0f0f`, slate `#344453`, off-white `#f5f5f5`.

Tagline: **Self-hosted. AI-assisted. Questionably stable.**

## Deployment

Files live inside `cloudflare-pages/`, the existing static output directory. No changes to Cloudflare Pages settings, deployment configuration, email signature markup, legal pages or existing assets are needed. Merge into `main` only after review; the existing Cloudflare Pages Git integration will deploy it according to its current configuration.

## Manual verification checklist

1. Open `cloudflare-pages/qballjos.html` with a local HTTP server rooted at `cloudflare-pages/`.
2. Check 320px, 375px, 768px and desktop viewports for horizontal overflow and text wrapping.
3. Check both SVG images load, and download links return SVG files.
4. Verify keyboard focus, readable contrast and reduced-motion preference.
5. Verify the existing brand kit, signature copy actions, NL/EN privacy and terms pages, and 404 page are unchanged.
6. Confirm the Cloudflare Pages preview deployment before merging.

SVGs are simple original vector assets and may differ from previous concept artwork.
