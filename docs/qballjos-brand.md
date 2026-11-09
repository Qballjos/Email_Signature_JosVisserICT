# Qballjos developer brand

Personal developer brand within Jos Visser ICT, hosted by the existing Cloudflare Pages static site.

## Page and assets

- `/qballjos.html` — responsive standalone brand kit page
- `/assets/qballjos-banner.png` — GitHub/social banner (2172 × 724), also used on the GitHub profile
- `/assets/qballjos-icon.svg` — scalable app/avatar icon
- `/assets/qballbot-laptop.png` — primary programmer mascot, used in the page hero
- `/assets/qballbot-thumb.png` — standing mascot with thumbs up
- `/assets/qballbot-wave.png` — greeting
- `/assets/qballbot-heart.png` — community appreciation
- `/assets/qballbot-cool.png` — sunglasses and crossed arms
- `/assets/qballbot-question.png` — debugging/thinking
- `/assets/qballbot-sleep.png` — resting with laptop
- `/assets/qballbot-code.png` — presenting code

The eight PNGs are detailed AI-generated raster illustrations with genuine alpha transparency. They are new artwork, not recovered exports from the earlier ChatGPT ZIP and not vector illustrations. Do not wrap them in SVG and describe them as vectors. The earlier simplified SVGs remain available at their existing URLs for compatibility; this page uses the PNG replacements.

## Character direction

QballBot is a playful, slightly stubborn programmer and self-hosting developer. His charcoal zip hoodie, swept-back brown helmet crest and sculpted beard trim personalize the original white/slate robot and orange headset. His dark visor and warm orange eyes keep him recognizably robotic. The laptop and code tablet emphasize programming rather than an inventor theme.

The supplied portrait was used as a private visual reference; it is not distributed with the public brand assets. Generated poses can have small variations in detailing.

Palette: orange `#ea8b39`, dark `#0f0f0f`, slate `#344453`, off-white `#f5f5f5`.

Tagline: **Self-hosted. AI-assisted. Questionably stable.**

## Deployment

Files live inside `cloudflare-pages/`, the existing static output directory. The existing Cloudflare Pages Git integration deploys changes merged into `main` according to its configuration.

## Verification

1. Serve `cloudflare-pages/` as the web root and open `/qballjos.html`.
2. Check 320px, 375px, 768px and desktop viewports for horizontal overflow and text wrapping.
3. Confirm all images load and mascot download links return PNG files.
4. Confirm alpha transparency, including on the light logo tile and dark page panels.
5. Check keyboard focus and reduced-motion preference.
6. Confirm the Cloudflare Pages preview deployment before merging, and verify the published page afterward.
