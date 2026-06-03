import type { Metadata } from "next"
import { Cormorant_Garamond, Noto_Serif_SC } from "next/font/google"
import "./globals.css"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
})

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-noto-sc",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "YOUR_NAME",
  description: "A personal universe",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${notoSerifSC.variable}`}>
      <body className="min-h-screen">
        {/* Noise/grain overlay — pointer-events-none so it never blocks clicks */}
        <div
          aria-hidden="true"
          className="grain fixed inset-0 pointer-events-none z-[1] opacity-[0.06] mix-blend-overlay"
        />
        {/* Site content — sits above grain at z-10; nav is z-50 inside this context */}
        <div className="relative z-[10] flex flex-col min-h-screen">
          <Nav />
          <main className="flex-1 w-full max-w-[720px] lg:max-w-[900px] mx-auto px-6 lg:px-8 py-20 lg:py-32">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
