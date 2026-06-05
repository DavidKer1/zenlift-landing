"use client"

import type React from "react"

import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface LiquidCtaButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  theme?: "light" | "dark"
}

export function LiquidCtaButton({ children, className, onClick, theme = "dark" }: LiquidCtaButtonProps) {
  const isLight = theme === "light"

  return (
    <button
      onClick={onClick}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300 active:scale-95",
        isLight
          ? "border-zinc-300 bg-zinc-100 text-zinc-900 hover:bg-white"
          : "border-zinc-700 bg-zinc-100 text-zinc-950 shadow-[0_0_40px_rgba(207,188,255,0.16)] hover:border-[#cfbcff] hover:bg-white",
        className,
      )}
    >
      <span>{children}</span>
      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  )
}
