const insights = [
  {
    label: "Volume trend",
    text: "Bench Press volume is up this week.",
  },
  {
    label: "Personal record",
    text: "New PR: Squat 100 kg x 5.",
  },
  {
    label: "Consistency",
    text: "You trained 3 days this week.",
  },
]

export function ProgressSection() {
  return (
    <section id="progress" className="bg-zinc-900/30 px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center justify-center">
          <div className="rounded-full border border-zinc-800 px-4 py-1.5 text-sm text-[#cfbcff]">Progress</div>

          <h2 className="font-display mt-6 text-center text-4xl font-bold text-zinc-100 md:text-5xl">
            Progress you can actually read.
          </h2>
          <p className="text-center mt-4 text-zinc-500 text-lg text-balance">
            Zenlift turns workout logs into practical signals: stronger sets, better consistency, and clearer training
            history.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-lg border border-zinc-800/60 bg-zinc-950/70 p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-zinc-100">Bench Press</p>
                <p className="text-xs text-zinc-500">Estimated progress</p>
              </div>
              <span className="rounded-full bg-[#cfbcff] px-3 py-1 text-xs font-semibold text-zinc-950">+8%</span>
            </div>
            <div className="flex h-44 items-end gap-2">
              {[35, 48, 42, 58, 64, 72, 78, 84].map((height, index) => (
                <div key={index} className="h-full flex-1 rounded-t bg-zinc-800">
                  <div
                    className="rounded-t bg-gradient-to-t from-zinc-500 to-[#cfbcff]"
                    style={{ height: `${height}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
          {insights.map((insight) => (
            <div
              key={insight.label}
              className="rounded-lg border border-zinc-800/50 bg-zinc-950/60 p-5"
            >
              <p className="mb-3 text-sm text-zinc-600">{insight.label}</p>
              <p className="font-display text-xl leading-tight text-zinc-100">{insight.text}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
