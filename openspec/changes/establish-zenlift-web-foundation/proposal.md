# establish-zenlift-web-foundation

## Summary

Replace the generic SaaS template foundation with Zenlift-specific web identity, metadata, navigation, and footer structure.

## Motivation

The current landing page still presents itself as a v0 SaaS template with Acme branding, generic metadata, trial/demo CTAs, and external template credits. Zenlift needs a clean public foundation before product-specific messaging and visuals are rebuilt.

## Scope

- Rename the project package to Zenlift landing.
- Replace root metadata with Zenlift product metadata.
- Update navbar branding, anchors, and CTA language.
- Update footer branding and remove fake/template links.
- Keep CTA destinations as placeholders until the real Google Play URL exists.

## Non-Goals

- No full landing copy rewrite in this change.
- No favicon generation in this change.
- No `/privacy` route in this change.
