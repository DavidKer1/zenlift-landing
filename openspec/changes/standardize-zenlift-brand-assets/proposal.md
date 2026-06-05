# standardize-zenlift-brand-assets

## Why

The project contains `public/zenlift.png` as the real source mark, but the favicon and visible brand areas still behave like template assets. Zenlift needs consistent brand presentation before the landing visuals are rebuilt.

## What Changes

- Generate browser icon PNG assets from `public/zenlift.png`.
- Replace `public/icon.svg` with a Zenlift-compatible SVG mark.
- Show the Zenlift mark next to the brand name in navbar and footer.
- Keep metadata icon paths unchanged while updating the assets they point to.

## Non-Goals

- No product copy rewrite.
- No full landing visual rebuild.
- No Play Store privacy route.
