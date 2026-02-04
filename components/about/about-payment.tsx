"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"

const paymentStages = [
  { stage: "Foundation Start", percentage: 25 },
  { stage: "Post Foundation Completion", percentage: 20 },
  { stage: "Roof Stage", percentage: 20 },
  { stage: "Plumbing & Electrical", percentage: 15 },
  { stage: "Tiles & Painting", percentage: 15 },
  { stage: "Final Completion", percentage: 5 },
]

export function AboutPayment() {
  let cumulativePercentage = 0

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          label="Payment Structure"
          title="Payment Schedule"
          description="Transparent milestone-based payment plan for your peace of mind"
          centered
          className="mb-12"
        />

        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative h-4 bg-muted rounded-full overflow-hidden">
              {paymentStages.map((item, index) => {
                const startPercent = cumulativePercentage
                cumulativePercentage += item.percentage
                return (
                  <motion.div
                    key={item.stage}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="absolute top-0 bottom-0 bg-primary"
                    style={{ 
                      left: `${startPercent}%`,
                      opacity: 1 - index * 0.12
                    }}
                  />
                )
              })}
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-4">
            {(() => {
              let cumulative = 0
              return paymentStages.map((item, index) => {
                cumulative += item.percentage
                return (
                  <motion.div
                    key={item.stage}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-xl font-bold text-primary">
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-card-foreground font-[family-name:var(--font-heading)]">
                        {item.stage}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Cumulative: {cumulative}%
                      </p>
                    </div>
                    <div className="hidden sm:block">
                      <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${cumulative}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                )
              })
            })()}
          </div>
        </div>
      </div>
    </section>
  )
}
