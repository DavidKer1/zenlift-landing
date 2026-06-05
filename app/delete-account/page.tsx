import type { Metadata } from "next"
import Link from "next/link"
import { LegalList, LegalPage, LegalSection } from "@/components/legal/legal-page"

export const metadata: Metadata = {
  title: "Delete Your Zenlift Account | Zenlift",
  description: "Learn how to delete your Zenlift account and associated cloud-synced workout data.",
}

const contactEmail = "dev@victorsanchez.mx"
const deletionRequestHref = "mailto:dev@victorsanchez.mx?subject=Delete%20my%20Zenlift%20account"

export default function DeleteAccountPage() {
  return (
    <LegalPage
      title="Delete Your Zenlift Account"
      intro={
        <>
          <p>
            This page explains how to request deletion of your Zenlift account and associated cloud-synced workout data.
          </p>
          <p>
            Zenlift uses Google Sign-In and Firebase to manage accounts and sync training data. Deleting your account
            removes the account and associated cloud data from Zenlift systems.
          </p>
        </>
      }
    >
      <LegalSection title="Delete your account in the app">
        <p>
          In the Zenlift app, go to{" "}
          <strong className="font-semibold text-white">Settings &gt; Account &gt; Delete account</strong> and follow the
          confirmation steps.
        </p>
        <p>
          If the app interface changes, use the account or settings area in the app to find the current deletion option.
        </p>
      </LegalSection>

      <LegalSection title="Request deletion from the web">
        <p>
          You can also request account deletion by emailing{" "}
          <a href={`mailto:${contactEmail}`} className="font-medium text-zinc-100 underline underline-offset-4">
            {contactEmail}
          </a>
          . For your protection, we may ask you to verify the request from the email address associated with your Zenlift
          account.
        </p>
        <p>
          <a
            href={deletionRequestHref}
            className="inline-flex rounded-md border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
          >
            Request account deletion
          </a>
        </p>
      </LegalSection>

      <LegalSection title="Data deleted">
        <LegalList
          items={[
            "Your Zenlift Firebase Authentication account record.",
            "Cloud-synced workout data associated with your account, including routines, exercises, workout sessions, sets, notes, personal records, progress data, and preferences.",
            "Cloud files associated with your Zenlift account, if any exist.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Data not automatically deleted">
        <LegalList
          items={[
            "Local data that remains on a device that is offline, signed out, or no longer connected to your Zenlift account.",
            "Information handled independently by Google Play or Google outside Zenlift's Firebase project.",
            "Limited records retained only if required for legal, security, fraud prevention, or abuse-prevention reasons.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Processing time">
        <p>
          In-app deletion starts after you confirm the deletion flow. Email deletion requests are processed within 30
          days after we receive and verify the request.
        </p>
      </LegalSection>

      <LegalSection title="Privacy Policy">
        <p>
          For more information about how Zenlift handles data, read the{" "}
          <Link href="/privacy" className="font-medium text-zinc-100 underline underline-offset-4">
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  )
}
