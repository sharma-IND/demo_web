export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Let&apos;s Work Together</h2>
          <p className="text-lg text-muted-foreground">
            Whether you have a project in mind or just want to chat, feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:dk.sharma@wassup.co.in?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition inline-block"
          >
            Send Email
          </a>
          <a
            href="https://wa.me/919855869447?text=Hello%20I%20would%20like%20to%20connect"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition inline-block"
          >
            Schedule a Call
          </a>
        </div>

        <div className="flex justify-center gap-6 pt-8">
          <a
          href="https://github.com/sharma-IND" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition" title="GitHub" >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition" title="LinkedIn">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.002 1.413-.103.249-.129.597-.129.946v5.446h-3.554s.05-8.836 0-9.754h3.554v1.391c.432-.668 1.202-1.618 2.923-1.618 2.136 0 3.736 1.393 3.736 4.38v5.601zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.77-1.71 1.963-1.71 1.193 0 1.915.755 1.93 1.71 0 .951-.737 1.71-1.978 1.71zm1.582 11.597H3.714V9.553h3.205v10.899zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition" title="Twitter">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-3-10.67z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
