"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center font-mono font-bold text-primary-foreground">
            DS
          </div>
          <span className="font-bold text-xl hidden sm:inline">Deepak Kumar Sharma</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition">
            About
          </a>
          <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition">
            Projects
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition">
            Contact
          </a>
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg transition">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed left-0 right-0 top-16 z-40 border-b border-border bg-background/95 backdrop-blur">
          <nav className="flex flex-col px-4 py-4 gap-4 max-w-6xl mx-auto">
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
