// src/app/page.tsx
'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { DestinationsSection } from '@/components/sections/DestinationsSection'
import CustomerReviews from '@/components/sections/CustomerReviews'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <DestinationsSection />
      <FeaturesSection />
      <CustomerReviews />
    </main>
  )
}