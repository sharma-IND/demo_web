"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

import Script from "next/script";

<Script
  id="schema-person"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Deepak Kumar Sharma",
      url: "https://deepakkumarsharma.com",
      jobTitle: "Stock Market Analyst & Algo Strategy Builder",
      sameAs: [
        "https://www.linkedin.com/in/YOUR",
        "https://github.com/YOUR",
        "https://twitter.com/YOUR"
      ],
    }),
  }}
/>



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
