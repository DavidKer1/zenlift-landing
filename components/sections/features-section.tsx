"use client"

import { motion } from "framer-motion"
import { BarChart3, CheckCircle2, Clock3, Dumbbell, History, WifiOff } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    title: "Fast set logging",
    description: "Record weight, reps, and completed sets without turning your workout into admin work.",
    icon: CheckCircle2,
  },
  {
    title: "Previous lifts visible",
    description: "See what you lifted last time before choosing today's load.",
    icon: History,
  },
  {
    title: "Workout history",
    description: "Keep sessions, exercises, sets, and notes in one place.",
    icon: Clock3,
  },
  {
    title: "Personal records",
    description: "Spot meaningful wins like heavier sets, more reps, and new PRs.",
    icon: Dumbbell,
  },
  {
    title: "Offline-friendly sessions",
    description: "Built for gym floors where the connection is not always reliable.",
    icon: WifiOff,
  },
  {
    title: "Clear progress",
    description: "Turn raw workout logs into volume, frequency, and exercise trends you can read.",
    icon: BarChart3,
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Features</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
            The essentials for every training session.
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-balance">
            Zenlift focuses on the core training loop: plan the routine, log the workout, review the progress, repeat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="group h-full overflow-hidden border-zinc-800/50 bg-zinc-900/50 hover:border-zinc-700/50 transition-all duration-300 rounded-2xl">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                    </div>
                    <p className="font-heading font-semibold text-zinc-100 mb-2">{feature.title}</p>
                    <p className="text-zinc-500 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
