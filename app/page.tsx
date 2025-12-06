"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col relative">
      <div className="animated-gradient" />

      <Header />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Blog />
      <h2><Contact /></h2>
      <Footer />
    </div>
  )
}
