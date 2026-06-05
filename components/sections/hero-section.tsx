"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2, Dumbbell } from "lucide-react"
import { LiquidCtaButton } from "@/components/buttons/liquid-cta-button"

const downloadHref = "#"

const activeSets = [
  { set: "1", previous: "70 kg x 8", current: "72.5 kg x 8", done: true },
  { set: "2", previous: "70 kg x 8", current: "72.5 kg x 7", done: true },
  { set: "3", previous: "67.5 kg x 10", current: "72.5 kg x 6", done: false },
]

function WorkoutMockup() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto hidden h-[520px] max-w-6xl opacity-70 md:block">
      <div className="absolute left-1/2 top-8 h-80 w-80 -translate-x-1/2 rounded-full bg-[#cfbcff]/10 blur-3xl" />
      <div className="absolute left-10 top-40 w-72 rounded-lg border border-zinc-800/70 bg-zinc-950/80 p-4 shadow-2xl shadow-black/40">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs text-zinc-500">Previous session</span>
          <span className="rounded-full bg-zinc-900 px-2 py-1 text-xs text-zinc-500">Push Day</span>
        </div>
        {["Bench Press", "Shoulder Press", "Cable Fly"].map((exercise, index) => (
          <div key={exercise} className="mb-3 rounded-lg border border-zinc-800/60 bg-zinc-900/60 p-3 last:mb-0">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-medium text-zinc-200">{exercise}</span>
              <span className="text-xs text-zinc-500">{index + 3} sets</span>
            </div>
            <div className="mt-2 h-1.5 rounded-full bg-zinc-800">
              <div className="h-full rounded-full bg-[#cfbcff]" style={{ width: `${55 + index * 12}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute right-8 top-10 w-[300px] rounded-[2rem] border border-zinc-800 bg-zinc-950 p-3 shadow-2xl shadow-black/50">
        <div className="rounded-[1.5rem] border border-zinc-800/80 bg-zinc-900/80 p-4">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-zinc-100">Active workout</p>
              <p className="text-xs text-zinc-500">Push Day · 42 min</p>
            </div>
            <Dumbbell className="h-5 w-5 text-[#cfbcff]" />
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-950/80 p-3">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-zinc-100">Bench Press</span>
              <span className="text-xs text-zinc-500">Last: 70 kg x 8</span>
            </div>
            <div className="space-y-2">
              {activeSets.map((row) => (
                <div key={row.set} className="grid grid-cols-[32px_1fr_1fr_24px] items-center gap-2 rounded-lg bg-zinc-900 p-2">
                  <span className="text-xs text-zinc-500">#{row.set}</span>
                  <span className="text-xs text-zinc-500">{row.previous}</span>
                  <span className="text-xs font-medium text-zinc-200">{row.current}</span>
                  <CheckCircle2 className={`h-4 w-4 ${row.done ? "text-emerald-400" : "text-zinc-700"}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 rounded-lg bg-[#cfbcff] p-3 text-zinc-950">
            <p className="text-xs font-medium opacity-70">Today</p>
            <p className="mt-1 text-lg font-bold">2 sets completed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-[960px] flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(207,188,255,0.12),transparent_34%),linear-gradient(to_bottom,#09090b,#050505)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
      <WorkoutMockup />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/80 px-4 py-2">
          <Dumbbell className="h-4 w-4 text-[#cfbcff]" />
          <span className="text-sm text-zinc-400">Workout tracking for real gym sessions</span>
        </div>

        <h1 className="font-display mb-6 text-5xl font-bold md:text-7xl">
          <span className="block text-zinc-100">Log workouts</span>
          <span className="block bg-gradient-to-r from-zinc-500 via-zinc-100 to-[#cfbcff] bg-clip-text text-transparent">
            without losing your rhythm.
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-balance text-lg leading-relaxed text-zinc-500 md:text-xl">
          Zenlift helps you create routines, record sets fast, check previous lifts, and track progress from your phone.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href={downloadHref}>
            <LiquidCtaButton>Download on Google Play</LiquidCtaButton>
          </Link>
          <Link
            href="#features"
            className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
          >
            <span>See how it works</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mx-auto mt-14 max-w-sm rounded-[1.5rem] border border-zinc-800 bg-zinc-950 p-3 text-left shadow-2xl shadow-black/40 md:hidden">
          <div className="rounded-[1.1rem] border border-zinc-800 bg-zinc-900/80 p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-zinc-100">Active workout</p>
                <p className="text-xs text-zinc-500">Push Day · 42 min</p>
              </div>
              <span className="rounded-full bg-[#cfbcff] px-2 py-1 text-xs font-semibold text-zinc-950">2 sets</span>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-950/80 p-3">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-zinc-100">Bench Press</span>
                <span className="text-xs text-zinc-500">Last: 70 kg x 8</span>
              </div>
              <div className="grid grid-cols-[1fr_1fr_24px] items-center gap-2 rounded-lg bg-zinc-900 p-2">
                <span className="text-xs text-zinc-500">72.5 kg</span>
                <span className="text-xs font-medium text-zinc-200">8 reps</span>
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 text-left sm:grid-cols-3 md:hidden">
          {[
            ["Previous lifts", "Know what you used last time."],
            ["Fast set entry", "Record weight and reps in the moment."],
            ["Progress history", "Review workouts without digging through notes."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-4">
              <p className="text-sm font-medium text-zinc-100">{title}</p>
              <p className="mt-2 text-sm text-zinc-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
