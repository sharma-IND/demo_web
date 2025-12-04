"use client"

interface AboutData {
  title: string
  description: string
  highlights: string[]
}

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a quantitative trader and financial engineer with over 8 years of experience in algorithmic
              trading and market analysis. I specialize in developing sophisticated trading strategies backed by
              rigorous statistical analysis and machine learning models.
            </p>
            <p>
              My expertise spans from high-frequency trading systems to long-term portfolio optimization strategies. I
              leverage advanced data analytics, Python, and financial modeling to identify profitable market
              opportunities and mitigate systematic risks.
            </p>
            <p>
              When I&apos;m not analyzing markets or coding strategies, you can find me researching emerging market
              trends, contributing to the trading community, or exploring new quantitative methodologies in finance.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-lg bg-primary/10 border border-primary/20">
              <p className="font-bold text-lg text-foreground mb-2">Algorithmic Strategy Analysis</p>
              <p className="text-sm text-muted-foreground">Statistical modeling, Risk analysis</p>
            </div>
            <div className="p-6 rounded-lg bg-accent/10 border border-accent/20">
              <p className="font-bold text-lg text-foreground mb-2">Trading Systems</p>
              <p className="text-sm text-muted-foreground">Algo strategies, Backtesting, Optimization</p>
            </div>
            <div className="p-6 rounded-lg bg-primary/10 border border-primary/20">
              <p className="font-bold text-lg text-foreground mb-2">Programming</p>
              <p className="text-sm text-muted-foreground">Python, Machine Learning, Rest APIs</p>
            </div>
            <div className="p-6 rounded-lg bg-accent/10 border border-accent/20">
              <p className="font-bold text-lg text-foreground mb-2">Market Data</p>
              <p className="text-sm text-muted-foreground">Real-time feeds, Data processing, Visualization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
