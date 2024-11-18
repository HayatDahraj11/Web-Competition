// src/components/sections/FeaturesSection.tsx
'use client'

import { motion, useAnimation } from "framer-motion"
import { useState } from "react"
import { 
  Plane, Film, Ticket, Bus, Clock, Shield, Headphones, 
  Sparkles, Star, TrendingUp, Zap, ArrowRight
} from "lucide-react"

const features = [
  {
    icon: Plane,
    title: "Flight Bookings",
    description: "Book domestic and international flights with real-time availability",
    color: "from-blue-500 to-indigo-500",
    darkColor: "from-blue-600 to-indigo-600",
    lightColor: "bg-blue-50",
    iconColor: "text-blue-600",
    stats: "10K+ Flights"
  },
  {
    icon: Film,
    title: "Movie Tickets",
    description: "Get tickets for the latest movies at your favorite theaters",
    color: "from-purple-500 to-pink-500",
    darkColor: "from-purple-600 to-pink-600",
    lightColor: "bg-purple-50",
    iconColor: "text-purple-600",
    stats: "100+ Theaters"
  },
  {
    icon: Ticket,
    title: "Event Bookings",
    description: "Book tickets for concerts, sports events, and more",
    color: "from-pink-500 to-rose-500",
    darkColor: "from-pink-600 to-rose-600",
    lightColor: "bg-pink-50",
    iconColor: "text-pink-600",
    stats: "500+ Events"
  },
  {
    icon: Bus,
    title: "Bus Tickets",
    description: "Book bus tickets for intercity and interstate travel",
    color: "from-green-500 to-emerald-500",
    darkColor: "from-green-600 to-emerald-600",
    lightColor: "bg-green-50",
    iconColor: "text-green-600",
    stats: "5K+ Routes"
  },
]

const benefits = [
  {
    icon: Clock,
    title: "Real-time Updates",
    description: "Get instant updates on availability and booking status",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Shield,
    title: "Secure Booking",
    description: "End-to-end encrypted and secure payment processing",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your needs",
    gradient: "from-amber-500 to-orange-500",
  },
]

export function FeaturesSection() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-50" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-indigo-100/20 to-purple-100/20 backdrop-blur-3xl"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 50, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <motion.div
              className="text-sm font-semibold text-indigo-600 flex items-center justify-center gap-2 mb-4"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="h-4 w-4" />
              <span>Premium Features</span>
              <Sparkles className="h-4 w-4" />
            </motion.div>
          </motion.div>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Everything You Need
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredFeature(feature.title)}
              onHoverEnd={() => setHoveredFeature(null)}
              className="relative group"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300`}
              />
              <motion.div
                className={`relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300
                  ${hoveredFeature === feature.title ? 'translate-y-[-10px] shadow-2xl' : ''}`}
              >
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-0.5`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                    <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
                  </div>
                </motion.div>

                <motion.h3
                  className="mt-6 text-xl font-semibold bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent"
                >
                  {feature.title}
                </motion.h3>
                <p className="mt-2 text-neutral-600">
                  {feature.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-neutral-500">
                  <TrendingUp className="h-4 w-4" />
                  {feature.stats}
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-6 flex items-center text-sm font-semibold text-indigo-600"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          >
            Why Choose Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300`} />
                <div className="relative bg-white rounded-2xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${benefit.gradient} p-0.5 mb-6 mx-auto`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <benefit.icon className="h-8 w-8 text-indigo-600" />
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-semibold text-center mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600 text-center">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}