## Why

Zenlift's `/privacy` route is currently only a placeholder, but the app now needs publishable Google Play legal pages for Google Sign-In, Firebase cloud sync, and account deletion. Google Play also requires a public web path for users to request account and data deletion when an app supports account creation.

## What Changes

- Replace the `/privacy` shell with a full English Privacy Policy.
- Add a public `/delete-account` route with in-app and web deletion instructions.
- Disclose Google Sign-In, Firebase Authentication, and Firebase cloud data sync.
- Remove unused Vercel Analytics from the landing site so the privacy policy does not need to disclose website analytics.
- Keep legal links discreet and out of the homepage product narrative.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `privacy-route`: Updates the placeholder privacy route requirement into publishable privacy and account deletion requirements.

## Impact

- `app/layout.tsx`: remove the unused Analytics component.
- `package.json` and `pnpm-lock.yaml`: remove the unused `@vercel/analytics` dependency.
- `app/privacy/page.tsx`: publish the full Privacy Policy.
- `app/delete-account/page.tsx`: add account deletion instructions.
- `components/legal/legal-page.tsx`: add shared legal page layout primitives.
- `openspec/specs/privacy-route/spec.md`: update the main privacy route spec.
