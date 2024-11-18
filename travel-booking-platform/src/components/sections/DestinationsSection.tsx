
// src/components/sections/DestinationsSection.tsx
'use client'

import { motion, useAnimation, useInView } from "framer-motion"
import { 
  Plane, Building, Ticket, MapPin, Star, 
  ArrowRight, TrendingUp, Sparkles, Navigation 
} from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'

// Types for better type safety
interface Destination {
  id: string;
  city: string;
  country: string;
  image: string;
  price: string;
  rating: number;
  trending: boolean;
  gradient: string;
  description: string;
  attractions: string[];
  shortDescription: string;
  href: string;
}

interface SpecialOffer {
  id: string;
  title: string;
  discount: string;
  description: string;
  icon: any; // LucideIcon type
  color: string;
  bgPattern: string;
  href: string;
}

// Data
const popularDestinations: Destination[] = [
  {
    id: 'ny',
    city: "New York",
    country: "USA",
    image: "/images/destinations/new-york.jpg",
    price: "From $299",
    rating: 4.8,
    trending: true,
    gradient: "from-blue-600 to-indigo-600",
    description: "The city that never sleeps",
    shortDescription: "Experience the magic of the Big Apple",
    attractions: ["Central Park", "Times Square", "Empire State"],
    href: "/destinations/new-york"
  },
  {
    id: 'paris',
    city: "Paris",
    country: "France",
    image: "/images/destinations/paris.jpg",
    price: "From $449",
    rating: 4.9,
    trending: true,
    gradient: "from-purple-600 to-pink-600",
    description: "City of Love",
    shortDescription: "Discover the romance of Paris",
    attractions: ["Eiffel Tower", "Louvre", "Notre-Dame"],
    href: "/destinations/paris"
  },
  {
    id: 'dubai',
    city: "Dubai",
    country: "UAE",
    image: "/images/destinations/dubai.jpg",
    price: "From $599",
    rating: 4.7,
    trending: true,
    gradient: "from-yellow-600 to-red-600",
    description: "Luxury in the Desert",
    shortDescription: "Experience luxury redefined",
    attractions: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah"],
    href: "/destinations/dubai"
  },
  {
    id: 'tokyo',
    city: "Tokyo",
    country: "Japan",
    image: "/images/destinations/tokyo.jpg",
    price: "From $699",
    rating: 4.9,
    trending: false,
    gradient: "from-pink-600 to-rose-600",
    description: "Where Tradition Meets Future",
    shortDescription: "Explore the city of the future",
    attractions: ["Shibuya", "Tokyo Tower", "Senso-ji"],
    href: "/destinations/tokyo"
  }
]

const specialOffers: SpecialOffer[] = [
  {
    id: 'weekend',
    title: "Weekend Gateway",
    discount: "20% OFF",
    description: "Book your weekend flights",
    icon: Plane,
    color: "from-blue-500 to-indigo-500",
    bgPattern: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
    href: "/offers/weekend-gateway"
  },
  {
    id: 'city',
    title: "City Tours",
    discount: "15% OFF",
    description: "Explore city attractions",
    icon: Building,
    color: "from-purple-500 to-pink-500",
    bgPattern: "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)",
    href: "/offers/city-tours"
  },
  {
    id: 'events',
    title: "Event Tickets",
    discount: "10% OFF",
    description: "Book event tickets early",
    icon: Ticket,
    color: "from-orange-500 to-red-500",
    bgPattern: "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)",
    href: "/offers/event-tickets"
  }
]



// Continue in the same file...

// Helper components for better organization
const DestinationCard = ({ destination }: { destination: Destination }) => {
  return (
    <Link href={destination.href}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -10, scale: 1.02 }}
        className="group relative rounded-3xl overflow-hidden shadow-lg cursor-pointer h-[400px]"
      >
        <div className="absolute inset-0">
          <Image
            src={destination.image}
            alt={destination.city}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">{destination.city}</h3>
              <p className="text-white/90 text-sm mb-3">{destination.country}</p>
              <p className="text-white/80 text-sm mb-4">{destination.shortDescription}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {destination.attractions.map((attraction, i) => (
                  <span 
                    key={i}
                    className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-white"
                  >
                    {attraction}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="text-white font-medium">{destination.rating}</span>
              </div>
              {destination.trending && (
                <motion.div
                  className="flex items-center bg-emerald-500/20 backdrop-blur-sm px-2 py-1 rounded-full"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <TrendingUp className="h-4 w-4 text-emerald-400 mr-1" />
                  <span className="text-emerald-400 text-sm">Trending</span>
                </motion.div>
              )}
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-white text-lg font-bold">{destination.price}</span>
            <motion.span 
              className="text-white/90 flex items-center gap-1 text-sm"
              whileHover={{ x: 5 }}
            >
              View Details <ArrowRight className="h-4 w-4" />
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  )
}

const SpecialOfferCard = ({ offer }: { offer: SpecialOffer }) => {
  return (
    <Link href={offer.href}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        viewport={{ once: true }}
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${offer.color} p-8 text-white cursor-pointer h-full`}
      >
        <motion.div
          className="absolute top-4 right-4"
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <offer.icon className="h-8 w-8" />
        </motion.div>
        
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
          <p className="text-4xl font-bold mb-4">{offer.discount}</p>
          <p className="text-white/80 mb-6">{offer.description}</p>
          
          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center text-sm font-semibold"
          >
            Book Now
            <ArrowRight className="h-4 w-4 ml-2" />
          </motion.div>
        </div>

        {/* Animated Background Pattern */}
        <motion.div
          className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-white/10"
          style={{ backgroundImage: offer.bgPattern }}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </motion.div>
    </Link>
  )
}


// Continue in the same file...

export function DestinationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section className="relative py-24 overflow-visible" ref={ref}>
      {/* Animated Background with reduced opacity */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-purple-50/30 to-pink-50/30" />
        
        {/* Animated Circles with reduced opacity */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-200/10 to-pink-200/10 backdrop-blur-sm"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 50, 0],
              x: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Popular Destinations Section */}
        <div className="mb-24">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-center mb-16"
          >
            {/* Title Decoration */}
            <motion.div 
              className="absolute -top-10 left-1/2 -translate-x-1/2"
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Sparkles className="h-8 w-8 text-purple-500 opacity-50" />
            </motion.div>

            <motion.h2 
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600"
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
              Popular Destinations
            </motion.h2>

            {/* Animated underline */}
            <motion.div
              className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-full mt-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            <motion.p 
              className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Discover amazing places and plan your next adventure
            </motion.p>
          </motion.div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <DestinationCard destination={destination} />
              </motion.div>
            ))}
          </div>

          {/* View All Destinations Button */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/destinations">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Explore All Destinations
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Special Offers Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
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
              Special Offers
            </motion.h2>
            <motion.p 
              className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Exclusive deals and discounts for your next journey
            </motion.p>
          </motion.div>

          {/* Offers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialOffers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <SpecialOfferCard offer={offer} />
              </motion.div>
            ))}
          </div>

          {/* View All Offers Button */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/offers">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full border-2 border-purple-600 text-purple-600 font-semibold hover:bg-purple-50 transition-colors"
              >
                View All Offers
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


