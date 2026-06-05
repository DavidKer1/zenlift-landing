## MODIFIED Requirements

### Requirement: Privacy route shell

The web project SHALL provide a publishable `/privacy` route that presents Zenlift's Privacy Policy in English.

#### Scenario: User opens privacy route

- **WHEN** a user navigates to `/privacy`
- **THEN** the app renders a readable Privacy Policy
- **AND** the policy discloses Google Sign-In, Firebase Authentication, Firebase cloud sync, workout data handling, deletion options, and contact email.

#### Scenario: Privacy policy avoids unused analytics claims

- **WHEN** the privacy policy content is inspected
- **THEN** it does not disclose Vercel Analytics, website analytics, or telemetry as active behavior.

### Requirement: Discreet footer access

The landing footer SHALL link to `/privacy` without presenting privacy as a homepage product feature.

#### Scenario: User scans the homepage

- **WHEN** a user views the footer
- **THEN** a Privacy link is available
- **AND** no homepage section markets privacy as a primary feature.

## ADDED Requirements

### Requirement: Account deletion route

The web project SHALL provide a `/delete-account` route that explains how Zenlift users can delete their account and associated cloud data.

#### Scenario: User opens account deletion route

- **WHEN** a user navigates to `/delete-account`
- **THEN** the app renders account deletion instructions
- **AND** the page includes the intended in-app deletion path, web email request path, data deleted, data not automatically deleted, and expected processing time.

#### Scenario: User requests deletion from the web

- **WHEN** a user wants to request account deletion outside the app
- **THEN** the page provides `dev@victorsanchez.mx`
- **AND** the page provides a mail link for deletion requests.

### Requirement: Remove unused analytics dependency

The web project SHALL NOT include the unused Vercel Analytics integration.

#### Scenario: Analytics dependency search runs

- **WHEN** app source and package files are searched for Vercel Analytics
- **THEN** no `@vercel/analytics` package, import, component usage, or policy disclosure remains.
