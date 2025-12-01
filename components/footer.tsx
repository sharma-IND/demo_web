export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
          <div>
            <p className="font-bold">Your Name</p>
            <p className="text-sm text-muted-foreground">Full-Stack Developer & Designer</p>
          </div>
          <nav className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
              RSS
            </a>
          </nav>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
