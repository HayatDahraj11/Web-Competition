// src/components/sections/HeroSection.tsx
'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Search, Calendar, MapPin, Plane, Film, Bus, Ticket, X } from "lucide-react"

const categories = [
  { id: 'flights', icon: Plane, label: 'Flights', color: 'from-blue-600 to-indigo-600' },
  { id: 'movies', icon: Film, label: 'Movies', color: 'from-purple-600 to-pink-600' },
  { id: 'events', icon: Ticket, label: 'Events', color: 'from-orange-600 to-red-600' },
  { id: 'buses', icon: Bus, label: 'Buses', color: 'from-green-600 to-teal-600' },
]

export function HeroSection() {
  const [activeCategory, setActiveCategory] = useState('flights')
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  // Floating animation for background elements
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="relative min-h-[90vh] overflow-visible">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
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
        
        {/* Floating Elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-3xl"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            transition={{ delay: i * 0.2 }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl font-bold tracking-tight text-white sm:text-7xl">
              Your All-in-One
              <motion.span
                className="block mt-2 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"
                animate={{ 
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ backgroundSize: "200%" }}
              >
                Booking Platform
              </motion.span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-xl text-neutral-200 max-w-2xl mx-auto"
          >
            Book flights, buses, movies, and events seamlessly. Experience the future of booking.
          </motion.p>
        </motion.div>

        {/* Search Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12"
        >
          <motion.div
            className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8"
            whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            animate={isSearchFocused ? { scale: 1.02 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-8">
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-4 justify-center">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300
                      ${activeCategory === category.id 
                        ? `bg-gradient-to-r ${category.color} text-white` 
                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: activeCategory === category.id ? 360 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <category.icon className="h-4 w-4 mr-2" />
                    </motion.div>
                    {category.label}
                  </motion.button>
                ))}
              </div>

              {/* Search Fields */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  <SearchInput
                    icon={<MapPin className="h-5 w-5 text-neutral-500" />}
                    placeholder="Where from?"
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                  />
                  <SearchInput
                    icon={<MapPin className="h-5 w-5 text-neutral-500" />}
                    placeholder="Where to?"
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                  />
                  <SearchInput
                    icon={<Calendar className="h-5 w-5 text-neutral-500" />}
                    placeholder="Select date"
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-gradient-to-r ${categories.find(c => c.id === activeCategory)?.color} 
                  text-white py-4 rounded-xl font-medium transition-all duration-300`}
              >
                Search {categories.find(c => c.id === activeCategory)?.label}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

    {/* Enhanced Scroll Indicator */}
<motion.div
  className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20" // Updated position
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 1.5, repeat: Infinity }}
>
  <motion.div
    className="w-8 h-12 rounded-full border-2 border-white/30 flex items-center justify-center"
    whileHover={{ scale: 1.2, borderColor: "rgba(255,255,255,0.5)" }}
  >
    <motion.div
      className="w-1.5 h-1.5 bg-white rounded-full"
      animate={{
        y: [0, 12, 0],
        opacity: [1, 0.5, 1]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </motion.div>
</motion.div>

{/* Add the curved bottom here */}
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    <svg
      className="relative block w-full h-[100px] sm:h-[150px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
        className="fill-white"
      />
    </svg>
  </motion.div>
</div>

{/* Background Extension */}
<div className="absolute bottom-0 left-0 w-full h-20 bg-white transform translate-y-1/2" />

</section>

    
  )
}

interface SearchInputProps {
  icon: React.ReactNode;
  placeholder: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

function SearchInput({ icon, placeholder, onFocus, onBlur }: SearchInputProps) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <motion.div
      className="relative"
      whileFocus={{ scale: 1.02 }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="absolute left-4 top-1/2 -translate-y-1/2"
        animate={isFocused ? { scale: 1.2 } : { scale: 1 }}
      >
        {icon}
      </motion.div>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-4 rounded-xl border border-neutral-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 outline-none bg-white/80 backdrop-blur-sm"
        onFocus={() => {
          setIsFocused(true)
          onFocus?.()
        }}
        onBlur={() => {
          setIsFocused(false)
          onBlur?.()
        }}
      />
    </motion.div>
  )
}