// /Users/user/Desktop/Core Guild Project/projects/colabs/eng-teams/core/personal-website/prototype/components/Navigation.js

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

/**
 * Navigation component for the main site navigation
 * The + button and extra menu are fixed at the top right, next to the dark mode toggle.
 * Extra menu closes when Home or About is clicked.
 * All labels in English.
 */
export default function Navigation() {
  const [showExtra, setShowExtra] = useState(false)
  const router = useRouter()

  // Close extra menu when navigating to Home or About
  const handleNav = (href) => {
    setShowExtra(false)
    router.push(href)
  }

  return (
    <>
      {/* Main navigation bar (centered) */}
      <motion.div layoutId="nav" className="flex flex-wrap justify-center leading-6 items-center mt-8">
        <button
          className="w-24 py-1 text-xs leading-6 tracking-widest border border-gray-300 rounded-full dark:hover:border-pink-500 dark:border-white focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600 dark:hover:text-pink-500"
          onClick={() => handleNav('/')}
        >
          HOME
        </button>
        <button
          className="w-24 py-1 mx-2 text-xs leading-6 tracking-widest border border-gray-300 rounded-full dark:hover:border-pink-500 dark:border-white focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600 dark:hover:text-pink-500"
          onClick={() => handleNav('/about')}
        >
          ABOUT
        </button>
      </motion.div>
      {/* Fixed top-right extra menu and + button */}
      <div className="fixed top-3 right-20 z-50 flex items-center space-x-2">
        {showExtra && (
          <>
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
          </>
        )}
        {/* Plus button toggles extra menu */}
        <button
          className="w-8 py-1 text-xl leading-6 tracking-widest border border-gray-300 rounded-full dark:hover:border-pink-500 dark:border-white focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600 dark:hover:text-pink-500 flex items-center justify-center"
          onClick={() => setShowExtra((v) => !v)}
          aria-label={showExtra ? 'Close extra menu' : 'Open extra menu'}
        >
          {showExtra ? '×' : '+'}
        </button>
      </div>
    </>
  )
}