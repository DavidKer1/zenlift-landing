## Overview

This change converts Zenlift's privacy route from a placeholder into publishable legal content and adds the companion account deletion route required for apps with account sign-in. The pages are static App Router pages, written in English, with no client-side data fetching or Firebase SDK dependency in the landing site.

## Decisions

- Use a shared `components/legal/legal-page.tsx` component for consistent legal page layout.
- Keep legal content static and explicit rather than generating it from external data.
- Describe Firebase generically as authentication and cloud data storage/sync infrastructure until the mobile implementation fixes the exact Firebase database/storage products.
- Remove Vercel Analytics from the site instead of disclosing it, because it is not actually being used.
- Keep `/privacy` linked from the footer and cross-link `/privacy` with `/delete-account`.

## Content

`/privacy` will disclose:

- Google Sign-In via Firebase Authentication.
- Account data such as Firebase user ID, email address, display name, and profile photo if provided by Google.
- User-created workout data such as routines, exercises, sessions, sets, notes, personal records, progress data, and preferences.
- Firebase/Google as service providers for authentication and cloud sync.
- No selling personal information and no advertising use of workout data.
- Manual export responsibility.
- Minimal permissions posture.
- Data retention and deletion through `/delete-account`.
- Children, changes, and contact sections.

`/delete-account` will disclose:

- Intended in-app path: `Settings > Account > Delete account`.
- Web request path through `dev@victorsanchez.mx`.
- Verification from the account email when needed.
- Data deleted from Firebase Authentication and Zenlift cloud sync.
- Data not automatically deleted, including local offline data and Google/Google Play data outside Zenlift's Firebase project.
- Email request processing within 30 days.

## Risks

- If the mobile app uses a different in-app deletion path, `/delete-account` must be updated before Google Play submission.
- If analytics, ads, or additional SDKs are added later, `/privacy` must be updated before release.
- If the exact Firebase storage products become known, the policy can be made more specific.

## Verification

- `pnpm lint`
- `pnpm build`
- Search checks for Firebase/Google Sign-In/deletion text.
- Search checks that `@vercel/analytics`, `<Analytics />`, and analytics policy language are absent.
- Browser inspection of `/privacy` and `/delete-account` at desktop and mobile widths.
