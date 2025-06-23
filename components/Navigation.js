// /Users/user/Desktop/Core Guild Project/projects/colabs/eng-teams/core/personal-website/prototype/components/Navigation.js

import { motion } from 'framer-motion'
import Link from 'next/link'

/**
 * Navigation component for the main site navigation
 * Uses Framer Motion for smooth animations and transitions
 * 
 * @component
 */
export default function Navigation() {
  return (
    <motion.div layoutId="nav" className="flex flex-wrap justify-center leading-6">
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
      {/* New button with plus sign for future customization */}
      <Link href="/menu">
        <button className="w-8 py-1 text-xl leading-6 tracking-widest border border-gray-300 rounded-full dark:hover:border-pink-500 dark:border-white focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600 dark:hover:text-pink-500 flex items-center justify-center">
          +
        </button>
      </Link>
    </motion.div>
  )
}