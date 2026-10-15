import type { Metadata } from "next"
import Link from "next/link"
import { LegalList, LegalPage, LegalSection } from "@/components/legal/legal-page"
import { operator } from "@/lib/operator"

export const metadata: Metadata = {
  title: "Delete Your Zenlift Data | Zenlift",
  description: "Delete local Zenlift data, understand what remains in exported backups, or request deletion for an earlier account-enabled version.",
}

const deletionRequestHref = `mailto:${operator.contactEmail}?subject=Delete%20my%20Zenlift%20account`

export default function DeleteAccountPage() {
  return (
    <LegalPage
      title="Delete Your Zenlift Data"
      intro={
        <p>
          The current local-first version of Zenlift does not require an account. You can delete its data directly on
          your phone. If you previously used a version with Google Sign-In, the separate account request path is below.
        </p>
      }
    >
      <LegalSection title="Delete local data in the app">
        <p>
          Go to <strong className="font-semibold text-white">Settings → Data → Delete all data</strong> or{" "}
          <strong className="font-semibold text-white">About &amp; Privacy → Delete all data</strong>, then confirm the
          permanent deletion. Export a backup first if you want to keep a copy.
        </p>
        <LegalList
          items={[
            "This removes local workouts, routines, custom exercises, personal exercise preferences, settings, and recovery data, and clears Zenlift-owned temporary export files.",
            "The app returns to onboarding and optional diagnostics are turned off.",
            "Copies of backups you saved or shared elsewhere are not deleted. You control those copies.",
            "Diagnostics already sent to Firebase and any legacy cloud account are not deleted by this local action.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Earlier versions with an account">
        <p>
          If you used an earlier Zenlift version with Google Sign-In and want its account or associated cloud data
          deleted, email {operator.contactEmail}. Send the request from the email address associated with that account
          if you still have access to it. We may ask you to verify ownership before acting on the request.
        </p>
        <p>
          <a
            href={deletionRequestHref}
            className="inline-flex min-h-12 items-center rounded-md border border-zinc-700 px-4 py-3 text-sm font-semibold text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
          >
            Request account deletion
          </a>
        </p>
        <p>
          Account requests concern any associated Zenlift Firebase Authentication record, cloud workout data, and
          account-owned cloud files that exist. They do not erase local data on other devices, backups you kept, or
          information Google handles independently of Zenlift. We aim to process email deletion requests within 30 days
          after we receive and verify your request; any required retention or limitation will be explained in the
          response.
        </p>
      </LegalSection>

      <LegalSection title="Questions or privacy requests">
        <p>
          Contact {operator.legalName}, {operator.country}, at{" "}
          <a href={`mailto:${operator.contactEmail}`} className="break-words font-medium text-zinc-100 underline underline-offset-4">
            {operator.contactEmail}
          </a>
          . You can also read the{" "}
          <Link href="/privacy" className="font-medium text-zinc-100 underline underline-offset-4">
            Privacy Policy
          </Link>{" "}
          or visit{" "}
          <Link href="/support" className="font-medium text-zinc-100 underline underline-offset-4">
            Support
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  )
}
