import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Deepak Kumar Sharma | Stock Market Analyst & Algo Strategy Builder",
  description:
    "Deepak Kumar Sharma is a stock market analyst and algorithmic strategy builder specializing in quantitative trading strategies, backtesting systems, and data-driven market analysis.",
  metadataBase: new URL("https://deepakkumarsharma.com"),
  openGraph: {
    title: "Deepak Kumar Sharma | Stock Market Analyst",
    description:
      "Data-driven algorithmic trading strategies, quantitative research, and market analysis.",
    url: "https://deepakkumarsharma.com",
    siteName: "Deepak Kumar Sharma",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Deepak Kumar Sharma - Stock Market Analyst",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Kumar Sharma | Algo Strategy Builder",
    description:
      "Professional algorithmic trading strategies and quantitative market analysis.",
    images: ["/og-image.jpg"],
  },
  // generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
