// /Users/user/Desktop/Core Guild Project/projects/colabs/eng-teams/core/personal-website/prototype/components/Navigation.js

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

/**
 * Navigation component for the main site navigation
 * Now includes toggleable Biografia and Projetos buttons via the + button
 *
 * @component
 */
export default function Navigation() {
  // Toggle state for extra menu
  const [showExtra, setShowExtra] = useState(false)

  return (
    <motion.div layoutId="nav" className="flex flex-wrap justify-center leading-6 items-center">
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
      {/* Toggleable extra menu buttons */}
      {showExtra && (
        <>
          <Link href="/biografia">
            <button className="w-24 py-1 mx-2 text-xs leading-6 tracking-widest border border-gray-300 rounded-full dark:hover:border-pink-500 dark:border-white focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600 dark:hover:text-pink-500">
              BIOGRAFIA
            </button>
          </Link>
          <Link href="/projetos">
            <button className="w-24 py-1 mx-2 text-xs leading-6 tracking-widest border border-gray-300 rounded-full dark:hover:border-pink-500 dark:border-white focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600 dark:hover:text-pink-500">
              PROJETOS
            </button>
          </Link>
        </>
      )}
      {/* Plus button toggles extra menu */}
      <button
        className="w-8 py-1 text-xl leading-6 tracking-widest border border-gray-300 rounded-full dark:hover:border-pink-500 dark:border-white focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600 dark:hover:text-pink-500 flex items-center justify-center ml-2"
        onClick={() => setShowExtra((v) => !v)}
        aria-label={showExtra ? 'Fechar menu extra' : 'Abrir menu extra'}
      >
        {showExtra ? '×' : '+'}
      </button>
    </motion.div>
  )
}