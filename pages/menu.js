import Layout from '../components/layout'
import Link from 'next/link'
import { useState } from 'react'

/**
 * Menu page with top navigation for Biografia and Projetos
 * High technical standard, clean and modern, ready for future content
 */
export default function MenuPage() {
  const [section, setSection] = useState('biografia')

  return (
    <Layout>
      <div className="w-full max-w-2xl mx-auto">
        {/* Top menu */}
        <div className="flex justify-center mb-8 space-x-4">
          <button
            className={`px-6 py-2 rounded-full border text-sm font-semibold transition-colors duration-200 focus:outline-none ${section === 'biografia' ? 'bg-lightBlue-600 text-white dark:bg-pink-500' : 'bg-white dark:bg-blueGray-800 border-gray-300 dark:border-white text-gray-800 dark:text-white hover:bg-lightBlue-100 dark:hover:bg-pink-600'}`}
            onClick={() => setSection('biografia')}
          >
            Biografia
          </button>
          <button
            className={`px-6 py-2 rounded-full border text-sm font-semibold transition-colors duration-200 focus:outline-none ${section === 'projetos' ? 'bg-lightBlue-600 text-white dark:bg-pink-500' : 'bg-white dark:bg-blueGray-800 border-gray-300 dark:border-white text-gray-800 dark:text-white hover:bg-lightBlue-100 dark:hover:bg-pink-600'}`}
            onClick={() => setSection('projetos')}
          >
            Projetos
          </button>
        </div>

        {/* Section content */}
        <div className="bg-white dark:bg-blueGray-800 rounded-xl shadow p-6 min-h-[200px] border border-gray-200 dark:border-blueGray-600">
          {section === 'biografia' && (
            <div>
              <h2 className="text-xl font-bold mb-2">Biografia</h2>
              <p className="text-gray-700 dark:text-gray-200">
                {/* Placeholder for biography text */}
                Sua biografia será exibida aqui. Edite este texto para adicionar sua história profissional, formação, conquistas e interesses.
              </p>
            </div>
          )}
          {section === 'projetos' && (
            <div>
              <h2 className="text-xl font-bold mb-2">Projetos</h2>
              <p className="text-gray-700 dark:text-gray-200">
                {/* Placeholder for projects text */}
                Seus projetos serão exibidos aqui. Edite este texto para listar e detalhar seus principais projetos profissionais ou pessoais.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
} 