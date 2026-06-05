"use client"

import Link from "next/link"
import { ArrowRight, Dumbbell } from "lucide-react"
import { LiquidCtaButton } from "@/components/buttons/liquid-cta-button"

const downloadHref = "#"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-transparent to-transparent" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 mb-8">
          <Dumbbell className="w-4 h-4 text-zinc-400" />
          <span className="text-sm text-zinc-400">Workout tracking for real gym sessions</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="text-zinc-100 block">Log workouts</span>
          <span className="bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
            without losing your rhythm.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          Zenlift helps you create routines, record sets fast, check previous lifts, and track progress from your phone.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={downloadHref}>
            <LiquidCtaButton>Download on Google Play</LiquidCtaButton>
          </Link>
          <Link
            href="#features"
            className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <span>See how it works</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
          {[
            ["Previous lifts", "Know what you used last time."],
            ["Fast set entry", "Record weight and reps in the moment."],
            ["Progress history", "Review workouts without digging through notes."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
              <p className="text-sm font-medium text-zinc-100">{title}</p>
              <p className="mt-2 text-sm text-zinc-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
