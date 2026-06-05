import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"

type LegalPageProps = {
  title: string
  effectiveDate?: string
  intro: ReactNode
  children: ReactNode
}

type LegalSectionProps = {
  title: string
  children: ReactNode
}

type LegalListProps = {
  items: ReactNode[]
}

export function LegalPage({ title, effectiveDate, intro, children }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-10 text-zinc-100 sm:py-14">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-sm font-semibold text-zinc-300 transition-colors hover:text-white"
        >
          <Image src="/zenlift.png" alt="" width={28} height={28} className="rounded-md" />
          <span>Zenlift</span>
        </Link>

        <header className="mt-12 border-b border-zinc-800 pb-8">
          <h1 className="font-display text-4xl font-semibold tracking-normal text-white sm:text-5xl">{title}</h1>
          {effectiveDate ? (
            <p className="mt-4 text-sm font-medium text-zinc-500">Effective date: {effectiveDate}</p>
          ) : null}
          <div className="mt-6 space-y-4 text-base leading-7 text-zinc-300">{intro}</div>
        </header>

        <div className="space-y-10 py-10">{children}</div>
      </article>
    </main>
  )
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="font-heading text-xl font-semibold text-white">{title}</h2>
      <div className="space-y-4 text-base leading-7 text-zinc-300">{children}</div>
    </section>
  )
}

export function LegalList({ items }: LegalListProps) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-zinc-300">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}
