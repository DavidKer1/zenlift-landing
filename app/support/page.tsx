import type { Metadata } from "next"
import Link from "next/link"
import { LegalList, LegalPage, LegalSection } from "@/components/legal/legal-page"
import { operator } from "@/lib/operator"

export const metadata: Metadata = {
  title: "Support | Zenlift",
  description: "Get help with Zenlift, recover an unfinished workout, back up your data, or contact support in English or Spanish.",
}

const supportHref = `mailto:${operator.contactEmail}?subject=Zenlift%20support`

export default function SupportPage() {
  return (
    <LegalPage
      title="Zenlift Support"
      intro={
        <>
          <p>Need help with your training log? Contact us in English or Spanish.</p>
          <p>
            <a
              href={supportHref}
              className="inline-flex min-h-12 items-center rounded-md border border-zinc-700 px-4 py-3 font-semibold text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
            >
              Email support
            </a>
          </p>
          <p>
            <a href={`mailto:${operator.contactEmail}`} className="break-words font-medium text-zinc-100 underline underline-offset-4">
              {operator.contactEmail}
            </a>
          </p>
        </>
      }
    >
      <LegalSection title="What to include">
        <LegalList
          items={[
            "Your Zenlift version, shown in About & Privacy.",
            "Your phone model and Android or iOS version.",
            "The screen you were using, what you tried, and what happened instead.",
            "Whether the issue also happens without an internet connection.",
          ]}
        />
        <p>
          Do not include a backup, workout notes, body weight, or screenshots with sensitive information in your first
          email. If more detail is needed, share only the information you understand and choose to provide.
        </p>
      </LegalSection>

      <LegalSection title="An unfinished workout is missing">
        <p>
          Reopen Zenlift and check for the active-workout bar or a recovery notice. If there is a recovery issue, review
          the saved and recovered values before choosing how to resolve it. If saving fails, keep the app data in
          place, check free storage, and contact support before deleting data or reinstalling.
        </p>
      </LegalSection>

      <LegalSection title="Back up or restore your data">
        <p>
          In Settings → Data, choose Export data to create a .zenlift backup and save it somewhere you control. To
          restore a compatible backup, choose Import data and select the file. Import restores missing data without
          automatically erasing existing workouts. Keep a backup before making changes or moving phones.
        </p>
        <p>
          The current local-first version does not have Zenlift accounts, Zenlift-managed cloud backup, or
          cross-device sync. Your phone&apos;s backup and transfer settings may apply separately. Support cannot retrieve
          lost workouts from a Zenlift server; recovery depends on a backup you control, if available.
        </p>
      </LegalSection>

      <LegalSection title="Delete data or change diagnostics">
        <p>
          Use Settings → Data → Delete all data, or About &amp; Privacy → Delete all data, to erase Zenlift&apos;s local
          data. This is permanent; export first if you want a copy. Diagnostics are optional, off by default, and can
          be changed in Settings without affecting your workouts.
        </p>
        <p>
          For details or an earlier account-enabled version, see{" "}
          <Link href="/delete-account" className="font-medium text-zinc-100 underline underline-offset-4">
            Delete your Zenlift data
          </Link>{" "}
          and the{" "}
          <Link href="/privacy" className="font-medium text-zinc-100 underline underline-offset-4">
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="Who provides support">
        <p>Zenlift is operated by {operator.legalName}, based in {operator.country}.</p>
      </LegalSection>
    </LegalPage>
  )
}
