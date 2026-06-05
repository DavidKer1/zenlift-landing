const problems = [
  { label: "Notes", description: "Hard to read when you need last session's numbers." },
  { label: "Memory", description: "Unreliable once the workout gets heavy." },
  { label: "Screenshots", description: "Useful once, messy after a few weeks." },
  { label: "Spreadsheets", description: "Powerful at a desk, awkward between sets." },
]

export function ImpactSection() {
  return (
    <section className="border-y border-zinc-900 bg-zinc-950 px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="mb-4 text-sm font-medium text-[#cfbcff]">The problem</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
            Progress gets blurry when your workout data is scattered.
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-balance">
            The hard part is not just writing numbers down. It is knowing what to train today, what you lifted last
            time, and whether you are actually improving.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {problems.map((problem, index) => (
            <div
              key={problem.label}
              className="group relative min-h-48 overflow-hidden rounded-lg border border-zinc-800/60 bg-zinc-900/40 p-5 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/70"
            >
              <span className="absolute right-4 top-4 font-display text-5xl text-zinc-800 transition-colors group-hover:text-zinc-700">
                0{index + 1}
              </span>
              <div className="relative flex h-full flex-col justify-end">
                <p className="mb-2 font-display text-2xl font-bold text-zinc-100 md:text-3xl">{problem.label}</p>
                <p className="text-sm leading-relaxed text-zinc-500">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
