'use client' 

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plane, Film, Ticket, Bus, Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Plane className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-bold text-indigo-600">Booking App</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/flights">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-indigo-600 transition-colors">
              <Plane className="h-5 w-5" />
              <span className="font-medium">Flights</span>
            </div>
          </Link>
          <Link href="/movies">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-indigo-600 transition-colors">
              <Film className="h-5 w-5" />
              <span className="font-medium">Movies</span>
            </div>
          </Link>
          <Link href="/events">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-indigo-600 transition-colors">
              <Ticket className="h-5 w-5" />
              <span className="font-medium">Events</span>
            </div>
          </Link>
          <Link href="/buses">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-indigo-600 transition-colors">
              <Bus className="h-5 w-5" />
              <span className="font-medium">Buses</span>
            </div>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-neutral-100 transition-colors"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-neutral-600" />
          ) : (
            <Menu className="h-6 w-6 text-neutral-600" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md p-4 space-y-4"
        >
          <Link href="/flights">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-indigo-600 transition-colors">
              <Plane className="h-5 w-5" />
              <span className="font-medium">Flights</span>
            </div>
          </Link>
          <Link href="/movies">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-indigo-600 transition-colors">
              <Film className="h-5 w-5" />
              <span className="font-medium">Movies</span>
            </div>
          </Link>
          <Link href="/events">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-indigo-600 transition-colors">
              <Ticket className="h-5 w-5" />
              <span className="font-medium">Events</span>
            </div>
          </Link>
          <Link href="/buses">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-indigo-600 transition-colors">
              <Bus className="h-5 w-5" />
              <span className="font-medium">Buses</span>
            </div>
          </Link>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;