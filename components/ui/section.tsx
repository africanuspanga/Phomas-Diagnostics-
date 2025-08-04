import type React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export default function Section({ children, className, ...props }: SectionProps) {
  return (
    <section className={cn(className)} {...props}>
      {children}
    </section>
  )
}
