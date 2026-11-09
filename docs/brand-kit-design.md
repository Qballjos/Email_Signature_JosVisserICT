# Brand Kit — Dark Studio Glass

The homepage uses the approved dark glass design with a personal branding introduction, cursor-following spotlight buttons, an accessible mail-client picker and numbered installation instructions.

## Assets

Existing brand images keep their published URLs. Client brand marks are served locally at `/assets/mail-apple.svg`, `/assets/mail-outlook.svg` and `/assets/mail-gmail.svg`.

Client marks originate from Simple Icons 11.15.0:

- https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/apple.svg
- https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/microsoftoutlook.svg
- https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/gmail.svg

## Behavior

The custom picker keeps the native select as a no-script fallback. Arrow keys, Home/End, Enter/Space, Escape, Tab and outside clicks support selecting and dismissing the menu. Choosing a client updates its installation instructions.

Spotlights follow pointer coordinates with requestAnimationFrame, skip touch input and honor reduced-motion preferences. Focus indicators remain visible. Existing copy and download handlers are retained.

The installation steps are carried over from the existing site; their compatibility with every current mail-client version has not been revalidated as part of this visual change.
