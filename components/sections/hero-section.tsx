"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Dumbbell } from "lucide-react"
import { LiquidCtaButton } from "@/components/buttons/liquid-cta-button"

const downloadHref = "#"

function PhoneFrame({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <div className={className}>
      <div className="relative">
        <div className="absolute -inset-8 rounded-full bg-[#cfbcff]/18 blur-3xl" />
        <div className="relative rounded-[2.4rem] border border-zinc-800/80 bg-zinc-950 p-2 shadow-[0_40px_120px_rgba(0,0,0,0.7)] ring-1 ring-white/10">
          <div className="overflow-hidden rounded-[2rem] bg-[#16141b]">
            <Image
              src="/zenlift-app-home.png"
              alt="Zenlift app home screen"
              width={1179}
              height={2556}
              priority={priority}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function WorkoutMockup() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto hidden h-[680px] max-w-6xl opacity-70 md:block">
      <div className="absolute left-1/2 top-8 h-80 w-80 -translate-x-1/2 rounded-full bg-[#cfbcff]/10 blur-3xl" />
      <div className="absolute left-10 top-56 w-72 rounded-lg border border-zinc-800/70 bg-zinc-950/80 p-4 shadow-2xl shadow-black/40">
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

      <PhoneFrame
        priority
        className="absolute right-4 top-[-18px] w-[260px] origin-center [transform:perspective(1100px)_rotateY(-14deg)_rotateZ(6deg)] lg:right-8 lg:w-[300px]"
      />
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

        <PhoneFrame priority className="mx-auto mt-14 w-[210px] -rotate-3 md:hidden" />

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
