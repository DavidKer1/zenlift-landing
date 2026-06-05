# add-playstore-privacy-placeholder

## Why

Zenlift needs a privacy policy page for Google Play. The final policy text is not ready yet, but the route should exist and be linked discreetly from the footer.

## What Changes

- Add `app/privacy/page.tsx` as a minimal route shell.
- Link `/privacy` from the footer.
- Keep the route intentionally blank/prepared for future policy content.
- Keep privacy out of the homepage feature narrative.

## Non-Goals

- No final legal policy text.
- No privacy feature section on the homepage.
- No analytics, forms, or data collection.
