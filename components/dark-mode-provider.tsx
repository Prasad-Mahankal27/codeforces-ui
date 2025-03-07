"use client"

import { createContext, useContext, useEffect, useState } from "react"

type DarkModeContextType = {
  darkMode: boolean
  toggleDarkMode: () => void
}

const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
})

export const useDarkMode = () => useContext(DarkModeContext)

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Get initial dark mode preference from localStorage or system preference
    const savedDarkMode = localStorage.getItem("darkMode")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode === "true")
    } else {
      setDarkMode(prefersDark)
    }
    
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      // Update document class and save preference to localStorage
      if (darkMode) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
      localStorage.setItem("darkMode", darkMode.toString())
    }
  }, [darkMode, mounted])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}