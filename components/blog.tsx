export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Machine Learning Applications in Algorithmic Trading",
      excerpt:
        "Exploring neural networks and ensemble methods for predictive market analysis and strategy optimization.",
      date: "Nov 01, 2025",
      readTime: "15 min read",
      category: "AI/ML",
    },
    {
      id: 2,
      title: "Risk Management in Algorithmic Trading",
      excerpt:
        "Essential techniques for portfolio risk assessment, position sizing, and drawdown management strategies.",
      date: "Nov 05, 2025",
      readTime: "10 min read",
      category: "Risk",
    },
    {
      id: 3,
      title: "Backtesting Algo Framework Best Practices",
      excerpt: "Building robust backtesting systems to validate trading strategies and avoid overfitting pitfalls.",
      date: "Dec 01, 2025",
      readTime: "10 min read",
      category: "Development",
    },
  ]

  return (
    <section id="blog" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Market Insights & Analysis</h2>
          <p className="text-lg text-muted-foreground">
            Articles on Algo trading strategies, Algorithmic analysis, and Market trends
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <a
              key={post.id}
              href="#"
              className="group p-6 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-accent/30 transition animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">{post.category}</span>
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
              </div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition line-clamp-2">{post.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
              <p className="text-xs text-muted-foreground">{post.date}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
