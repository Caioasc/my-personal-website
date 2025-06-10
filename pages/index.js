// /Users/user/Desktop/Core Guild Project/projects/colabs/eng-teams/core/personal-website/prototype/pages/index.js

import Layout from '../components/layout'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <motion.div
        key="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}e
        className="flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center">
          <img className="w-32 h-32 mb-8 rounded-full object-cover" src="/caio-solana.png" alt="Caio Augusto Serra Castilho" />
          <h1 className="mx-auto text-2xl font-semibold tracking-widest text-center sm:text-3xl">
            CAIO A. S. CASTILHO
          </h1>
          <hr className="w-16 my-8 border-gray-300" />
          <h2 className="text-lg tracking-widest text-center">MECHATRONIC ENGINEER</h2>
          <h3 className="text-sm tracking-wider text-center text-gray-500 dark:text-gray-400 mt-2">
            PROJECT MANAGEMENT & SCALABILITY SPECIALIST
          </h3>
          <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-300 max-w-md leading-relaxed">
            Passionate about engineering and innovation. I love planning, reviewing, and starting and expanding businesses. 
            My expertise lies in project management, scalability development, and starting and expanding businesses.
          </p>
          <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-300 max-w-md leading-relaxed">
            I enjoy science, surfing, vibe coding, experiments, and extreme sports. 
            The best thing in my life was becoming a father.
          </p>
        </div>
      </motion.div>
    </Layout>
  )
}
