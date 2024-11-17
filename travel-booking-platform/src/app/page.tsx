// src/app/page.tsx
'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Plane, Bus, Film, ArrowRight, Clock, Shield, Sparkles } from "lucide-react"
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import Navbar from '@/components/sections/Navbar'

const features = [
  {
    title: "Flight Booking",
    description: "Search and book flights with real-time availability and competitive prices.",
    icon: Plane,
    href: "/flights",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Bus Booking",
    description: "Find and book bus tickets for your next journey with ease.",
    icon: Bus,
    href: "/buses",
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Movie Booking",
    description: "Book movie tickets for the latest shows at your favorite theaters.",
    icon: Film,
    href: "/movies",
    color: "from-purple-500 to-pink-500",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
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

      <FeaturesSection />

      {/* Enhanced Features Grid */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 relative">
        {/* Background Decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-50" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Quick Bookings
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Fast and efficient booking for all your needs
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl">
                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </motion.div>

                  {/* Content */}
                  <dt className="text-lg font-semibold leading-7 text-gray-900">
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center"
                      >
                        <Link 
                          href={feature.href} 
                          className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >
                          Book now 
                          <motion.span 
                            className="ml-2"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </Link>
                      </motion.div>
                    </p>
                  </dd>
                </div>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300"
                     style={{
                       background: `linear-gradient(to right, var(--${feature.color}-from), var(--${feature.color}-to))`,
                     }}
                />
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  )
}