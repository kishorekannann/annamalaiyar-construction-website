"use client"

import { motion } from "framer-motion"
import { ClipboardList, PenTool, HardHat, CheckCircle } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const steps = [
  {
    icon: ClipboardList,
    title: "Planning",
    description: "Understanding requirements, budget, and vision.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Customized plans and modern designs.",
  },
  {
    icon: HardHat,
    title: "Construction",
    description: "Execution with quality materials and skilled teams.",
  },
  {
    icon: CheckCircle,
    title: "Finishing",
    description: "Inspection, detailing, and handover.",
  },
]

export function AboutProcess() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          label="How We Work"
          title="Our Work Process"
          description="A systematic approach to bring your vision to life"
          centered
          className="mb-16"
        />

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs font-bold flex items-center justify-center z-10">
                  {index + 1}
                </div>

                <div className="bg-card p-6 pt-8 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="mx-auto p-4 bg-primary/10 rounded-full w-fit mb-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)] text-card-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
