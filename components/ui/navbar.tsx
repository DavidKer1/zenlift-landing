"use client"

import Image from "next/image"
import Link from "next/link"

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#progress", label: "Progress" },
  { href: "#routines", label: "Routines" },
]

const downloadHref = "#"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-4">
      <nav className="mx-auto flex h-12 max-w-5xl items-center justify-between rounded-full border border-zinc-800/50 bg-zinc-900/70 px-4 backdrop-blur-md md:px-6">
        <Link href="/" className="font-display flex items-center gap-2 text-lg font-semibold text-zinc-100">
          <Image src="/zenlift.png" alt="" width={28} height={28} className="rounded-md" priority />
          <span>Zenlift</span>
        </Link>
        <div className="flex items-center gap-1">
          <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 text-sm rounded-full transition-colors text-zinc-400 hover:text-zinc-100"
            >
              {link.label}
            </Link>
          ))}
          </div>
          <Link
            href={downloadHref}
            className="ml-2 rounded-full bg-zinc-100 px-4 py-1.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
          >
            Download
          </Link>
        </div>
      </nav>
    </header>
  )
}
