'use client'

import { motion } from "framer-motion"
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
  }
]

const specialOffers = [
  {
    title: "Weekend Gateway",
    discount: "20% OFF",
    description: "Book your weekend flights",
    icon: Plane,
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "City Tours",
    discount: "15% OFF",
    description: "Explore city attractions",
    icon: Building,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Event Tickets",
    discount: "10% OFF",
    description: "Book event tickets early",
    icon: Ticket,
    color: "from-orange-500 to-red-500"
  }
]

export function DestinationsSection() {
  return (
    <section className="py-24 bg-neutral-50">
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
            Popular Destinations
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Explore our most booked destinations and special offers
          </motion.p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {popularDestinations.map((destination, index) => (
            <motion.div
              key={destination.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative rounded-3xl overflow-hidden shadow-lg"
            >
              <div className="aspect-w-3 aspect-h-4 relative">
                <Image
                  src={destination.image}
                  alt={destination.city}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-xl font-bold text-white">{destination.city}</h3>
                    <p className="text-white/80">{destination.country}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-white">{destination.rating}</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-white font-semibold">{destination.price}</span>
                  {destination.trending && (
                    <motion.div
                      className="flex items-center text-emerald-400 text-sm"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <TrendingUp className="h-4 w-4 mr-1" />
                      Trending
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Special Offers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialOffers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${offer.color} p-8 text-white cursor-pointer`}
            >
              <motion.div
                className="absolute top-4 right-4"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <offer.icon className="h-8 w-8" />
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
              <p className="text-4xl font-bold mb-4">{offer.discount}</p>
              <p className="text-white/80 mb-6">{offer.description}</p>
              
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center text-sm font-semibold"
              >
                Book Now
                <ArrowRight className="h-4 w-4 ml-2" />
              </motion.button>

              {/* Floating Background Elements */}
              <motion.div
                className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-white/10"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-16 flex justify-center space-x-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg"
          >
            Explore All Destinations
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full border-2 border-purple-600 text-purple-600 font-semibold"
          >
            View All Offers
          </motion.button>
        </div>
      </div>
    </section>
  )
}