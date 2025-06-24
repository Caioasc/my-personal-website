// /Users/user/Desktop/Core Guild Project/projects/colabs/eng-teams/core/personal-website/prototype/components/Navigation.js

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

/**
 * Navigation component for the main site navigation
 * When + is clicked, Biography and Projects appear next to Home/About in the center nav.
 * They stay visible (with × to close) until × is clicked, even after navigation.
 * All labels in English.
 */
export default function Navigation() {
  const [showExtra, setShowExtra] = useState(false)
  // Track if the extra menu is open to apply top-right positioning
  useEffect(() => {
    // Optionally, add logic here if you want to handle side effects
  }, [showExtra])

  return (
    <>
      {/* Top-right floating menu for extra navigation */}
      {showExtra && (
        <div className="fixed top-6 right-8 z-50 flex items-center space-x-2 animate-fade-in">
          <Link href="/biography">
            <button className="w-24 py-1 text-xs leading-6 tracking-widest border border-gray-300 rounded-full dark:hover:border-pink-500 dark:border-white focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600 dark:hover:text-pink-500">
              BIOGRAPHY
            </button>
          </Link>
          <Link href="/projects">
            <button className="w-24 py-1 text-xs leading-6 tracking-widest border border-gray-300 rounded-full dark:hover:border-pink-500 dark:border-white focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600 dark:hover:text-pink-500">
              PROJECTS
            </button>
          </Link>
          {/* Close button to hide extra menu */}
          <button
            className="w-8 py-1 text-xl leading-6 tracking-widest border border-gray-300 rounded-full dark:hover:border-pink-500 dark:border-white focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600 dark:hover:text-pink-500 flex items-center justify-center ml-2"
            onClick={() => setShowExtra(false)}
            aria-label="Close extra menu"
          >
            ×
          </button>
        </div>
      )}
      {/* Main navigation bar (centered) */}
      <motion.div layoutId="nav" className="flex flex-wrap justify-center leading-6 items-center mt-8">
        <Link href="/">
          <button className="w-24 py-1 text-xs leading-6 tracking-widest border border-gray-300 rounded-full dark:hover:border-pink-500 dark:border-white focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600 dark:hover:text-pink-500">
            HOME
          </button>
        </Link>
        <Link href="/about">
          <button className="w-24 py-1 mx-2 text-xs leading-6 tracking-widest border border-gray-300 rounded-full dark:hover:border-pink-500 dark:border-white focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600 dark:hover:text-pink-500">
            ABOUT
          </button>
        </Link>
        {/* Show plus button only when extra menu is closed */}
        {!showExtra && (
          <button
            className="w-8 py-1 text-xl leading-6 tracking-widest border border-gray-300 rounded-full dark:hover:border-pink-500 dark:border-white focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600 dark:hover:text-pink-500 flex items-center justify-center ml-2"
            onClick={() => setShowExtra(true)}
            aria-label="Open extra menu"
          >
            +
          </button>
        )}
      </motion.div>
    </>
  )
}