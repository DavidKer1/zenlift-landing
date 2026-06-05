# Zenlift Privacy and Account Deletion Pages Design

## Context

Zenlift already has a minimal `/privacy` route shell for future Google Play policy content. The product direction has changed from a strictly local-only MVP to a Firebase-backed app with Google Sign-In and cloud sync. Because account creation/sign-in will be available, Google Play also requires an account deletion path that is available both inside the app and on the web.

This design covers two public web routes:

- `/privacy`
- `/delete-account`

Both pages should be written in English and be suitable for Google Play review. The content should be clear, app-specific, and restrained. It should not claim certifications, special encryption, or completed backend behavior beyond the agreed Firebase scope.

## Goals

- Replace the empty `/privacy` shell with a publishable Privacy Policy for Zenlift.
- Add a `/delete-account` page that supports Google Play account deletion requirements.
- Accurately disclose use of Google Sign-In, Firebase Authentication, and Firebase cloud storage/database services for account and workout data.
- Remove the unused Vercel Analytics integration so the policy does not need website analytics disclosure.
- Keep legal content easy to scan on desktop and mobile.
- Cross-link `/privacy` and `/delete-account`.

## Non-Goals

- No full legal terms of service.
- No cookie policy unless the app adds cookie-based web tracking later.
- No claims that Zenlift sells data, runs ads, or uses analytics.
- No homepage feature messaging about privacy; the footer may remain the discreet legal access point.

## Content Design

### `/privacy`

The Privacy Policy should include:

1. **Header**
   - Title: `Privacy Policy`
   - Effective date: `June 5, 2026`
   - Short statement that the policy applies to Zenlift.

2. **Information Zenlift Collects**
   - Account information from Google Sign-In via Firebase Authentication, such as user ID, email address, display name, and profile photo if provided by Google.
   - Workout and app data the user creates, such as routines, exercises, workout sessions, sets, notes, personal records, progress data, and app preferences.

3. **How Zenlift Uses Information**
   - To authenticate the user.
   - To sync workout data across devices.
   - To restore account-linked data.
   - To maintain app functionality and respond to support requests.

4. **Cloud Storage and Firebase**
   - Zenlift uses Firebase services provided by Google for authentication and cloud data storage/sync.
   - Firebase may process data according to Google's/Firebase's applicable terms and privacy practices.
   - Avoid naming a specific Firebase database product unless implementation confirms Firestore, Realtime Database, or Cloud Storage.

5. **Data Zenlift Does Not Use**
   - No selling personal data.
   - No advertising use stated.
   - No analytics or telemetry.

6. **Manual Exports**
   - If Zenlift supports manual export, exported files are controlled by the user after creation.
   - Users are responsible for where they store or share exported files.

7. **Permissions**
   - Zenlift should request only permissions needed for app functionality.
   - State that Zenlift does not request location, contacts, camera, or microphone unless a future feature requires it and the policy is updated.

8. **Data Retention and Deletion**
   - Account-linked cloud data is retained while the account is active.
   - Users can request deletion through `/delete-account`.
   - Deleting the account deletes associated cloud data, subject to limited retention required for legal, security, or abuse-prevention reasons.

9. **Children**
   - Zenlift is not directed to children under 13.

10. **Changes**
    - Policy updates will be posted on the page with a new effective date.

11. **Contact**
    - `dev@victorsanchez.mx`

### `/delete-account`

The Account Deletion page should include:

1. **Header**
   - Title: `Delete Your Zenlift Account`
   - Short statement that the page explains how to delete a Zenlift account and associated cloud data.

2. **In-App Deletion Path**
   - State the intended app path: `Settings > Account > Delete account`.
   - The implementation should update this text if the final app navigation differs.

3. **Web Deletion Request**
   - Provide the email `dev@victorsanchez.mx`.
   - Include a mailto link or button with a clear subject such as `Delete my Zenlift account`.
   - Explain that users may be asked to verify the request from the email associated with the account.

4. **Data Deleted**
   - Firebase Authentication account data for Zenlift.
   - Cloud-synced workout data associated with the account, including routines, exercises, sessions, sets, notes, personal records, progress data, preferences, and cloud files if any exist.

5. **Data Not Automatically Deleted**
   - Local data remaining on devices that are offline or no longer connected to the account.
   - Data handled independently by Google Play or Google outside Zenlift's Firebase project.
   - Limited records retained only when required for legal, security, fraud prevention, or abuse-prevention reasons.

6. **Processing Time**
   - State that email deletion requests are processed within 30 days.
   - If in-app deletion is implemented as immediate deletion, the page may say it starts immediately after confirmation.

7. **Links**
   - Link back to `/privacy`.

## UI Design

Both pages should follow the existing Zenlift visual system:

- Dark background consistent with the landing page.
- Simple centered legal content column.
- Zenlift link/logo at the top returning to `/`.
- High readability with clear headings and comfortable line length.
- No decorative marketing sections.
- No cards nested inside cards.

## Data Flow and Dependencies

- The web pages are static Next.js App Router routes.
- No client-side data fetching is required.
- No forms are required for the first version; `mailto:` is enough for the web deletion request path.
- The Privacy Policy should reference Firebase and Google Sign-In at the content level only. It should not require Firebase SDK code in the landing site.
- The unused Vercel Analytics integration should be removed from the site layout and package dependencies.

## Error Handling

- Because the pages are static, runtime error handling is minimal.
- Links should be valid:
  - `/privacy`
  - `/delete-account`
  - `/`
  - `mailto:dev@victorsanchez.mx`
- If the in-app deletion path changes before launch, the page content must be updated before submitting to Google Play.

## Testing and Verification

- Run lint/build checks available in the project.
- Verify `/privacy` renders meaningful policy content.
- Verify `/delete-account` renders deletion instructions.
- Verify both pages are reachable and cross-linked.
- Verify footer still links to `/privacy`.
- Verify Vercel Analytics is absent from app source and dependencies.
- Visually inspect desktop and mobile widths for readable line length and no overlapping text.

## Open Decisions

- The exact Firebase storage product should remain generic until implementation confirms Firestore, Realtime Database, Cloud Storage, or a combination.
- The in-app deletion path is assumed to be `Settings > Account > Delete account`; update if the mobile app uses different wording.
