// src/app/page.tsx
'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Plane, Bus, Film, ArrowRight } from "lucide-react"
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* New Hero Section Component */}
      <HeroSection />

      {/* Original Gradient Section */}
      <div className="relative isolate">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </motion.div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Popular Destinations
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our most booked destinations and special offers
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/explore"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500"
                >
                  Explore All
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/offers"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  View Offers
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* New Features Section Component */}
      <FeaturesSection />

      {/* Original Features Grid */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Quick Bookings
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {/* Flight Booking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Flight Booking
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Search and book flights with real-time availability and competitive prices.</p>
                <p className="mt-6">
                  <Link href="/flights" className="text-sm font-semibold leading-6 text-indigo-600">
                    Book a flight <span aria-hidden="true">→</span>
                  </Link>
                </p>
              </dd>
            </motion.div>

            {/* Bus Booking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col"
            >
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Bus Booking
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Find and book bus tickets for your next journey with ease.</p>
                <p className="mt-6">
                  <Link href="/buses" className="text-sm font-semibold leading-6 text-indigo-600">
                    Book a bus <span aria-hidden="true">→</span>
                  </Link>
                </p>
              </dd>
            </motion.div>

            {/* Movie Booking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col"
            >
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Movie Booking
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Book movie tickets for the latest shows at your favorite theaters.</p>
                <p className="mt-6">
                  <Link href="/movies" className="text-sm font-semibold leading-6 text-indigo-600">
                    Book a movie <span aria-hidden="true">→</span>
                  </Link>
                </p>
              </dd>
            </motion.div>
          </dl>
        </div>
      </div>
    </main>
  )
}