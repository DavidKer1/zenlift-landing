# web-foundation Spec

## ADDED Requirements

### Requirement: Zenlift web identity

The web project SHALL present Zenlift, not the original template brand, in package identity, root metadata, navigation, and footer.

#### Scenario: User views page chrome

- **WHEN** a user opens the landing page
- **THEN** the browser metadata, navbar, and footer identify the product as Zenlift
- **AND** no visible Acme, v0, generic SaaS trial, or external template credit remains.

### Requirement: Placeholder download CTA

The web project SHALL use `Download on Google Play` or short `Download` CTA language while the destination remains a known placeholder.

#### Scenario: User clicks a download CTA before the store URL exists

- **WHEN** a user clicks a download CTA
- **THEN** the link points to `#`
- **AND** the UI does not imply a fabricated external URL.
