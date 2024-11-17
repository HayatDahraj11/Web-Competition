// src/components/sections/HeroSection.tsx
'use client'

import { motion } from "framer-motion"
import { Search, Calendar, MapPin, Plane } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        {/* Animated Gradient Overlay */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "linear-gradient(to right, #4f46e5, #7c3aed)",
              "linear-gradient(to right, #7c3aed, #db2777)",
              "linear-gradient(to right, #db2777, #4f46e5)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold tracking-tight text-white sm:text-7xl">
            Your All-in-One
            <span className="block mt-2 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Booking Platform
            </span>
          </h1>
          <p className="mt-6 text-xl text-neutral-200 max-w-2xl mx-auto">
            Book flights, buses, movies, and events seamlessly. Experience the future of booking.
          </p>
        </motion.div>

        {/* Search Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12"
        >
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8">
            <CategoryTabs />
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-center justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

function CategoryTabs() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-4">
        <TabButton active>
          <Plane className="h-4 w-4 mr-2" />
          Flights
        </TabButton>
        <TabButton>
          <Search className="h-4 w-4 mr-2" />
          Movies
        </TabButton>
        <TabButton>
          <Calendar className="h-4 w-4 mr-2" />
          Events
        </TabButton>
        <TabButton>
          <MapPin className="h-4 w-4 mr-2" />
          Buses
        </TabButton>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SearchInput
          icon={<MapPin className="h-5 w-5 text-neutral-500" />}
          placeholder="Where from?"
        />
        <SearchInput
          icon={<MapPin className="h-5 w-5 text-neutral-500" />}
          placeholder="Where to?"
        />
        <SearchInput
          icon={<Calendar className="h-5 w-5 text-neutral-500" />}
          placeholder="Select date"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:from-purple-700 hover:to-pink-700"
      >
        Search
      </motion.button>
    </div>
  )
}

function TabButton({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center px-6 py-3 rounded-xl font-medium transition-colors ${
        active 
          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" 
          : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
      }`}
    >
      {children}
    </motion.button>
  )
}

function SearchInput({ icon, placeholder }: { icon: React.ReactNode; placeholder: string }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        {icon}
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-4 rounded-xl border border-neutral-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none bg-white/80 backdrop-blur-sm"
      />
    </div>
  )
}