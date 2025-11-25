"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { flushSync } from "react-dom"

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const ref = React.useRef<HTMLButtonElement>(null)

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

  const isDark = resolvedTheme === "dark"

  const toggleTheme = async () => {
    const newTheme = isDark ? "light" : "dark"

    const rect = ref.current?.getBoundingClientRect()
    const x = rect ? rect.left + rect.width / 2 : innerWidth / 2
    const y = rect ? rect.top + rect.height / 2 : innerHeight / 2

    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )

    // @ts-ignore
    if (!document.startViewTransition) {
      setTheme(newTheme)
      return
    }

    // @ts-ignore
    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme)
      })
    })

    await transition.ready

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    )
  }

  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={cn(
        "group relative flex size-12 items-center justify-center rounded-full border border-border/40 bg-background/50 backdrop-blur-sm transition-colors hover:border-border hover:bg-accent/50 shadow-sm",
        className
      )}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={resolvedTheme}
          initial={{ scale: 0, rotate: -90, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          exit={{ scale: 0, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {isDark ? (
            <Moon className="size-5 text-blue-400 fill-blue-400/20" />
          ) : (
            <Sun className="size-5 text-orange-500 fill-orange-500/20" />
          )}
        </motion.div>
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </motion.button>
  )
}
