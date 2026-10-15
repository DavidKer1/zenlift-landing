# privacy-route Spec

## Purpose

Define Zenlift's public privacy, support and data-deletion routes for the current local-first Android/iOS v1. The owner-approved 2026-10-14 scope supersedes earlier account/cloud-sync assumptions; archived designs retain their historical context.

## Requirements

### Requirement: Privacy route shell

The web project SHALL provide a publishable `/privacy` route that presents Zenlift's Privacy Policy in English.

#### Scenario: User opens privacy route

- **WHEN** a user navigates to `/privacy`
- **THEN** the app renders a readable Privacy Policy
- **AND** the policy states that current workout content stays on the device and no account or cloud sync is required
- **AND** it discloses optional Firebase Analytics/Crashlytics, exercise-media delivery, backup/deletion behavior and the operator's legal name, country and contact email.

#### Scenario: Privacy policy distinguishes mobile diagnostics from website behavior

- **WHEN** the privacy policy content is inspected
- **THEN** it does not claim that this repository includes a Vercel Analytics integration
- **AND** it explains that optional mobile diagnostics are off by default and that disabling them or deleting local workouts does not erase already transmitted diagnostics
- **AND** it does not invent a selected Firebase retention period.

### Requirement: Discreet footer access

The landing footer SHALL link to `/privacy` without presenting privacy as a homepage product feature.

#### Scenario: User scans the homepage

- **WHEN** a user views the footer
- **THEN** a Privacy link is available
- **AND** Support and Delete data links are available
- **AND** no homepage section markets privacy as a primary feature.

### Requirement: Account deletion route

The web project SHALL retain `/delete-account` as a stable route explaining current local deletion and the separate email request path for users of an earlier account-enabled version.

#### Scenario: User opens account deletion route

- **WHEN** a user navigates to `/delete-account`
- **THEN** the page points to Settings → Data → Delete all data and About & Privacy → Delete all data
- **AND** it explains what local deletion removes, retained exported copies, and the separate status of already transmitted diagnostics and legacy cloud data
- **AND** it preserves the earlier email request route and its existing processing target without presenting account controls as current app functionality.

#### Scenario: User requests deletion from the web

- **WHEN** a user wants to request account deletion outside the app
- **THEN** the page provides `dev@victorsanchez.mx`
- **AND** the page provides a mail link for deletion requests.

### Requirement: Public support route

The web project SHALL provide `/support` with readable help, operator details and English/Spanish email support.

#### Scenario: User needs help

- **WHEN** a user opens `/support`
- **THEN** the page provides `dev@victorsanchez.mx` and a mail link
- **AND** it explains recovery notices, backup/import and local deletion without promising server recovery of lost local data
- **AND** it asks for app/device and reproduction details without requiring a sensitive backup.

#### Scenario: User follows related pages

- **WHEN** a user opens a privacy, support or deletion page
- **THEN** links to all three routes and the homepage are available
- **AND** content remains readable on desktop and mobile widths.

### Requirement: Remove unused analytics dependency

The web project SHALL NOT include the unused Vercel Analytics integration.

#### Scenario: Analytics dependency search runs

- **WHEN** app source and package files are searched for Vercel Analytics
- **THEN** no `@vercel/analytics` package, import, component usage, or policy disclosure remains.
