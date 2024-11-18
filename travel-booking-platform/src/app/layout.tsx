// src/app/layout.tsx
import "./globals.css"
import { Inter } from "next/font/google"
 import Navbar from '@/components/shared/Navbar' // Adjust the import path based on your structure

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
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}