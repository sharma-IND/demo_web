"use client"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
      <div className="flex flex-col gap-8 animate-fade-in-up">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-mono text-accent animate-fade-in-up stagger-1">I am</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance animate-fade-in-up stagger-2">
              Deepak Kumar Sharma
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground animate-fade-in-up stagger-3">
              Stock Market Analyst & Algorithmic Strategy Builder
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-up stagger-2">
            I develop data-driven trading strategies and advanced quantitative analysis tools. Specializing in market
            analysis, algorithm optimization, and backtesting frameworks that generate consistent returns in dynamic
            market conditions.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up stagger-3">
            <Link
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition"
            >
              View Strategies
            </Link>
            <a
              href="#contact"
              className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
          <div className="animate-fade-in-up stagger-1">
            <p className="text-3xl sm:text-4xl font-bold text-accent">50+</p>
            <p className="text-sm text-muted-foreground">Strategies Analyzed</p>
          </div>
          <div className="animate-fade-in-up stagger-2">
            <p className="text-3xl sm:text-4xl font-bold text-accent">8+</p>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div className="animate-fade-in-up stagger-3">
            <p className="text-3xl sm:text-4xl font-bold text-accent">₹100K+</p>
            <p className="text-sm text-muted-foreground">Assets Managed</p>
          </div>
        </div>
      </div>
    </section>
  )
}
