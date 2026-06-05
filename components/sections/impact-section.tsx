const problems = [
  { label: "Notes", description: "Hard to read when you need last session's numbers." },
  { label: "Memory", description: "Unreliable once the workout gets heavy." },
  { label: "Screenshots", description: "Useful once, messy after a few weeks." },
  { label: "Spreadsheets", description: "Powerful at a desk, awkward between sets." },
]

export function ImpactSection() {
  return (
    <section className="px-6 py-24 bg-zinc-900/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">The problem</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
            Progress gets blurry when your workout data is scattered.
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-balance">
            The hard part is not just writing numbers down. It is knowing what to train today, what you lifted last
            time, and whether you are actually improving.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {problems.map((problem) => (
            <div
              key={problem.label}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700/50 hover:bg-zinc-900/80 transition-all duration-300 text-center"
            >
              <p className="font-display text-2xl md:text-3xl font-bold text-zinc-100 mb-2">{problem.label}</p>
              <p className="text-sm text-zinc-500">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
