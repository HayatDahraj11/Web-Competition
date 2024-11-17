// src/pages/explore.tsx (or src/app/explore.tsx)
'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Plane, Building, Ticket, MapPin, Star, ArrowRight, TrendingUp } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'

const popularDestinations = [
  {
    city: "New York",
    country: "USA",
    image: "/images/destinations/new-york.jpg",
    price: "From $299",
    rating: 4.8,
    trending: true
  },
  {
    city: "Paris",
    country: "France",
    image: "/images/destinations/paris.jpg",
    price: "From $449",
    rating: 4.9,
    trending: true
  },
  {
    city: "Dubai",
    country: "UAE",
    image: "/images/destinations/dubai.jpg",
    price: "From $599",
    rating: 4.7,
    trending: true
  },
  {
    city: "Tokyo",
    country: "Japan",
    image: "/images/destinations/tokyo.jpg",
    price: "From $699",
    rating: 4.9,
    trending: false
  },
  {
    city: "London",
    country: "UK",
    image: "/images/destinations/london.jpg",
    price: "From $449",
    rating: 4.8,
    trending: true
  },
  {
    city: "Sydney",
    country: "Australia",
    image: "/images/destinations/sydney.jpg",
    price: "From $799",
    rating: 4.7,
    trending: false
  },
  {
    city: "Rome",
    country: "Italy",
    image: "/images/destinations/rome.jpg",
    price: "From $549",
    rating: 4.9,
    trending: true
  },
  {
    city: "Bangkok",
    country: "Thailand",
    image: "/images/destinations/bangkok.jpg",
    price: "From $399",
    rating: 4.6,
    trending: false
  }
]

export default function ExplorePage() {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
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
            Explore All Destinations
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Browse our complete list of popular destinations
          </motion.p>
        </motion.div>

        {/* Destinations Grid */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}