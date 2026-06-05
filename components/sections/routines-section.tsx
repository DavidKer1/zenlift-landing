import { Check } from "lucide-react"

const routines = [
  {
    name: "Push/Pull/Legs",
    description: "Organize high-frequency training days without rebuilding the same workout every week.",
    details: ["Push day", "Pull day", "Leg day"],
  },
  {
    name: "Upper/Lower",
    description: "Keep strength and hypertrophy work split into simple repeatable sessions.",
    details: ["Upper body", "Lower body", "Flexible weekly rhythm"],
  },
  {
    name: "Custom routines",
    description: "Create your own days, exercises, target sets, reps, and notes.",
    details: ["Any split", "Any exercise order", "Personal notes"],
  },
]

export function RoutinesSection() {
  return (
    <section id="routines" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Routines</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            Build the way you actually train.
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-balance text-lg">
            Zenlift supports common gym structures without forcing you into one rigid program.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {routines.map((routine) => (
            <div key={routine.name} className="p-8 rounded-2xl border flex flex-col h-full bg-zinc-900/50 border-zinc-800/50">
              <div className="mb-6">
                <h3 className="font-heading text-xl font-semibold mb-2 text-zinc-100">{routine.name}</h3>
                <p className="text-sm text-zinc-500">{routine.description}</p>
              </div>

              <ul className="space-y-3 mt-auto">
                {routine.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0 text-zinc-400" />
                    <span className="text-sm text-zinc-400">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
