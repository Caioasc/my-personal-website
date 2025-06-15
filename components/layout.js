// /Users/user/Desktop/Core Guild Project/projects/colabs/eng-teams/core/personal-website/prototype/components/layout.js

import { AnimatePresence, motion } from 'framer-motion'
import { faDev, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Link from 'next/link'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import DarkModeToggle from './DarkModeToggle'
import SocialIcons from './SocialIcons'
import Script from 'next/script'

export default function Layout({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.getElementsByTagName('html')[0].classList.add('dark')
    } else {
      document.getElementsByTagName('html')[0].classList.remove('dark')
    }
  }, [])

  useEffect(() => {
    if (theme == 'dark') {
      document.getElementsByTagName('html')[0].classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.getElementsByTagName('html')[0].classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [theme])

  const toggleDarkMode = () => {
    if (theme == 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen text-gray-800 transition duration-1000 ease-in-out dark:text-white dark:bg-blueGray-700">
      <Head>
        <title>Caio Augusto Serra Castilho</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Caio Augusto Serra Castilho - Mechatronic Engineer, Project Management & Scalability Specialist" />
        
        {/* Favicon Configuration */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Android/Chrome Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
      </Head>
      <Script
        defer
        data-domain="caiocastilho.com"
        src="https://plausible.io/js/plausible.js"
      />
      <div
        style={{ minWidth: '24rem', maxWidth: '37rem' }}
        className="flex flex-col items-center justify-center w-2/3"
      >
        <div className="fixed top-3 right-3">
          <DarkModeToggle
            isDark={theme === 'dark'}
            onClick={toggleDarkMode}
          />
        </div>
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
        </motion.div>
        <motion.div
          layoutId="border-div"
          className="flex flex-col items-center justify-center w-full py-8 my-6 border-t border-b border-gray-300 dark:border-white"
        >
          <AnimatePresence mode="wait">{children}</AnimatePresence>
        </motion.div>
        <SocialIcons />
      </div>
    </div>
  )
}
