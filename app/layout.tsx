import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: {
    default: 'Annamalaiyar Construction | Trusted Builders in Tirupur',
    template: '%s | Annamalaiyar Construction'
  },
  description: 'Annamalaiyar Construction is a trusted local builder in Tirupur, Tamil Nadu. We deliver quality residential and commercial construction services with integrity and customer satisfaction.',
  keywords: ['construction', 'builder', 'Tirupur', 'Tamil Nadu', 'residential construction', 'commercial construction', 'home builder', 'villa construction'],
  authors: [{ name: 'Annamalaiyar Construction' }],
  openGraph: {
    title: 'Annamalaiyar Construction | Trusted Builders in Tirupur',
    description: 'Quality residential and commercial construction in Tirupur, built on trust, transparency, and skilled craftsmanship.',
    type: 'website',
    locale: 'en_IN',
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1e3a5f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
