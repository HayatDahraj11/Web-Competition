// src/components/sections/FeaturesSection.tsx
'use client'

import { motion } from "framer-motion"
import { Plane, Film, Ticket, Bus, Clock, Shield, Headphones } from "lucide-react"

const features = [
  {
    icon: Plane,
    title: "Flight Bookings",
    description: "Book domestic and international flights with real-time availability",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Film,
    title: "Movie Tickets",
    description: "Get tickets for the latest movies at your favorite theaters",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Ticket,
    title: "Event Bookings",
    description: "Book tickets for concerts, sports events, and more",
    color: "bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    icon: Bus,
    title: "Bus Tickets",
    description: "Book bus tickets for intercity and interstate travel",
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
]

const benefits = [
  {
    icon: Clock,
    title: "Real-time Updates",
    description: "Get instant updates on availability and booking status",
  },
  {
    icon: Shield,
    title: "Secure Booking",
    description: "End-to-end encrypted and secure payment processing",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your needs",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`${feature.color} rounded-2xl p-6 cursor-pointer`}
            >
              <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-neutral-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-24">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-neutral-900"
          >
            Why Choose Us
          </motion.h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mx-auto h-12 w-12 rounded-full bg-neutral-100 flex items-center justify-center">
                  <benefit.icon className="h-6 w-6 text-neutral-900" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-neutral-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-neutral-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}