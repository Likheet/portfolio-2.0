"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={cn("size-12 flex items-center justify-center", className)}>
        <div className="size-5 rounded-full bg-muted/20" />
      </div>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "group relative flex size-12 items-center justify-center rounded-full transition-colors hover:bg-accent/50",
        className
      )}
      aria-label="Toggle theme"
    >
      <Sun className="absolute size-6 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-orange-500" />
      <Moon className="absolute size-6 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-blue-400" />
    </button>
  )
}
