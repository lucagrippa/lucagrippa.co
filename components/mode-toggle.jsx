"use client"
import * as React from "react"
import { Sun, Moon } from 'lucide-react';
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button variant="outline" size="icon" onClick={() => theme === 'light' ? setTheme("dark") : setTheme("light")}>
      <Sun className="scale-100 dark:scale-0 text-amber-600" size={20} strokeWidth={1} />
      <Moon className="absolute scale-0 dark:scale-100 text-yellow-200 " size={20} strokeWidth={1} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
