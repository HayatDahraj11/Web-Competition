// src/app/layout.tsx
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Travel & Entertainment Booking",
  description: "Book flights, buses, movies and more",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen">
          {/* Navbar will go here */}
          <header className="border-b">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex-shrink-0">
                  {/* Logo */}
                  <h1 className="text-xl font-bold">TravelConnect</h1>
                </div>
                <div className="hidden sm:flex sm:space-x-8">
                  {/* Navigation Links */}
                </div>
              </div>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}