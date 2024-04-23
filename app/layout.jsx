import React from "react"
import "@/assets/styles/globals.css"

import { Footer, Navbar } from "@/components"
export const metadata = {
  title: "PropertyPulse",
  description: "Find your dream rental property",
}

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        <main className="min-h-full">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default MainLayout
