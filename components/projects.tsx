"use client"

import { useState } from "react"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  image: string
  alt: string
  tags: string[]
  link: string
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "High-Frequency Trading Bot",
      description: "Algorithmic trading system with sub-millisecond latency and advanced execution strategies",
      image: "/trading-bot.jpg",
      alt: "High-Frequency Trading Bot",
      tags: ["Python", "Real-time Data"],
      link: "#",
    },
    {
      id: 2,
      title: "Portfolio Optimization Engine",
      description: "Mean-variance optimization and Monte Carlo simulations for dynamic portfolio allocation",
      image: "/portfolio-optimization.jpg",
      alt: "Portfolio Optimization Engine",
      tags: ["NumPy", "Pandas", "PyTorch"],
      link: "#",
    },
    {
      id: 3,
      title: "Market Analysis Dashboard",
      description: "Real-time market data visualization with technical indicators and sentiment analysis",
      image: "/market-dashboard.jpg",
      alt: "Market Analysis Dashboard",
      tags: ["Django", "Flask", "Rest APIs"],
      link: "#",
    },
  ])
  const [loading, setLoading] = useState(false)

  return (
    <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Trading Strategies & Analysis</h2>
          <p className="text-lg text-muted-foreground">A selection of my quantitative strategies and trading systems</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a key={project.id} href={project.link} className="group cursor-pointer">
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-lg bg-muted aspect-video">
                  <Image
                    src={project.image || "/placeholder.svg?height=300&width=400"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg group-hover:text-accent transition">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-accent/10 text-accent rounded border border-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
