"use client"

import { SectionReveal } from "@/components/ui/section-reveal"

const processSteps = [
  {
    phase: "Phase 1",
    title: "Initial Assessment",
    duration: "Week 1",
    tasks: ["Project scope definition", "Data collection requirements", "Timeline and budget agreement"],
  },
  {
    phase: "Phase 2",
    title: "Market Research",
    duration: "Week 2-3",
    tasks: ["Market size analysis", "Competitive landscape", "Demand assessment", "Trend analysis"],
  },
  {
    phase: "Phase 3",
    title: "Technical Analysis",
    duration: "Week 3-4",
    tasks: ["Technical requirements", "Resource assessment", "Location analysis", "Operational planning"],
  },
  {
    phase: "Phase 4",
    title: "Financial Modeling",
    duration: "Week 4-5",
    tasks: ["Cost estimation", "Revenue projections", "Cash flow analysis", "Sensitivity analysis"],
  },
  {
    phase: "Phase 5",
    title: "Risk Assessment",
    duration: "Week 5-6",
    tasks: ["Risk identification", "Mitigation strategies", "Scenario planning", "Contingency recommendations"],
  },
  {
    phase: "Phase 6",
    title: "Final Report",
    duration: "Week 6-7",
    tasks: ["Comprehensive documentation", "Executive summary", "Recommendations", "Presentation to stakeholders"],
  },
]

export function FeasibilityProcess() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <span className="text-consulting text-sm font-semibold uppercase tracking-wider mb-4 block">Methodology</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Our Study Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A systematic approach ensuring thorough analysis and reliable conclusions.
          </p>
        </SectionReveal>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border transform -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {processSteps.map((step, index) => (
              <SectionReveal key={step.phase} delay={index * 0.1}>
                <div
                  className={`lg:flex items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"}`}>
                    <div
                      className={`bg-card border border-border rounded-xl p-6 inline-block text-left ${index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"}`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-consulting font-semibold">{step.phase}</span>
                        <span className="text-muted-foreground text-sm">• {step.duration}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                      <ul className="space-y-2">
                        {step.tasks.map((task) => (
                          <li key={task} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-consulting rounded-full mt-2 flex-shrink-0" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden lg:flex w-8 h-8 bg-consulting rounded-full items-center justify-center flex-shrink-0 relative z-10">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
