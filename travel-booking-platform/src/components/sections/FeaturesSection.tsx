
// src/components/sections/FeaturesSection.tsx
'use client'

import { motion, useAnimation, useInView } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { 
  Plane, Film, Ticket, Bus, Clock, Shield, Headphones, 
  Sparkles, Star, TrendingUp, Zap, ArrowRight, Check,
  Users, Globe, Award, Heart, ChevronRight, Gift,
  ThumbsUp, MapPin, Calendar, CreditCard
} from "lucide-react"
import Link from 'next/link'

// Types
interface Feature {
  id: string;
  icon: any;
  title: string;
  description: string;
  color: string;
  darkColor: string;
  lightColor: string;
  iconColor: string;
  stats: string;
  benefits: string[];
  href: string;
  popularUses: string[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
  additionalFeatures?: {
    icon: any;
    title: string;
    description: string;
  }[];
}

interface Benefit {
  id: string;
  icon: any;
  title: string;
  description: string;
  gradient: string;
  stats?: string;
  features: string[];
  animation: string;
}

interface TrustIndicator {
  id: string;
  icon: any;
  value: string;
  label: string;
  color: string;
}

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const glowVariants = {
  initial: {
    opacity: 0.5,
    scale: 1
  },
  animate: {
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.2, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const features: Feature[] = [
  {
    id: 'flights',
    icon: Plane,
    title: "Flight Bookings",
    description: "Book domestic and international flights with real-time availability and competitive prices",
    color: "from-blue-500 to-indigo-500",
    darkColor: "from-blue-600 to-indigo-600",
    lightColor: "bg-blue-50",
    iconColor: "text-blue-600",
    stats: "10K+ Daily Flights",
    benefits: [
      "Real-time price comparison",
      "Instant booking confirmation",
      "Free seat selection",
      "Baggage tracking",
      "Mobile boarding passes",
      "Flight status updates"
    ],
    href: "/services/flights",
    popularUses: [
      "Business Travel",
      "Holiday Packages",
      "Group Bookings",
      "Last Minute Deals"
    ],
    testimonial: {
      text: "The flight booking process was incredibly smooth and saved us money!",
      author: "Sarah Mitchell",
      role: "Frequent Traveler"
    },
    additionalFeatures: [
      {
        icon: MapPin,
        title: "Route Optimization",
        description: "Find the best routes and connections"
      },
      {
        icon: Calendar,
        title: "Flexible Dates",
        description: "Search across multiple days for best deals"
      },
      {
        icon: CreditCard,
        title: "Price Lock",
        description: "Hold fares for 24-48 hours"
      }
    ]
  },
  


  {
    id: 'movies',
    icon: Film,
    title: "Movie Tickets",
    description: "Get tickets for the latest movies at your favorite theaters with exclusive deals",
    color: "from-purple-500 to-pink-500",
    darkColor: "from-purple-600 to-pink-600",
    lightColor: "bg-purple-50",
    iconColor: "text-purple-600",
    stats: "500+ Theaters",
    benefits: [
      "Advance bookings",
      "Premium seat selection",
      "Food pre-ordering",
      "Digital tickets",
      "Member discounts",
      "Movie reviews"
    ],
    href: "/services/movies",
    popularUses: [
      "New Releases",
      "IMAX Shows",
      "Special Screenings",
      "Midnight Premieres"
    ],
    additionalFeatures: [
      {
        icon: Calendar,
        title: "Show Schedule",
        description: "View all upcoming shows and times"
      },
      {
        icon: MapPin,
        title: "Theater Locator",
        description: "Find nearby theaters and showtimes"
      },
      {
        icon: Gift,
        title: "Gift Cards",
        description: "Perfect for movie lovers"
      }
    ]
  },
  {
    id: 'buses',
    icon: Bus,
    title: "Bus Bookings",
    description: "Find and book bus tickets for intercity and local routes with ease",
    color: "from-green-500 to-emerald-500",
    darkColor: "from-green-600 to-emerald-600",
    lightColor: "bg-green-50",
    iconColor: "text-green-600",
    stats: "20K+ Bus Routes",
    benefits: [
      "Real-time tracking",
      "Seat selection",
      "Mobile tickets",
      "Route optimization",
      "Multi-city booking",
      "Senior discounts"
    ],
    href: "/services/buses",
    popularUses: [
      "Daily Commute",
      "Interstate Travel",
      "Tourist Routes",
      "Airport Transfers"
    ],
    additionalFeatures: [
      {
        icon: Clock,
        title: "Live Tracking",
        description: "Track your bus in real-time"
      },
      {
        icon: Shield,
        title: "Safe Travel",
        description: "Verified operators only"
      },
      {
        icon: CreditCard,
        title: "Easy Refunds",
        description: "Hassle-free cancellations"
      }
    ]
  },
  {
    id: 'events',
    icon: Ticket,
    title: "Event Tickets",
    description: "Discover and book tickets for concerts, shows, and live experiences",
    color: "from-orange-500 to-amber-500",
    darkColor: "from-orange-600 to-amber-600",
    lightColor: "bg-orange-50",
    iconColor: "text-orange-600",
    stats: "1000+ Live Events",
    benefits: [
      "Exclusive pre-sales",
      "VIP packages",
      "Digital tickets",
      "Event reminders",
      "Group bookings",
      "Venue maps"
    ],
    href: "/services/events",
    popularUses: [
      "Concerts",
      "Sports Events",
      "Theater Shows",
      "Festivals"
    ],
    additionalFeatures: [
      {
        icon: Star,
        title: "VIP Access",
        description: "Premium experiences and packages"
      },
      {
        icon: Users,
        title: "Group Bookings",
        description: "Special rates for groups"
      },
      {
        icon: Calendar,
        title: "Event Calendar",
        description: "Never miss an event"
      }
    ]
  }
];

const benefits: Benefit[] = [
  {
    id: 'reliability',
    icon: Shield,
    title: "100% Reliable",
    description: "Secure and dependable booking system with guaranteed confirmations",
    gradient: "from-blue-600 to-cyan-500",
    stats: "99.9% Success Rate",
    features: [
      "Instant Confirmation",
      "Secure Payments",
      "24/7 Support",
      "Money-back Guarantee"
    ],
    animation: "pulse"
  },
  {
    id: 'support',
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support with real humans ready to help",
    gradient: "from-violet-600 to-purple-500",
    stats: "< 2min Response",
    features: [
      "Live Chat",
      "Phone Support",
      "Email Support",
      "Social Media"
    ],
    animation: "bounce"
  },
  {
    id: 'savings',
    icon: TrendingUp,
    title: "Best Prices",
    description: "Guaranteed best prices with our price match promise",
    gradient: "from-pink-600 to-rose-500",
    stats: "Save up to 50%",
    features: [
      "Price Match",
      "Group Discounts",
      "Loyalty Rewards",
      "Flash Sales"
    ],
    animation: "pulse"
  }
];




// Enhanced FeatureCard Component
const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "0px 0px -10% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isHovered) {
      controls.start({
        opacity: 1,
        height: "auto",
        transition: { duration: 0.3, ease: "easeOut" }
      });
    } else {
      controls.start({
        opacity: 0,
        height: 0,
        transition: { duration: 0.2, ease: "easeIn" }
      });
    }
  }, [isHovered, controls]);

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: index * 0.1
          }
        }
      }}
      className="relative group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Animated Background Glow */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300`}
        variants={glowVariants}
        animate="animate"
      />

      {/* Main Card Content */}
      <motion.div
        className="relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-500"
        animate={{
          y: isHovered ? -10 : 0,
          boxShadow: isHovered 
            ? "0 20px 40px rgba(0,0,0,0.2)" 
            : "0 4px 6px rgba(0,0,0,0.1)"
        }}
      >
        {/* Icon Container with Animation */}
        <motion.div
          className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-0.5 relative`}
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center relative overflow-hidden">
            {/* Animated background for icon */}
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{
                background: [
                  `linear-gradient(0deg, ${feature.color})`,
                  `linear-gradient(180deg, ${feature.color})`,
                  `linear-gradient(360deg, ${feature.color})`
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <feature.icon className={`h-8 w-8 ${feature.iconColor} relative z-10`} />
          </div>
        </motion.div>

        {/* Title and Description */}
        <div className="mt-6 space-y-4">
          <motion.h3
            className="text-xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent"
            layout
          >
            {feature.title}
          </motion.h3>
          
          <p className="text-neutral-600 transition-all duration-300">
            {feature.description}
          </p>

          {/* Stats Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-gradient-to-r from-indigo-50 to-purple-50"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <TrendingUp className="h-4 w-4 text-indigo-600" />
            <span className="text-indigo-700 font-medium">{feature.stats}</span>
          </motion.div>

          {/* Expandable Content */}
          <motion.div 
            className="overflow-hidden"
            animate={controls}
            initial={{ height: 0, opacity: 0 }}
          >
            {/* Benefits List */}
            <div className="space-y-4 mt-4">
              <h4 className="font-semibold text-neutral-900">Key Benefits</h4>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 text-sm text-neutral-600"
                  >
                    <div className={`p-1 rounded-full ${feature.lightColor}`}>
                      <Check className={`h-3 w-3 ${feature.iconColor}`} />
                    </div>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Popular Uses */}
            <div className="mt-6">
              <h4 className="font-semibold text-neutral-900 mb-3">Popular Uses</h4>
              <div className="flex flex-wrap gap-2">
                {feature.popularUses.map((use, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className={`text-xs px-2 py-1 rounded-full ${feature.lightColor} ${feature.iconColor}`}
                  >
                    {use}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Additional Features */}
            {feature.additionalFeatures && (
              <div className="mt-6">
                <h4 className="font-semibold text-neutral-900 mb-3">Additional Features</h4>
                <div className="grid grid-cols-1 gap-3">
                  {feature.additionalFeatures.map((additionalFeature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50"
                    >
                      <additionalFeature.icon className={`h-5 w-5 ${feature.iconColor} mt-0.5`} />
                      <div>
                        <h5 className="font-medium text-neutral-900">{additionalFeature.title}</h5>
                        <p className="text-sm text-neutral-600">{additionalFeature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Testimonial */}
            {feature.testimonial && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-6 p-4 rounded-lg bg-gradient-to-r from-neutral-50 to-neutral-100"
              >
                <p className="text-sm text-neutral-600 italic">"{feature.testimonial.text}"</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className={`h-8 w-8 rounded-full ${feature.lightColor} flex items-center justify-center`}>
                    <Users className={`h-4 w-4 ${feature.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">{feature.testimonial.author}</p>
                    <p className="text-xs text-neutral-500">{feature.testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Action Button */}
            <Link href={feature.href}>
              <motion.button
                className={`mt-6 w-full py-3 px-4 rounded-xl bg-gradient-to-r ${feature.color} text-white font-medium`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More About {feature.title}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};



// BenefitCard Component
const BenefitCard = ({ benefit, index }: { benefit: Benefit; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Floating animation for icons
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: index * 0.2 
          }
        }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Animated Background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`}
        animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
      />

      {/* Card Content */}
      <motion.div
        className="relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-500"
        animate={{
          y: isHovered ? -10 : 0,
          boxShadow: isHovered 
            ? "0 20px 40px rgba(0,0,0,0.2)" 
            : "0 4px 6px rgba(0,0,0,0.1)"
        }}
      >
        {/* Icon Container */}
        <motion.div
          className={`w-20 h-20 rounded-full bg-gradient-to-r ${benefit.gradient} p-0.5 mx-auto`}
          animate={floatingAnimation}
        >
          <div className="w-full h-full bg-white rounded-full flex items-center justify-center relative overflow-hidden">
            {/* Animated background for icon */}
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{
                background: [
                  `linear-gradient(0deg, ${benefit.gradient})`,
                  `linear-gradient(180deg, ${benefit.gradient})`,
                  `linear-gradient(360deg, ${benefit.gradient})`
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <benefit.icon className="h-10 w-10 text-neutral-900 relative z-10" />
          </div>
        </motion.div>

        {/* Title & Description */}
        <motion.div 
          className="text-center mt-6"
          animate={isHovered ? { y: -5 } : { y: 0 }}
        >
          <h3 className="text-xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent">
            {benefit.title}
          </h3>
          {benefit.stats && (
            <motion.div
              className="mt-2 text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {benefit.stats}
            </motion.div>
          )}
          <p className="mt-3 text-neutral-600">{benefit.description}</p>
        </motion.div>

        {/* Features List with Animations */}
        <motion.div
          className="mt-6 space-y-3"
          animate={isHovered ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
        >
          {benefit.features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-2 text-sm text-neutral-600 bg-neutral-50 p-2 rounded-lg"
            >
              <motion.div
                className="h-6 w-6 rounded-full bg-white flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
              </motion.div>
              <span>{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 rounded-t-full"
          style={{
            background: `linear-gradient(to right, ${benefit.gradient})`
          }}
          animate={{
            width: isHovered ? '100%' : '50%',
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

// Trust Indicators Component
const TrustIndicators = () => {
  const indicators = [
    {
      icon: Star,
      value: "4.9/5",
      label: "User Rating",
      gradient: "from-yellow-400 to-amber-500"
    },
    {
      icon: Users,
      value: "1M+",
      label: "Happy Customers",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: Globe,
      value: "100+",
      label: "Countries Served",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: Shield,
      value: "100%",
      label: "Secure Bookings",
      gradient: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <div className="mt-20 py-12 bg-gradient-to-r from-neutral-50 via-purple-50 to-pink-50 rounded-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {indicators.map((indicator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                className="inline-block"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              >
                <div className={`h-12 w-12 mx-auto rounded-full bg-gradient-to-r ${indicator.gradient} p-0.5`}>
                  <div className="h-full w-full rounded-full bg-white flex items-center justify-center">
                    <indicator.icon className="h-6 w-6 text-neutral-900" />
                  </div>
                </div>
              </motion.div>
              
              <motion.p
                className={`mt-4 text-3xl font-bold bg-gradient-to-r ${indicator.gradient} bg-clip-text text-transparent`}
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              >
                {indicator.value}
              </motion.p>
              <p className="mt-1 text-sm text-neutral-600">{indicator.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};










// Main FeaturesSection Component
export function FeaturesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
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
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-20"
        >
          {/* Premium Features Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="h-4 w-4 text-indigo-600" />
              <span className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Premium Features
              </span>
              <Sparkles className="h-4 w-4 text-purple-600" />
            </motion.div>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            className="mt-8 text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Everything You Need
          </motion.h2>

          {/* Description */}
          <motion.p
            className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Discover our comprehensive suite of features designed to make your booking experience seamless
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
            />
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="relative"
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Why Choose Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={benefit.id}
                benefit={benefit}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <TrustIndicators />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-neutral-600 mb-8">
            Join millions of satisfied customers who trust us for their booking needs
          </p>
          <motion.div
            className="flex justify-center gap-4"
            variants={containerVariants}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Start Booking Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
