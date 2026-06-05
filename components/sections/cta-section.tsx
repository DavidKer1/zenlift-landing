import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { LiquidCtaButton } from "@/components/buttons/liquid-cta-button"

const downloadHref = "#"

export function CtaSection() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
          Bring your workout history to every session.
        </h2>
        <p className="text-lg text-zinc-500 mb-10 text-balance">
          Create routines, log the workout, review progress, and walk into the next session knowing what to improve.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={downloadHref}>
            <LiquidCtaButton>Download on Google Play</LiquidCtaButton>
          </Link>
          <Link
            href="#features"
            className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <span>Review the features</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}
