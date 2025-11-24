import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactPopup } from "@/components/contact-popup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Serow Essentron Pvt. Ltd. - Premium Footwear Solutions",
  description:
    "Authorized distributor for renowned brands like Paragon, Asian, and Jindal. Serving 325+ schools, 100+ medical colleges, and 200+ industries across Andhra Pradesh.",
  keywords:
    "safety shoes, school footwear, healthcare shoes, industrial footwear, Paragon, Asian, Jindal, Andhra Pradesh, Visakhapatnam, footwear distributor",
  authors: [{ name: "Serow Essentron Pvt. Ltd." }],
  creator: "Serow Essentron Pvt. Ltd.",
  publisher: "Serow Essentron Pvt. Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://serowestron.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Serow Essentron Pvt. Ltd. - Premium Footwear Solutions",
    description:
      "Authorized distributor for renowned brands like Paragon, Asian, and Jindal. Serving 325+ schools, 100+ medical colleges, and 200+ industries.",
    url: "https://serowestron.com",
    siteName: "Serow Essentron",
    images: [
      {
        url: "/images/serow-logo.png",
        width: 1200,
        height: 630,
        alt: "Serow Essentron - Premium Footwear Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serow Essentron Pvt. Ltd. - Premium Footwear Solutions",
    description:
      "Authorized distributor for renowned brands. Serving 325+ schools, 100+ medical colleges, and 200+ industries.",
    images: ["/images/serow-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: "/images/serow-logo.png",
    shortcut: "/images/serow-logo.png",
    apple: "/images/serow-logo.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/images/serow-logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1f2937" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ContactPopup />
      </body>
    </html>
  )
}
