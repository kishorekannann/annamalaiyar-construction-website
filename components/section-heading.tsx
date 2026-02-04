"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  centered?: boolean
  className?: string
  light?: boolean
}

export function SectionHeading({
  label,
  title,
  description,
  centered = false,
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(centered && "text-center", className)}
    >
      {label && (
        <span
          className={cn(
            "text-sm font-medium tracking-wider uppercase mb-2 block",
            light ? "text-primary-foreground/70" : "text-primary"
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-heading)] text-balance",
          light ? "text-primary-foreground" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-lg max-w-2xl leading-relaxed",
            centered && "mx-auto",
            light ? "text-primary-foreground/80" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
