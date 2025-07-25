import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Hauora - Luxury Jewelry & Bracelets | Premium Wrist Accessories",
  description:
    "Discover Hauora's exclusive collection of luxury bracelets and wrist accessories. Handcrafted jewelry designed for those who appreciate the finest things in life.",
  keywords: "luxury jewelry, bracelets, wrist accessories, premium jewelry, handcrafted, luxury fashion",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
