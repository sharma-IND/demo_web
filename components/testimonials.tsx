export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Anderson",
      role: "Product Manager",
      company: "TechCorp",
      text: "Working with this developer was an absolute pleasure. They delivered high-quality code on time and were always responsive to feedback.",
      avatar: "SA",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Startup Founder",
      company: "InnovateLabs",
      text: "Exceptional problem-solving skills and attention to detail. They transformed our vision into a robust, scalable platform that our users love.",
      avatar: "MC",
    },
    {
      id: 3,
      name: "Emma Watson",
      role: "Design Lead",
      company: "Creative Agency",
      text: "Great collaboration and communication throughout the project. They understood our design requirements and brought them to life beautifully.",
      avatar: "EW",
    },
  ]

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-border bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Clients Say</h2>
          <p className="text-lg text-muted-foreground">Feedback from people I&apos;ve worked with</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <p className="text-muted-foreground mb-6 leading-relaxed italic">&quot;{testimonial.text}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
