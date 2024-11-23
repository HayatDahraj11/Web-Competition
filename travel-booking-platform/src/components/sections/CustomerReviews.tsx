// src/components/sections/CustomerReviews.tsx
'use client'

import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"
import { useInView } from "framer-motion"
import { Star, Quote, User } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Alex Smith",
    role: "Software Engineer",
    comment: "Great product! Really helped improve our workflow. The implementation was smooth and the results were immediate.",
    rating: 5,
    gradient: "from-blue-500 to-indigo-500",
    lightGradient: "from-blue-50 to-indigo-50"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager",
    comment: "Excellent customer service and quality. Would definitely recommend to anyone looking for a reliable solution.",
    rating: 4,
    gradient: "from-purple-500 to-pink-500",
    lightGradient: "from-purple-50 to-pink-50"
  },
  {
    id: 3,
    name: "Mike Brown",
    role: "Designer",
    comment: "Intuitive interface and powerful features. It's exactly what our team needed to streamline our processes.",
    rating: 5,
    gradient: "from-green-500 to-emerald-500",
    lightGradient: "from-green-50 to-emerald-50"
  }
];

const ReviewCard = ({ review, index }: { review: any; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
        ease: "easeOut"
      }}
      className="relative group"
    >
      {/* Animated Background Glow */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${review.lightGradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`}
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Card Content */}
      <motion.div
        className="relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-500"
        whileHover={{
          y: -10,
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
        }}
      >
        <div className="flex items-start justify-between mb-6">
          {/* User Info */}
          <div className="flex items-center gap-4">
            <motion.div
              className={`w-12 h-12 rounded-xl bg-gradient-to-r ${review.gradient} flex items-center justify-center text-white font-semibold text-lg`}
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {review.name[0]}
            </motion.div>
            
            <div>
              <h3 className="font-semibold text-gray-900">{review.name}</h3>
              <p className="text-sm text-gray-600">{review.role}</p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.1 + i * 0.1
                }}
              >
                <Star
                  className={`w-5 h-5 ${
                    i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Review Text */}
        <motion.p
          className="text-gray-600 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {review.comment}
        </motion.p>

        {/* Quote Icon */}
        <motion.div
          className="absolute bottom-6 right-8 text-gray-100"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Quote size={40} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const CustomerReviews = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section
      ref={ref}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-50" />
        {[...Array(10)].map((_, i) => (
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
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 }
          }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0%", "100%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Trusted by thousands of satisfied users worldwide
          </motion.p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;