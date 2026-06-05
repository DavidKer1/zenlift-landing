import type { Metadata } from "next"
import Link from "next/link"
import { LegalList, LegalPage, LegalSection } from "@/components/legal/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy | Zenlift",
  description:
    "Learn how Zenlift handles account information, workout data, Firebase cloud sync, and account deletion.",
}

const contactEmail = "dev@victorsanchez.mx"

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      effectiveDate="June 5, 2026"
      intro={
        <>
          <p>
            This Privacy Policy explains how Zenlift handles information when you use the Zenlift mobile app and related
            public web pages.
          </p>
          <p>
            Zenlift is a workout tracking app for creating routines, logging sets, reviewing progress, and syncing your
            training data across devices.
          </p>
        </>
      }
    >
      <LegalSection title="Information we collect">
        <p>When you sign in with Google, Zenlift uses Firebase Authentication to create and manage your account.</p>
        <LegalList
          items={[
            "Account information from Google Sign-In, such as your Firebase user ID, email address, display name, and profile photo if Google provides it.",
            "Workout data you create in Zenlift, including routines, exercises, workout sessions, sets, notes, personal records, progress data, and app preferences.",
            "Support information you choose to send us when you contact us by email.",
          ]}
        />
      </LegalSection>

      <LegalSection title="How we use information">
        <LegalList
          items={[
            "To authenticate your account and keep you signed in.",
            "To save and sync your workout data across devices.",
            "To restore account-linked training data when you sign in again.",
            "To maintain Zenlift functionality and respond to support requests.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Firebase and Google services">
        <p>
          Zenlift uses Firebase services provided by Google for authentication and cloud data storage or sync. Firebase
          may process account and app data as part of providing those services.
        </p>
        <p>
          Your use of Google Sign-In is also subject to Google&apos;s own privacy practices. You can review Google&apos;s
          Privacy Policy at{" "}
          <a href="https://policies.google.com/privacy" className="font-medium text-zinc-100 underline underline-offset-4">
            policies.google.com/privacy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Ads and selling data">
        <p>
          Zenlift does not sell your personal information and does not use your workout data for advertising. Zenlift
          does not include in-app advertising in the current product scope.
        </p>
      </LegalSection>

      <LegalSection title="Manual exports">
        <p>
          If Zenlift lets you export your data, exported files are controlled by you after they are created. You are
          responsible for where you store, upload, or share exported files.
        </p>
      </LegalSection>

      <LegalSection title="Permissions">
        <p>
          Zenlift requests only the permissions needed for app functionality. Zenlift does not request access to your
          location, contacts, camera, or microphone unless a future feature requires it and this policy is updated.
        </p>
      </LegalSection>

      <LegalSection title="Data retention and deletion">
        <p>
          Zenlift keeps account-linked cloud data while your account is active. You can request deletion of your Zenlift
          account and associated cloud data from the{" "}
          <Link href="/delete-account" className="font-medium text-zinc-100 underline underline-offset-4">
            account deletion page
          </Link>
          .
        </p>
        <p>
          When your Zenlift account is deleted, we delete associated cloud data from Zenlift systems, subject to limited
          retention if required for legal, security, fraud prevention, or abuse-prevention reasons.
        </p>
      </LegalSection>

      <LegalSection title="Children">
        <p>Zenlift is not directed to children under 13, and we do not knowingly collect data from children under 13.</p>
      </LegalSection>

      <LegalSection title="Changes to this policy">
        <p>
          We may update this Privacy Policy as Zenlift changes. When we do, we will update the effective date on this
          page.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          If you have questions about this Privacy Policy, contact us at{" "}
          <a href={`mailto:${contactEmail}`} className="font-medium text-zinc-100 underline underline-offset-4">
            {contactEmail}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  )
}
