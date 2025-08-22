import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Phomas Diagnostics | Trusted Lab & Medical Supplies Partner in Tanzania",
  description:
    "Phomas Diagnostics and Medical Supplies Ltd supplies laboratory equipment, IVD reagents, and consumables in Tanzania. Partnered with Avantor/VWR for global-quality products delivered locally.",
  keywords: "medical supplies, laboratory equipment, IVD reagents, Tanzania, Dar es Salaam, Avantor, VWR",
  icons: {
    icon: "/favicon.ico",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
