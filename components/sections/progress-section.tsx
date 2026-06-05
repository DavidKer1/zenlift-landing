"use client"

import { motion } from "motion/react"

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
    <section id="progress" className="px-6 py-24 bg-zinc-900/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-12"
        >
          <div className="border border-zinc-800 py-1.5 px-4 rounded-full text-sm text-zinc-400">Progress</div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mt-6 text-center tracking-tight">
            Progress you can actually read.
          </h2>
          <p className="text-center mt-4 text-zinc-500 text-lg text-balance">
            Zenlift turns workout logs into practical signals: stronger sets, better consistency, and clearer training
            history.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-zinc-800/50 bg-zinc-950/60 p-6"
            >
              <p className="text-sm uppercase tracking-wider text-zinc-600 mb-4">{insight.label}</p>
              <p className="font-display text-2xl text-zinc-100 leading-tight">{insight.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
