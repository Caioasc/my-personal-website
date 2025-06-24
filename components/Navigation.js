// /Users/user/Desktop/Core Guild Project/projects/colabs/eng-teams/core/personal-website/prototype/components/Navigation.js

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

/**
 * Navigation component for the main site navigation
 * When + is clicked, Biography and Projects appear next to Home/About in the center nav.
 * They stay visible (with × to close) until × is clicked, even after navigation.
 * All labels in English.
 */
export default function Navigation() {
  const [showExtra, setShowExtra] = useState(false)

  return (
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
      {showExtra && (
        <>
          <Link href="/biography">
            <button className="w-24 py-1 mx-2 text-xs leading-6 tracking-widest border border-gray-300 rounded-full dark:hover:border-pink-500 dark:border-white focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600 dark:hover:text-pink-500">
              BIOGRAPHY
            </button>
          </Link>
          <Link href="/projects">
            <button className="w-24 py-1 mx-2 text-xs leading-6 tracking-widest border border-gray-300 rounded-full dark:hover:border-pink-500 dark:border-white focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600 dark:hover:text-pink-500">
              PROJECTS
            </button>
          </Link>
        </>
      )}
      {/* Plus/close button toggles extra menu */}
      <button
        className="w-8 py-1 text-xl leading-6 tracking-widest border border-gray-300 rounded-full dark:hover:border-pink-500 dark:border-white focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600 dark:hover:text-pink-500 flex items-center justify-center ml-2"
        onClick={() => setShowExtra((v) => !v)}
        aria-label={showExtra ? 'Close extra menu' : 'Open extra menu'}
      >
        {showExtra ? '×' : '+'}
      </button>
    </motion.div>
  )
}