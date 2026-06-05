import { BarChart3, CheckCircle2, Clock3, Dumbbell, History, WifiOff } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    title: "Fast set logging",
    description: "Record weight, reps, and completed sets without turning your workout into admin work.",
    icon: CheckCircle2,
    preview: ["Weight", "72.5 kg", "Reps", "8"],
  },
  {
    title: "Previous lifts visible",
    description: "See what you lifted last time before choosing today's load.",
    icon: History,
    preview: ["Last", "70 kg x 8", "Today", "72.5 kg x 8"],
  },
  {
    title: "Workout history",
    description: "Keep sessions, exercises, sets, and notes in one place.",
    icon: Clock3,
    preview: ["May 16", "Push Day", "6 exercises", "58 min"],
  },
  {
    title: "Personal records",
    description: "Spot meaningful wins like heavier sets, more reps, and new PRs.",
    icon: Dumbbell,
    preview: ["Squat", "100 kg x 5", "PR", "+2.5 kg"],
  },
  {
    title: "Offline-friendly sessions",
    description: "Built for gym floors where the connection is not always reliable.",
    icon: WifiOff,
    preview: ["Local", "Saved", "Network", "Optional"],
  },
  {
    title: "Clear progress",
    description: "Turn raw workout logs into volume, frequency, and exercise trends you can read.",
    icon: BarChart3,
    preview: ["Volume", "+8%", "Week", "3 sessions"],
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="mb-4 text-sm font-medium text-[#cfbcff]">Features</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
            The essentials for every training session.
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-balance">
            Zenlift focuses on the core training loop: plan the routine, log the workout, review the progress, repeat.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <div key={feature.title}>
                <Card className="group h-full overflow-hidden rounded-lg border-zinc-800/50 bg-zinc-900/50 transition-all duration-300 hover:border-zinc-700/50">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800">
                      <Icon className="w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                    </div>
                    <p className="font-heading font-semibold text-zinc-100 mb-2">{feature.title}</p>
                    <p className="text-zinc-500 text-sm">{feature.description}</p>
                    <div className="mt-6 grid grid-cols-2 gap-2 rounded-lg border border-zinc-800 bg-zinc-950/70 p-3">
                      {feature.preview.map((item, itemIndex) => (
                        <span
                          key={`${feature.title}-${item}`}
                          className={itemIndex % 2 === 0 ? "text-xs text-zinc-600" : "text-xs font-medium text-zinc-300"}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
