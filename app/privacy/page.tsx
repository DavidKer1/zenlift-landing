import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Zenlift",
  description: "Zenlift privacy policy route prepared for future Google Play policy content.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-zinc-100">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-200">
          Zenlift
        </Link>
      </div>
    </main>
  )
}
