import * as React from "react"
import { cn } from "@/lib/utils"

function Card({ className, ...props }) {
  return (
    <div
      className={cn("rounded-xl border border-border bg-background text-foreground shadow", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }) {
  return (
    <div className={cn("p-6 pt-0", className)} {...props} />
  )
}

function CardHeader({ className, ...props }) {
  return (
    <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  )
}

function CardTitle({ className, ...props }) {
  return (
    <div className={cn("font-semibold leading-none tracking-tight", className)} {...props} />
  )
}

export { Card, CardContent, CardHeader, CardTitle }
