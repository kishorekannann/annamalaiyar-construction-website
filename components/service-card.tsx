"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  index?: number
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={cn(
        "group p-6 bg-card rounded-xl border border-border",
        "hover:shadow-lg hover:border-primary/20 transition-all duration-300"
      )}
    >
      <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary transition-colors duration-300">
        <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
      </div>
      <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-heading)] text-card-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}
