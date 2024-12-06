import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import Flex from "./components/ui/flex"
import "./globals.css"
import Footer from "./components/footer"
import Header from "./components/header"

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "TehcCringe",
  description: "Open source satirical tech news outlet",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.className} antialiased bg-base text-text`}
      >
        <Flex col className="min-h-screen divide-y divide-surface1">
          <Header />
          {children}
        </Flex>

        <Footer />
      </body>
    </html>
  )
}
