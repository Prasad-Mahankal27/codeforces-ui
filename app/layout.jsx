"use client"

import { useEffect } from "react"
import "./globals.css"

export default function RootLayout({ children }) {
  // Enable smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen">{children}</body>
    </html>
  )
}



import './globals.css'

